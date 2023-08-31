'use client';
import styles from '@/styles/about.module.scss';
import Links from '../Links';
import Reveal from '../Reveal';
import SectionHeader from '../SectionHeader';
import Stats from './Stats';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hi there! I&apos;m Nigel Petargue, and I&apos;m a Bachelor of Science in Information
              System graduate.
              <br />
              <br />I became intrigued by crafting websites and delving into programming during my
              time in senior high school. This interest sparked when I began replicating designs
              from WordPress into HTML and CSS.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always excited to find new things to do that challenge me and help me learn
              and get better as a developer. If you want to work together or have any questions,
              feel free to reach out! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <Links />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
}
