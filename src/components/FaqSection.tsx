import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, DADOS_CLINICA } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quartz-100 text-quartz-900 border border-quartz-200 text-xs uppercase tracking-wider font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-quartz-600" />
            Transparência & Cuidado
          </div>
          <h3 className="font-display text-3xl sm:text-4xl font-medium text-ink leading-tight mb-3">
            Perguntas Frequentes sobre a Psicoterapia
          </h3>
          <p className="text-ink-muted text-sm sm:text-base font-light max-w-xl mx-auto">
            Tire suas dúvidas sobre modalidades, sigilo profissional, reembolso e o funcionamento da primeira sessão.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.pergunta}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-surface-card border-quartz-300/80 shadow-md shadow-quartz-100'
                    : 'bg-surface-card/60 border-border-subtle hover:border-quartz-200 hover:bg-surface-card'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl font-medium text-ink pr-4 leading-snug">
                    {faq.pergunta}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-quartz-100 text-quartz-700 rotate-180'
                        : 'bg-surface-soft text-ink-subtle'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm text-ink-muted leading-relaxed font-light border-t border-border-subtle/50">
                        {faq.resposta}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center p-6 rounded-2xl bg-surface-card border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-ink-muted">
            Possui uma dúvida específica não listada aqui?
          </p>
          <a
            href={`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
              'Olá, Dra. Lilian! Gostaria de tirar uma dúvida sobre o seu atendimento psicológico.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf-50 border border-leaf-200 text-leaf-800 text-xs font-semibold hover:bg-leaf-100 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-leaf-600" />
            <span>Falar com a Dra. Lilian</span>
          </a>
        </div>
      </div>
    </div>
  );
};
