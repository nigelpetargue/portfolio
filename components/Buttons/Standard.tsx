import { MouseEventHandler } from 'react';
import styles from '@/styles/buttons/standard.module.scss';

interface StandardButtonProps {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function StandardButton({ children, onClick }: StandardButtonProps) {
  return (
    <button onClick={onClick} className={styles.standardButton}>
      {children}
    </button>
  );
}
