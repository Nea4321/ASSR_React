import { useCounter } from '../model/useCounter'
import styles from './CounterButton.module.css'

export function CounterButton() {
  const { count, increment } = useCounter()

  return (
    <button type="button" className={styles.counter} onClick={increment}>
      Count is {count}
    </button>
  )
}
