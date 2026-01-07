import type { ButtonProps } from '../../types';
import styles from './Button.module.css';

/**
 * Componente de botão reutilizável
 * Suporta variantes (primary, secondary, outline) e tamanhos (small, medium, large)
 */
export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  className = '',
  ariaLabel,
  disabled = false,
}: ButtonProps) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
