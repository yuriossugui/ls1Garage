import { useState, useEffect } from 'react';
import { Button } from '../../components';
import styles from './Header.module.css';
import logoImage from '../../assets/logo.png';

/**
 * Header com navegação fixa
 * Muda de aparência ao rolar a página
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" aria-label="LS1 Garage - Página inicial">
          <img 
            src={logoImage} 
            alt="LS1 Garage" 
            className={styles.logo}
          />
        </a>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>

        <nav 
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}
          aria-label="Navegação principal"
        >
          <a href="#servicos" className={styles.navLink} onClick={handleNavClick}>
            Serviços
          </a>
          <a href="#diferenciais" className={styles.navLink} onClick={handleNavClick}>
            Diferenciais
          </a>
          <a href="#depoimentos" className={styles.navLink} onClick={handleNavClick}>
            Depoimentos
          </a>
          <Button 
            variant="primary" 
            size="small" 
            onClick={scrollToContact}
            className={styles.ctaButton}
          >
            Agendar Serviço
          </Button>
        </nav>
      </div>
    </header>
  );
}
