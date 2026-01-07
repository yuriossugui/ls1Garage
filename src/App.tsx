import {
  Header,
  Hero,
  Services,
  Differentials,
  Testimonials,
  Contact,
  Footer,
} from './sections';
import { WhatsAppButton } from './components';

/**
 * Componente principal da aplicação
 * Landing page da LS1 Garage
 */
function App() {
  // Número do WhatsApp (substituir pelo número real)
  const whatsappNumber = '5518997590413';

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton phoneNumber={whatsappNumber} />
    </>
  );
}

export default App;
