import styles from './Footer.module.css';
import logoImage from '../../assets/logo.png';

/**
 * Footer da landing page
 * Contém informações de contato, links e redes sociais
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <img 
              src={logoImage} 
              alt="LS1 Garage" 
              className={styles.logo}
            />
            <p className={styles.brandDescription}>
              A LS1 Garage é referência em serviços automotivos de qualidade. 
              Com mais de 10 anos de experiência, cuidamos do seu veículo 
              com dedicação e profissionalismo.
            </p>
          </div>

          <div className={styles.column}>
            <h4>Links Rápidos</h4>
            <nav className={styles.linkList} aria-label="Links rápidos">
              <a href="#inicio" className={styles.link}>Início</a>
              <a href="#servicos" className={styles.link}>Serviços</a>
              <a href="#diferenciais" className={styles.link}>Diferenciais</a>
              <a href="#depoimentos" className={styles.link}>Depoimentos</a>
              <a href="#contato" className={styles.link}>Contato</a>
            </nav>
          </div>

          <div className={styles.column}>
            <h4>Serviços</h4>
            <nav className={styles.linkList} aria-label="Serviços">
              <a href="#servicos" className={styles.link}>Revisão Completa</a>
              <a href="#servicos" className={styles.link}>Troca de Óleo</a>
              <a href="#servicos" className={styles.link}>Sistema de Freios</a>
              <a href="#servicos" className={styles.link}>Suspensão</a>
            </nav>
          </div>

          <div className={styles.column}>
            <h4>Contato</h4>
            <address className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">📍</span>
                <span>Rua Exemplo, 123<br />Centro - Sua Cidade/UF</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">📞</span>
                <span>(00) 00000-0000</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">✉️</span>
                <span>contato@ls1garage.com.br</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">🕐</span>
                <span>Seg - Sex: 8h às 18h<br />Sáb: 8h às 12h</span>
              </div>
            </address>
            <div className={styles.socialLinks}>
              <a 
                href="https://instagram.com/ls1garage" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram da LS1 Garage"
              >
                📷
              </a>
              <a 
                href="https://facebook.com/ls1garage" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook da LS1 Garage"
              >
                📘
              </a>
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp da LS1 Garage"
              >
                💬
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} LS1 Garage. Todos os direitos reservados.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Política de Privacidade</a>
            <a href="#" className={styles.legalLink}>Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
