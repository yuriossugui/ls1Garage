import { useState, type FormEvent, type ChangeEvent } from 'react';
import { SectionTitle, Button } from '../../components';
import type { ContactFormData, FormErrors } from '../../types';
import styles from './Contact.module.css';

// Serviços disponíveis para seleção
const serviceOptions = [
  { value: '', label: 'Selecione um serviço' },
  { value: 'revisao', label: 'Revisão Completa' },
  { value: 'oleo', label: 'Troca de Óleo' },
  { value: 'freios', label: 'Sistema de Freios' },
  { value: 'suspensao', label: 'Suspensão' },
  { value: 'outros', label: 'Outros Serviços' },
];

/**
 * Seção de Contato
 * Formulário para captação de leads e agendamento de serviços
 */
export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    service: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Formata o telefone enquanto o usuário digita
  const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  // Valida o formulário
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome deve ter pelo menos 3 caracteres';
    }

    const phoneNumbers = formData.phone.replace(/\D/g, '');
    if (!phoneNumbers) {
      newErrors.phone = 'Por favor, informe seu telefone';
    } else if (phoneNumbers.length < 10) {
      newErrors.phone = 'Telefone inválido';
    }

    if (!formData.service) {
      newErrors.service = 'Por favor, selecione um serviço';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manipula mudanças nos campos
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData((prev) => ({
        ...prev,
        [name]: formatPhone(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Limpa o erro do campo quando o usuário começa a digitar
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // Manipula o envio do formulário
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simula envio do formulário (em produção, conectar com API real)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({ name: '', phone: '', service: '' });
    } catch {
      alert('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Resetar formulário após sucesso
  const handleNewSubmission = () => {
    setIsSuccess(false);
  };

  return (
    <section 
      className={styles.section} 
      id="contato" 
      aria-labelledby="contact-title"
    >
      <div className={styles.container}>
        <SectionTitle
          title="Agende Seu Serviço"
          subtitle="Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento."
        />

        <div className={styles.formWrapper}>
          {isSuccess ? (
            <div className={styles.successMessage} role="alert">
              <span className={styles.successIcon} aria-hidden="true">✅</span>
              <h3 className={styles.successTitle}>Mensagem Enviada!</h3>
              <p className={styles.successText}>
                Obrigado pelo contato! Nossa equipe entrará em contato em breve 
                para confirmar seu agendamento.
              </p>
              <Button variant="primary" onClick={handleNewSubmission}>
                Enviar Nova Mensagem
              </Button>
            </div>
          ) : (
            <form 
              className={styles.form} 
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Nome Completo
                  <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className={styles.errorMessage} role="alert">
                    ⚠️ {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Telefone / WhatsApp
                  <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className={styles.errorMessage} role="alert">
                    ⚠️ {errors.phone}
                  </span>
                )}
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="service" className={styles.label}>
                  Serviço Desejado
                  <span className={styles.required} aria-hidden="true">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${styles.select} ${errors.service ? styles.inputError : ''}`}
                  aria-required="true"
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? 'service-error' : undefined}
                >
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span id="service-error" className={styles.errorMessage} role="alert">
                    ⚠️ {errors.service}
                  </span>
                )}
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                  ariaLabel={isSubmitting ? 'Enviando...' : 'Enviar solicitação de agendamento'}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Agendamento'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
