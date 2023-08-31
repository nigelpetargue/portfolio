import styles from '@/styles/buttons/outlined.module.scss';
import { MouseEventHandler } from 'react';
import { AiFillFilePdf } from 'react-icons/ai';

interface OutlinedButtonProps {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function OutlinedButton({ children, onClick }: OutlinedButtonProps) {
  return (
    <button onClick={onClick} className={styles.outlinedButton}>
      <AiFillFilePdf size="2.4rem" />
      {children}
    </button>
  );
}
