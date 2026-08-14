import styles from './Footer.module.css';
import Text from '../Text';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Text variant="xs" color="muted" font="sans">
        Made with ❤️ using <Text as="span" variant="xs" color="blue" font="sans">React</Text> &{' '}
        <Text as="span" variant="xs" color="orange" font="sans">TypeScript</Text> by Maya
      </Text>
      <Text variant="xxs" color="muted" font="sans">
        © 2026 • All rights reserved
      </Text>
    </div>
  );
};

export default Footer;
