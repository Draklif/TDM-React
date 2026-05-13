import { useScrollProgress } from '../../hooks/useScrollProgress'
import styles from './ScrollProgress.module.css'

function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      className={styles.bar}
      style={{ width: `${progress * 100}%` }}
    />
  )
}

export default ScrollProgress