import styles from './HobbyBadge.module.css';
interface HobbyBadge {
  icon: any;
  label: string;
}

const HobbyBadge = ({ icon, label }: HobbyBadge) => {
  return (
    <div className={styles.badgeContainer}>
      <img width={20} src={icon} />
      <p className="font-sans-xs color-white-70">{label}</p>
    </div>
  );
};

export default HobbyBadge;
