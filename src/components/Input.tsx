'use client'
import styles from '@/styles/components/Input.module.scss'

type Props = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
}

export default function Input({ value, onChange, placeholder, error }: Props) {
  return (
    <div className={styles.inputWrapper}>
      <input
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
