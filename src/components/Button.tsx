'use client'
import styles from '@/styles/components/Button.module.scss'

type Props = {
  title: string
  onClick: () => void
  disabled?: boolean
}

export default function Button({ title, onClick, disabled }: Props) {
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}
