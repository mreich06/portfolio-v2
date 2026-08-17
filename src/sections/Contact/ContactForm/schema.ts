import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.email('Email is required'),
  message: z.string().min(10, 'Message too short').max(2000),
});

export type ContactInput = z.infer<typeof ContactSchema>;
