'use client'
import styles from '@/styles/hero.module.scss'

import { motion } from 'framer-motion'
import StandardButton from '@/components/Buttons/Standard'
import Reveal from '@/components/Reveal'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m Nigel<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a <span>Software Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
              A skilled software developer dedicated to building innovative, user-centric
              digital solutions that deliver exceptional experiences.
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            className={styles.profile}
            src='/284268199_509978970880601_3996378834866403976_n.jpg'
            priority
            alt='Nigel Petargue | Software Developer'
            width={250}
            height={250}
          />
        </motion.div>
      </div>
    </section>
  )
}
