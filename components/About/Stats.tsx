import styles from '@/styles/stats.module.scss';
import Reveal from '../Reveal';
import { AiFillCode, AiFillSmile } from 'react-icons/ai';

export default function Stats() {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">Nextjs</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Postgres</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Zustand</span>
            <span className="chip">Mantine UI</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Figma</span>
            <span className="chip">Firebase</span>
            <span className="chip">Supabase</span>
            <span className="chip">Vercel</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
