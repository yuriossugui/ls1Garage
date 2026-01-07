import type { SectionTitleProps } from '../../types';
import styles from './SectionTitle.module.css';

/**
 * Componente de título de seção reutilizável
 * Usado para padronizar títulos em todas as seções da landing page
 */
export function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div className={`${styles.sectionTitle} ${styles[align]}`}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
