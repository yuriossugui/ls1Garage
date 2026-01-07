import type { TestimonialCardProps } from '../../types';
import styles from './TestimonialCard.module.css';

/**
 * Card de depoimento para exibição na seção de depoimentos
 */
export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  // Gera as iniciais do nome para o avatar
  const initials = testimonial.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  // Renderiza as estrelas de avaliação
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= testimonial.rating ? styles.star : styles.starEmpty}
          aria-hidden="true"
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.avatar} aria-hidden="true">
          {initials}
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{testimonial.name}</h3>
          <p className={styles.vehicle}>{testimonial.vehicle}</p>
        </div>
      </header>
      <div 
        className={styles.rating} 
        role="img" 
        aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
      >
        {renderStars()}
      </div>
      <p className={styles.comment}>{testimonial.comment}</p>
    </article>
  );
}
