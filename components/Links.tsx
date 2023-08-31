import styles from '@/styles/links.module.scss';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook, AiFillSkype } from 'react-icons/ai';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Links() {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/nigel-petargue-b31704259/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://join.skype.com/invite/u9O4Fsbi7tPX" target="_blank" rel="nofollow">
          <AiFillSkype size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://github.com/nigelpetargue" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://www.facebook.com/" target="_blank" rel="nofollow">
          <AiFillFacebook size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
}
