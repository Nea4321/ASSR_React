import { Outlet } from 'react-router-dom'
import styles from './RootLayout.module.css'

export function RootLayout() {
  return (
    <main className={styles.root}>
      <Outlet />
    </main>
  )
}
