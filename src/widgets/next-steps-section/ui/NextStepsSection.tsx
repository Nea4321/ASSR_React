import { ExternalLinkList } from '@/entities'
import { documentationLinks, socialLinks, Icon } from '@/shared'
import styles from './NextStepsSection.module.css'

export function NextStepsSection() {
  return (
    <section className={styles.nextSteps}>
      <div className={styles.docs}>
        <Icon spriteId="documentation-icon" className={styles.icon} />
        <h2>Documentation</h2>
        <p>Your questions, answered</p>
        <ExternalLinkList links={documentationLinks} variant="docs" />
      </div>
      <div className={styles.social} id="social">
        <Icon spriteId="social-icon" className={styles.icon} />
        <h2>Connect with us</h2>
        <p>Join the Vite community</p>
        <ExternalLinkList links={socialLinks} variant="social" />
      </div>
    </section>
  )
}
