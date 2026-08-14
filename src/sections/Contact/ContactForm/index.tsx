import { useState, type ChangeEventHandler } from 'react';
import styles from './ContactForm.module.css';
import Text from './../../../components/Text';
import Button from '../../../components/Button';
interface InputFieldProps {
  id: string;
  type: string;
  value: string;
  input?: boolean;
  header: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const InputField = ({ id, type, value, header, input, ...props }: InputFieldProps) => {
  return (
    <div className={styles.field}>
      <Text variant="xs" font="mono" styles={styles.label}>
        {header}
      </Text>
      {input ? (
        <input id={id} type={type} value={value} required className={styles.input} {...props} />
      ) : (
        <textarea id={id} value={value} placeholder="Let's chat!" required className={`${styles.input} ${styles.textarea}`} {...props} />
      )}
    </div>
  );
};
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <InputField id={'name'} type={'text'} input={true} value={name} header="Name: " onChange={(e) => setName(e.target.value)} />
        <InputField id={'email'} type={'email'} input={true} value={email} header="Email: " onChange={(e) => setEmail(e.target.value)} />
        <InputField id={'message'} type={'textarea'} value={message} header="Message: " onChange={(e) => setMessage(e.target.value)} />
        <Button className={styles.button}>Send message</Button>
      </form>
    </div>
  );
};

export default ContactForm;
