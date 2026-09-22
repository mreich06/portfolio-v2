import styles from './SocialRail.module.css';
import { SOCIAL_LINKS, type SocialIconKey } from '../../constants';
import { GithubIcon, LinkedinIcon, TikTokIcon, WhatsAppIcon } from '../icons';

const ICONS: Record<SocialIconKey, typeof GithubIcon> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  tiktok: TikTokIcon,
  whatsapp: WhatsAppIcon,
};

const SocialRail = () => (
  <aside className={styles.rail} aria-label="Social links">
    <ul className={styles.list}>
      {SOCIAL_LINKS.map(({ key, label, href }) => {
        const Icon = ICONS[key];
        return (
          <li key={key}>
            <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.link}>
              <Icon size={24} />
            </a>
          </li>
        );
      })}
    </ul>
    <span className={styles.line} aria-hidden="true" />
  </aside>
);

export default SocialRail;
