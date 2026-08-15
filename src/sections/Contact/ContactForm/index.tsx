import { useState, type ChangeEventHandler } from 'react';
import styles from './ContactForm.module.css';
import Text from './../../../components/Text';
import Button from '../../../components/Button';
import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.email('Email is required'),
  message: z.string().min(10, 'Message too short').max(2000),
});

// valid field won't appear in properties, so make them optional
type FormErrors = Partial<Record<keyof ContactInput, { errors: string[] }>>;
type ContactInput = z.infer<typeof ContactSchema>;

interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  input?: boolean;
  header: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  errors?: { errors: string[] } | undefined;
}

const InputField = ({ id, type, value, header, input, errors, ...props }: InputFieldProps) => {
  const errorList = errors?.errors;
  return (
    <div className={styles.field}>
      <Text as="label" htmlFor={id} variant="xs" font="mono" styles={styles.label}>
        {header}
      </Text>
      {input ? (
        <input id={id} type={type} value={value} className={styles.input} {...props} />
      ) : (
        <textarea id={id} value={value} placeholder="Let's chat!" className={`${styles.input} ${styles.textarea}`} {...props} />
      )}
      {errorList &&
        errorList.map((error, i) => (
          <Text key={i} variant="xs" color="cyan" font="sans">
            {error}
          </Text>
        ))}
    </div>
  );
};
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = { name, email, message };
    const result = ContactSchema.safeParse(formData);

    if (!result.success) {
      const tree = z.treeifyError(result.error);
      setErrors({ name: tree.properties?.name, email: tree.properties?.email, message: tree.properties?.message });
      return;
    }

    setErrors({});
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <InputField
          id={'name'}
          type={'text'}
          input={true}
          value={name}
          header="Name: "
          onChange={(e) => setName(e.target.value)}
          errors={errors?.name}
        />
        <InputField
          id={'email'}
          type={'email'}
          input={true}
          value={email}
          header="Email: "
          onChange={(e) => setEmail(e.target.value)}
          errors={errors?.email}
        />
        <InputField
          id={'message'}
          type={'textarea'}
          value={message}
          header="Message: "
          onChange={(e) => setMessage(e.target.value)}
          errors={errors?.message}
        />
        <Button className={styles.button}>Send message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
