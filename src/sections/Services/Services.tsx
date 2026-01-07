import { SectionTitle, ServiceCard } from '../../components';
import type { Service } from '../../types';
import styles from './Services.module.css';

// Dados dos serviços oferecidos
const services: Service[] = [
  {
    id: 'revisao',
    icon: '🔍',
    title: 'Revisão Completa',
    description: 'Check-up completo do seu veículo com diagnóstico detalhado de todos os sistemas.',
  },
  {
    id: 'oleo',
    icon: '🛢️',
    title: 'Troca de Óleo',
    description: 'Troca de óleo e filtro com produtos de qualidade e garantia de procedência.',
  },
  {
    id: 'freios',
    icon: '🛑',
    title: 'Sistema de Freios',
    description: 'Manutenção preventiva e corretiva de freios, pastilhas, discos e fluido.',
  },
  {
    id: 'suspensao',
    icon: '🔧',
    title: 'Suspensão',
    description: 'Alinhamento, balanceamento e reparo completo do sistema de suspensão.',
  },
];

/**
 * Seção de Serviços
 * Exibe os principais serviços oferecidos pela oficina
 */
export function Services() {
  return (
    <section 
      className={styles.section} 
      id="servicos" 
      aria-labelledby="services-title"
    >
      <div className={styles.container}>
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Oferecemos uma gama completa de serviços automotivos com qualidade e preço justo."
        />
        
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
