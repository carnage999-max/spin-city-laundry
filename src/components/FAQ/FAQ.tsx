import { faqItems } from '@/data/faq';
import styles from './FAQ.module.css';

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>GOT QUESTIONS?</span>
        <h2 className={styles.title}>WE&apos;VE GOT ANSWERS</h2>
      </div>

      <div className={styles.list}>
        {faqItems.map((item) => (
          <details key={item.question} className={styles.item}>
            <summary>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
