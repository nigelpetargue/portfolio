import styles from '@/styles/projects.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import { AiFillGithub, AiOutlineExport } from 'react-icons/ai';
import Reveal from '../Reveal';

interface ProjectProps {
  modalContent: JSX.Element;
  description: string;
  projectLink: string;
  imgSrc: string;
  tech: string[];
  title: string;
  code: string;
}

export default function Project({
  projectLink,
  description,
  imgSrc,
  title,
  code,
  tech,
}: ProjectProps) {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={styles.projectImage}
        >
          <Image
            priority
            src={imgSrc}
            alt={`An image of the ${title} project.`}
            width={500}
            height={180}
            style={{
              width: hovered ? '90% !important' : '85% !important',
              rotate: hovered ? '2deg' : '0deg',
            }}
          />
        </div>
        <div className={styles.projectCopy}>
          <Reveal width="100%">
            <div className={styles.projectTitle}>
              <h4>{title}</h4>
              <div className={styles.projectTitleLine} />

              <Link href={code} target="_blank" rel="nofollow">
                <AiFillGithub size="2.8rem" />
              </Link>

              <Link href={projectLink} target="_blank" rel="nofollow">
                <AiOutlineExport size="2.8rem" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.projectTech}>{tech.join(' - ')}</div>
          </Reveal>
          <Reveal>
            <p className={styles.projectDescription}>
              {description} <br />
              <span>
                <a href={projectLink}>Learn more {'>'}</a>
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
    </>
  );
}
