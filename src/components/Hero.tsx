import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
  Calendar,
  CheckCircle2,
  Sun,
  Leaf,
  Video,
} from 'lucide-react';
import { DADOS_CLINICA, METRICAS_CLINICA } from '../data/content';
import { StatsCounter } from './StatsCounter';

interface HeroProps {
  onOpenAgendamento: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAgendamento }) => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-ambient-grain"
    >
      {/* Elementos Orgânicos de Fundo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-quartz-200/30 via-quartz-100/20 to-leaf-100/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-5 w-72 h-72 bg-leaf-200/20 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-quartz-200/25 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna de Texto (Esquerda, 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge de Introdução */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-quartz-100/80 border border-quartz-300/50 text-quartz-900 text-xs sm:text-sm font-medium mb-6 shadow-xs"
            >
              <Sun className="w-3.5 h-3.5 text-quartz-600" />
              <span>Dra. Lilian - Psicóloga</span>
              <span className="w-1.5 h-1.5 rounded-full bg-quartz-500" />
              <span className="text-leaf-800 font-semibold">{DADOS_CLINICA.registroProfissional}</span>
            </motion.div>

            {/* Headline Monumental com clamp */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
              className="text-[clamp(2.75rem,5.5vw,5.5rem)] font-display font-medium text-ink leading-[1.04] tracking-tight mb-6"
            >
              Onde o{' '}
              <span className="italic font-normal text-quartz-600 relative inline-block">
                silêncio
                <span className="absolute bottom-1 left-0 right-0 h-2 bg-quartz-200/50 -z-10 rounded-full" />
              </span>{' '}
              da sua mente encontra o{' '}
              <span className="text-leaf-700 italic font-normal">calor</span> do acolhimento.
            </motion.h1>

            {/* Subheadline Reflexiva */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-ink-muted leading-relaxed font-light max-w-2xl mb-8"
            >
              {DADOS_CLINICA.subheadlineHero}
            </motion.p>

            {/* CTAs de Alta Conversão */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
              className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <button
                onClick={onOpenAgendamento}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-quartz-500 via-quartz-600 to-quartz-500 hover:from-quartz-600 hover:to-quartz-700 text-white font-medium text-base shadow-lg shadow-quartz-400/25 hover:shadow-xl hover:shadow-quartz-400/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#areas"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-surface-card hover:bg-surface-card-hover border border-quartz-200 text-ink-muted hover:text-ink font-medium text-base shadow-xs hover:border-quartz-300 transition-all duration-300"
              >
                <Leaf className="w-4 h-4 text-leaf-600" />
                <span>Explorar Áreas de Atuação</span>
              </a>
            </motion.div>

            {/* Garantias Éticas e Selos de Confiança */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.32 }}
              className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-4 border-t border-border-subtle/80 text-xs sm:text-sm text-ink-subtle"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-leaf-600 flex-shrink-0" />
                <span>Sigilo Absoluto (Código de Ética CFP)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-quartz-600 flex-shrink-0" />
                <span>Emissão de Recibo p/ Reembolso</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-leaf-600 flex-shrink-0" />
                <span>Plataforma Online Criptografada</span>
              </div>
            </motion.div>
          </div>

          {/* Coluna Visual e Composição Assimétrica (Direita, 5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Moldura Principal com Halo de Rosa Quartzo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-quartz-200/70 p-2 bg-gradient-to-b from-quartz-100/60 via-surface-card to-leaf-50/40">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-surface-soft">
                  <img
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85"
                    alt="Espaço terapêutico sensorial acolhedor com luz suave e plantas"
                    className="w-full h-full object-cover object-center filter saturate-[0.95] contrast-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  
                  {/* Legenda poética sobre a imagem */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs uppercase tracking-wider font-semibold text-quartz-200 mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Dra. Lilian · Psicologia Clínica
                    </p>
                    <p className="font-display text-xl sm:text-2xl font-light italic leading-snug">
                      "A cura começa no instante em que nos sentimos verdadeiramente compreendidos."
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Flutuante 1 (Topo Direito) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -top-6 -right-4 sm:-right-6 glass-panel p-4 rounded-2xl shadow-xl max-w-[210px] hidden sm:block border border-quartz-300/60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-quartz-100 text-quartz-600 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 fill-quartz-400 text-quartz-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink">Acolhimento</p>
                    <p className="text-[11px] text-ink-subtle">Sem julgamentos, no seu tempo</p>
                  </div>
                </div>
              </motion.div>

              {/* Card Flutuante 2 (Base Esquerda) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 glass-panel p-4 rounded-2xl shadow-xl max-w-[230px] border border-leaf-300/60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-leaf-100 text-leaf-700 flex items-center justify-center flex-shrink-0">
                    <Sun className="w-5 h-5 text-leaf-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-ink">Atendimento Integrado</p>
                    <p className="text-[11px] text-leaf-800 font-medium">Presencial & Online Brasil</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Faixa de Métricas e Estatísticas Animadas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 pt-10 border-t border-border-subtle"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {METRICAS_CLINICA.map((metrica, idx) => (
              <div
                key={metrica.rotulo}
                className="p-5 sm:p-6 rounded-2xl bg-surface-card/80 border border-quartz-200/50 hover:border-quartz-300/80 transition-all duration-300 hover:shadow-sm group"
              >
                <div className="font-display text-4xl sm:text-5xl font-semibold text-ink mb-1 group-hover:text-quartz-700 transition-colors">
                  <StatsCounter valor={metrica.valor} sufixo={metrica.sufixo} />
                </div>
                <div className="text-sm font-semibold text-ink-muted mb-1">
                  {metrica.rotulo}
                </div>
                <p className="text-xs text-ink-subtle line-clamp-2">
                  {metrica.descricao}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
