# LS1 Garage - Landing Page

Landing page profissional para oficina mecânica, focada em captação de leads e agendamento de serviços.

## 🚗 Visão Geral

Uma landing page moderna e responsiva desenvolvida com React + TypeScript, otimizada para conversão e com excelente performance.

## 🛠️ Stack Tecnológica

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **CSS Modules** - Estilização modular e escopo local

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens e recursos estáticos
│   └── logo.png      # Logo da LS1 Garage
├── components/       # Componentes reutilizáveis
│   ├── Button/       # Botão com variantes
│   ├── DifferentialCard/
│   ├── SectionTitle/
│   ├── ServiceCard/
│   ├── TestimonialCard/
│   └── WhatsAppButton/  # CTA flutuante WhatsApp
├── sections/         # Seções da landing page
│   ├── Header/       # Navegação fixa
│   ├── Hero/         # Seção principal
│   ├── Services/     # Serviços oferecidos
│   ├── Differentials/ # Diferenciais da oficina
│   ├── Testimonials/ # Depoimentos de clientes
│   ├── Contact/      # Formulário de contato
│   └── Footer/       # Rodapé
├── styles/           # Estilos globais
│   ├── global.css    # Reset e estilos base
│   └── variables.css # Variáveis CSS (cores, tipografia)
├── types/            # Definições TypeScript
│   └── index.ts      # Interfaces e types
├── App.tsx           # Componente raiz
└── main.tsx          # Entry point
```

## 🎨 Design System

### Paleta de Cores

| Variável | Cor | Uso |
|----------|-----|-----|
| `--color-primary` | #0088cc | Cor principal (azul) |
| `--color-primary-dark` | #006699 | Azul escuro |
| `--color-secondary` | #1a1a2e | Fundo de cards |
| `--color-dark` | #0a0a14 | Fundo principal |
| `--color-accent` | #ff4444 | Destaques/alertas |

### Tipografia

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold (700) e Extra Bold (800)
- **Body**: Regular (400) e Medium (500)

## ✨ Funcionalidades

- ✅ **Hero Section** - Headline clara com estatísticas e CTAs
- ✅ **Seção de Serviços** - 4 serviços principais com cards interativos
- ✅ **Diferenciais** - 6 pontos que destacam a oficina
- ✅ **Depoimentos** - 6 avaliações de clientes
- ✅ **Formulário de Contato** - Validação completa e feedback visual
- ✅ **CTA WhatsApp Flutuante** - Botão sempre visível para contato rápido
- ✅ **Header Responsivo** - Menu mobile com animação
- ✅ **Footer Completo** - Links, contato e redes sociais

## 📱 Responsividade

Layout totalmente responsivo seguindo a abordagem **mobile-first**:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Acessibilidade

- Labels descritivos em todos os campos
- Atributos ARIA apropriados
- Navegação por teclado
- Contraste de cores adequado
- Feedback visual de foco
- Texto alternativo em imagens

## 🚀 Como Executar

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 📝 Configurações

### WhatsApp

Altere o número do WhatsApp em `src/App.tsx`:

```tsx
const whatsappNumber = '5511999999999'; // Substitua pelo número real
```

### Logo

Para usar o logo real:
1. Substitua `src/assets/logo.png` pela imagem do logo (pode ser PNG ou SVG)
2. Atualize os imports nos arquivos se mudar a extensão
3. Copie também para `public/` (favicon)

### Dados de Contato

Atualize as informações no arquivo `src/sections/Footer/Footer.tsx`:
- Endereço
- Telefone
- E-mail
- Redes sociais

## 🔧 Sugestões de Melhorias

### Performance
- [ ] Implementar lazy loading para imagens
- [ ] Adicionar service worker para cache
- [ ] Otimizar bundle com code splitting

### SEO
- [ ] Adicionar dados estruturados (JSON-LD)
- [ ] Implementar sitemap.xml
- [ ] Configurar robots.txt
- [ ] Adicionar canonical URLs

### UX
- [ ] Adicionar animações de scroll (Intersection Observer)
- [ ] Implementar chat ao vivo
- [ ] Adicionar mapa com localização
- [ ] Integrar com Google Analytics

### Funcionalidades
- [ ] Conectar formulário com API real (ex: EmailJS, Formspree)
- [ ] Adicionar sistema de agendamento online
- [ ] Implementar galeria de trabalhos realizados
- [ ] Adicionar seção de FAQ

## 📄 Licença

Projeto desenvolvido para LS1 Garage. Todos os direitos reservados.

---

Desenvolvido com ❤️ e ☕
