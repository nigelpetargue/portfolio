'use client'

import styles from '@/styles/heading.module.scss'
import Links from './Links'
import OutlinedButton from './Buttons/Outlined'

export default function Header() {
  return (
    <header className={styles.heading}>
      <Links />
      <OutlinedButton onClick={() => window.open('/NIGEL_PETARGUE.pdf')}>
        My resume
      </OutlinedButton>
    </header>
  )
}
