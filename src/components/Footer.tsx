import React from 'react';
import { ShieldCheck, Heart, Mail, MessageCircle, Sun, Leaf, ArrowUp } from 'lucide-react';
import { DADOS_CLINICA, AREAS_ATUACAO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-card border-t border-border-subtle pt-16 pb-12 text-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-border-subtle/80">
          {/* Coluna 1 & 2: Identidade & Propósito (2 colunas) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-quartz-200 to-leaf-100 flex items-center justify-center border border-quartz-300">
                <Sun className="w-5 h-5 text-quartz-600" />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-ink">
                  {DADOS_CLINICA.nome}
                </span>
                <p className="text-[11px] uppercase tracking-wider text-ink-subtle font-medium">
                  {DADOS_CLINICA.subtitulo}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light max-w-sm">
              Um espaço de desaceleração sensorial e escuta analítica profunda. Prática psicológica fundamentada na ciência, ética e na humanidade de cada encontro.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-soft border border-quartz-200 text-xs text-ink-subtle">
                <ShieldCheck className="w-4 h-4 text-leaf-600" />
                <span>{DADOS_CLINICA.registroProfissional}</span>
              </span>
            </div>
          </div>

          {/* Coluna 3: Navegação Rápida */}
          <div>
            <h4 className="font-display text-lg font-semibold text-ink mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted">
              <li>
                <a href="#inicio" className="hover:text-quartz-600 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-quartz-600 transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-quartz-600 transition-colors">
                  Sobre a Clínica & Abordagem
                </a>
              </li>
              <li>
                <a href="#jornada" className="hover:text-quartz-600 transition-colors">
                  Como Funciona a Jornada
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-quartz-600 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-quartz-600 transition-colors">
                  Entrar em contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Áreas de Cuidado */}
          <div>
            <h4 className="font-display text-lg font-semibold text-ink mb-4">
              Cuidado Clínico
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted">
              {AREAS_ATUACAO.slice(0, 5).map((a) => (
                <li key={a.id}>
                  <a href="#areas" className="hover:text-quartz-600 transition-colors">
                    {a.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 5: Modalidades & Contato */}
          <div>
            <h4 className="font-display text-lg font-semibold text-ink mb-4">
              Atendimento
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-ink-muted">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-leaf-500" />
                <span>Terapia Online Brasil e Exterior</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-quartz-400" />
                <span>Espaço Presencial Sensorial</span>
              </p>
              <div className="pt-2 space-y-1.5 text-xs text-ink-subtle">
                <p>{DADOS_CLINICA.emailContato}</p>
                <p>{DADOS_CLINICA.tempoRespostaMedio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Aviso de Emergência Ético (Obrigatório em Saúde Mental) */}
        <div className="my-8 p-4 rounded-2xl bg-surface-soft/80 border border-border-subtle text-center text-xs text-ink-subtle leading-relaxed">
          <p>
            <strong className="text-ink">Aviso Importante de Saúde Mental:</strong> Este site e o atendimento psicológico ambulatorial não são serviços de urgência médica ou emergência psiquiátrica. Caso esteja em crise extrema imediata, procure o Pronto-Socorro mais próximo ou contate o <strong>CVV (Centro de Valorização da Vida) pelo telefone 188</strong> (ligação gratuita nacional, 24 horas por dia).
          </p>
        </div>

        {/* Linha Final de Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-subtle">
          <p>
            © {new Date().getFullYear()} Dra. Lilian - Psicóloga (CRP 06/148920) · Todos os direitos reservados.
          </p>

          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com respeito ao Código de Ética Profissional do Psicólogo</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-ink-subtle hover:text-quartz-600 transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
