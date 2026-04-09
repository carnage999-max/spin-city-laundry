import styles from './Promo.module.css';

export default function Promo() {
  return (
    <section id="promo" className={styles.section}>
      <div className={styles.backgroundText} aria-hidden="true">
        GRAND OPENING GRAND OPENING GRAND OPENING
      </div>

      <div className={styles.content}>
        <span className={styles.badge}>LIMITED TIME OFFER</span>
        <h2 className={styles.title}>GRAND OPENING SPECIAL</h2>
        <p className={styles.body}>
          Get your FIRST WASH FREE when you sign up for our loyalty programme.
          Valid for new customers only. Restrictions apply.
        </p>
        <a href="#contact" className={styles.button}>
          CLAIM YOUR FREE WASH →
        </a>
        <p className={styles.note}>
          Join the loyalty club — earn points with every wash, redeem for free cycles.
        </p>
      </div>
    </section>
  );
}
