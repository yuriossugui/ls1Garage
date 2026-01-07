/**
 * Tipos e interfaces para a aplicação LS1 Garage
 */

// Interface para serviços oferecidos
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Interface para diferenciais da oficina
export interface Differential {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Interface para depoimentos de clientes
export interface Testimonial {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  comment: string;
  avatar?: string;
}

// Interface para dados do formulário de contato
export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
}

// Interface para erros de validação do formulário
export interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

// Props para componentes reutilizáveis
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

// Props para o card de serviço
export interface ServiceCardProps {
  service: Service;
}

// Props para o card de depoimento
export interface TestimonialCardProps {
  testimonial: Testimonial;
}

// Props para o card de diferencial
export interface DifferentialCardProps {
  differential: Differential;
}
