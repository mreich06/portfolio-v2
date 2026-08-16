import { Router } from 'express';
import { z } from 'zod';
import { Resend } from 'resend';
const router = Router();

type FormDataType = { name: string; email: string; message: string };

const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.email('Email is required'),
  message: z.string().min(10, 'Message too short').max(2000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormDataType) => {
  const { name, email, message } = formData;
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['mayareich0606@gmail.com'],
    subject: `Message from ${name}, email: ${email}`,
    html: message,
  });

  if (error) {
    throw new Error(`Email failed: ${error.message}`);
  }

  return data;
};

router.post('/', async (req, res) => {
  const result = ContactSchema.safeParse(req.body);

  // validate on server for requests bypassed on client
  if (!result.success) {
    return res.status(400).json({ success: false, error: 'Invalid contact form input' });
  } else {
    try {
      // send email
      const emailData = await sendEmail(result.data);
      res.status(200).json({ success: true, data: emailData });
    } catch (error) {
      res.status(500).json({ success: false, error: `Error sending email: ${error}` });
    }
  }
});

export default router;
