import styles from '@/styles/header.module.scss';
import Reveal from './Reveal';

interface SectionHeaderProps {
  title: string;
  dir?: 'l' | 'r';
}

export default function SectionHeader({ title, dir }: SectionHeaderProps) {
  return (
    <div
      className={styles.sectionHeader}
      style={{ flexDirection: dir === 'r' ? 'row' : 'row-reverse' }}
    >
      <div className={styles.line} />
      <h3>
        <Reveal>
          <span className={styles.title}>
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
}
