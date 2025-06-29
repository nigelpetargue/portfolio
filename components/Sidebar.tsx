'use client';

import styles from '@/styles/sidebar.module.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('.section-wrapper');

    const options = {
      threshold: 0.3,
    };

    const callback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <motion.nav className={styles.sidebar}>
      <span
        className={styles.logo}
        onClick={() => {
          document.location.hash === ''
            ? document.getElementById('main')?.scrollIntoView()
            : (document.location.hash = '');
        }}
      >
        N<span>.</span>
      </span>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="#about"
        onClick={() => {
          setSelected('about');
        }}
        className={selected === 'about' ? styles.selected : ''}
      >
        About
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        href="#projects"
        onClick={() => setSelected('projects')}
        className={selected === 'projects' ? styles.selected : ''}
      >
        Projects
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        href="#experience"
        onClick={() => setSelected('experience')}
        className={selected === 'experience' ? styles.selected : ''}
      >
        Exp.
      </motion.a>
      <motion.a
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        href="#contact"
        onClick={() => setSelected('contact')}
        className={selected === 'contact' ? styles.selected : ''}
      >
        Contact
      </motion.a>
    </motion.nav>
  );
}
