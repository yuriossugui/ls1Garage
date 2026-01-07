import { Button } from '../../components';
import styles from './Hero.module.css';
import logoImage from '../../assets/logo.png';

/**
 * Hero Section - Primeira impressão da landing page
 * Contém headline, subtítulo, CTAs e estatísticas
 */
export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicos');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>🔧 Oficina Especializada</span>
          
          <h1 id="hero-title" className={styles.title}>
            Seu carro em <span className={styles.highlight}>boas mãos</span> na LS1 Garage
          </h1>
          
          <p className={styles.subtitle}>
            Serviços mecânicos de qualidade com preço justo e transparência. 
            Cuidamos do seu veículo como se fosse nosso.
          </p>
          
          <div className={styles.ctas}>
            <Button 
              variant="primary" 
              size="large" 
              onClick={scrollToContact}
              ariaLabel="Agendar um serviço na oficina"
            >
              Agendar Serviço
            </Button>
            <Button 
              variant="outline" 
              size="large" 
              onClick={scrollToServices}
              ariaLabel="Ver todos os serviços oferecidos"
            >
              Nossos Serviços
            </Button>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Anos de experiência</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5.000+</span>
              <span className={styles.statLabel}>Clientes atendidos</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Satisfação</span>
            </div>
          </div>
        </div>
        
        <div className={styles.imageWrapper}>
          <img 
            src={logoImage} 
            alt="LS1 Garage - Logo" 
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
