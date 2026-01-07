import type { ServiceCardProps } from '../../types';
import styles from './ServiceCard.module.css';

/**
 * Card de serviço para exibição na seção de serviços
 */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.iconWrapper} aria-hidden="true">
        {service.icon}
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
    </article>
  );
}
