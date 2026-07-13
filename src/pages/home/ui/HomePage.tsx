import { Ticks } from '@/shared'
import { HeroSection, NextStepsSection } from '@/widgets'
import styles from './HomePage.module.css'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <Ticks />
      <NextStepsSection />
      <Ticks />
      <section className={styles.spacer} />
    </>
  )
}
