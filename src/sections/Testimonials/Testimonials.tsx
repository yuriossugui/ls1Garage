import { SectionTitle, TestimonialCard } from '../../components';
import type { Testimonial } from '../../types';
import styles from './Testimonials.module.css';

// Dados dos depoimentos de clientes
const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    vehicle: 'Honda Civic 2019',
    rating: 5,
    comment: 'Excelente atendimento! Fizeram a revisão completa do meu carro com um preço muito justo. Recomendo a todos.',
  },
  {
    id: '2',
    name: 'Maria Santos',
    vehicle: 'Volkswagen Gol 2020',
    rating: 5,
    comment: 'Profissionais muito competentes. Explicaram tudo o que seria feito antes de iniciar o serviço. Voltarei sempre!',
  },
  {
    id: '3',
    name: 'João Oliveira',
    vehicle: 'Fiat Uno 2018',
    rating: 5,
    comment: 'Minha experiência foi ótima! Resolveram o problema do meu carro rapidamente e o valor foi bem abaixo do orçado em outras oficinas.',
  },
  {
    id: '4',
    name: 'Ana Paula',
    vehicle: 'Chevrolet Onix 2021',
    rating: 5,
    comment: 'Confiança e qualidade! Já sou cliente há 3 anos e nunca me decepcionaram. A equipe é muito atenciosa.',
  },
  {
    id: '5',
    name: 'Roberto Almeida',
    vehicle: 'Ford Ka 2017',
    rating: 4,
    comment: 'Serviço de qualidade e preço honesto. O único ponto é que estava um pouco cheio no dia, mas valeu a pena esperar.',
  },
  {
    id: '6',
    name: 'Fernanda Lima',
    vehicle: 'Hyundai HB20 2022',
    rating: 5,
    comment: 'Melhor oficina da região! Sempre que preciso, venho aqui. Atendimento impecável e serviço garantido.',
  },
];

/**
 * Seção de Depoimentos
 * Exibe avaliações e comentários de clientes satisfeitos
 */
export function Testimonials() {
  return (
    <section 
      className={styles.section} 
      id="depoimentos" 
      aria-labelledby="testimonials-title"
    >
      <div className={styles.container}>
        <SectionTitle
          title="O Que Nossos Clientes Dizem"
          subtitle="A satisfação dos nossos clientes é nossa maior recompensa. Veja alguns depoimentos."
        />
        
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
