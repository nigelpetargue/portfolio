import { Metadata } from 'next';
import styles from '../styles/page.module.scss';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Project/Projects';
import Experience from '@/components/Experience/Experience';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Nigel Petargue | Software Developer',
  icons: [{ rel: 'icon', url: './icon.ico' }],
};

export default function Home() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <main id="main">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
