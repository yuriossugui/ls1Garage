import { SectionTitle, DifferentialCard } from '../../components';
import type { Differential } from '../../types';
import styles from './Differentials.module.css';

// Dados dos diferenciais da oficina
const differentials: Differential[] = [
  {
    id: 'experiencia',
    icon: '🏆',
    title: 'Mais de 10 Anos de Experiência',
    description: 'Equipe qualificada e em constante atualização com as novas tecnologias automotivas.',
  },
  {
    id: 'transparencia',
    icon: '📋',
    title: 'Orçamento Transparente',
    description: 'Você recebe um orçamento detalhado antes de qualquer serviço. Sem surpresas.',
  },
  {
    id: 'garantia',
    icon: '✅',
    title: 'Garantia nos Serviços',
    description: 'Todos os nossos serviços possuem garantia. Sua tranquilidade é nossa prioridade.',
  },
  {
    id: 'pecas',
    icon: '🔩',
    title: 'Peças de Qualidade',
    description: 'Trabalhamos apenas com peças originais ou de procedência garantida.',
  },
  {
    id: 'atendimento',
    icon: '🤝',
    title: 'Atendimento Personalizado',
    description: 'Tratamos cada cliente de forma única, entendendo suas necessidades específicas.',
  },
  {
    id: 'preco',
    icon: '💰',
    title: 'Preço Justo',
    description: 'Oferecemos o melhor custo-benefício da região, sem abrir mão da qualidade.',
  },
];

/**
 * Seção de Diferenciais
 * Exibe os principais diferenciais e vantagens da oficina
 */
export function Differentials() {
  return (
    <section 
      className={styles.section} 
      id="diferenciais" 
      aria-labelledby="differentials-title"
    >
      <div className={styles.container}>
        <SectionTitle
          title="Por Que Escolher a LS1 Garage?"
          subtitle="Conheça os diferenciais que fazem da nossa oficina a melhor escolha para o seu veículo."
        />
        
        <div className={styles.grid}>
          {differentials.map((differential) => (
            <DifferentialCard key={differential.id} differential={differential} />
          ))}
        </div>
      </div>
    </section>
  );
}
