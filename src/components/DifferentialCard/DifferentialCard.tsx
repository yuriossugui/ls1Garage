import type { DifferentialCardProps } from '../../types';
import styles from './DifferentialCard.module.css';

/**
 * Card de diferencial para exibição na seção de diferenciais
 */
export function DifferentialCard({ differential }: DifferentialCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper} aria-hidden="true">
        {differential.icon}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{differential.title}</h3>
        <p className={styles.description}>{differential.description}</p>
      </div>
    </article>
  );
}
