import { CounterButton } from '@/features'
import heroImg from '@/shared/assets/hero.png'
import reactLogo from '@/shared/assets/react.svg'
import viteLogo from '@/shared/assets/vite.svg'
import styles from './HeroSection.module.css'

export function HeroSection() {
  return (
    <section className={styles.center}>
      <div className={styles.hero}>
        <img src={heroImg} className={styles.base} width="170" height="179" alt="" />
        <img src={reactLogo} className={styles.framework} alt="React logo" />
        <img src={viteLogo} className={styles.vite} alt="Vite logo" />
      </div>
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/app/App.tsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <CounterButton />
    </section>
  )
}
