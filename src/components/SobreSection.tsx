import React from 'react';
import { motion } from 'motion/react';
import {
  Brain,
  UserCheck,
  Sun,
  ShieldCheck,
  CheckCircle,
  Leaf,
  Heart,
  Sparkles,
  ArrowRight,
  Shield,
  Award,
} from 'lucide-react';
import { PILARES_CLINICOS, DADOS_CLINICA, PASSOS_JORNADA, DEPOIMENTOS } from '../data/content';

interface SobreSectionProps {
  onOpenAgendamento: () => void;
}

export const SobreSection: React.FC<SobreSectionProps> = ({ onOpenAgendamento }) => {
  const getPilarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-6 h-6 text-quartz-600" strokeWidth={1.5} />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-leaf-600" strokeWidth={1.5} />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-quartz-600" strokeWidth={1.5} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-leaf-600" strokeWidth={1.5} />;
      default:
        return <Sparkles className="w-6 h-6 text-quartz-600" strokeWidth={1.5} />;
    }
  };

  return (
    <section id="sobre" className="py-24 sm:py-32 relative overflow-hidden bg-surface">
      {/* Elementos Suaves de Ambientação */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-quartz-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-leaf-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloco 1: A Essência do Cuidado com a Dra. Lilian */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          {/* Mosaico de Imagens Sensoriais (5 colunas) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl border border-quartz-200 aspect-[4/5] bg-surface-soft">
                <img
                  src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1000&q=80"
                  alt="Ambiente com luz suave, plantas e sensação de paz"
                  className="w-full h-full object-cover filter contrast-[1.03]"
                />
              </div>

              {/* Card Sobreposto com Filosofia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute -bottom-8 -right-4 sm:-right-8 max-w-[280px] sm:max-w-xs glass-panel p-5 rounded-2xl shadow-xl border border-leaf-200/80"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-leaf-600" />
                  <span className="text-xs font-semibold text-leaf-800 tracking-wide uppercase">
                    Arquitetura do Cuidado
                  </span>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed font-light">
                  "Um ambiente desenhado para que seu sistema nervoso reconheça imediatamente: aqui você está a salvo."
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Texto Sobre a Abordagem e Fundamentação (7 colunas) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-leaf-100/70 text-leaf-900 border border-leaf-200 text-xs uppercase tracking-wider font-semibold mb-4">
              <Sun className="w-3.5 h-3.5 text-leaf-700" />
              Nossa Filosofia Clínica
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-ink leading-tight tracking-tight mb-6">
              Onde o rigor da ciência psicológica dialoga com a sensibilidade do acolhimento humano.
            </h2>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-light mb-5">
              A prática clínica da <strong className="font-semibold text-ink">Dra. Lilian</strong> nasceu da convicção de que a psicoterapia de alto nível precisa ir além de diagnósticos frios e conversas apressadas. Desenvolvemos uma abordagem integrativa e humanizada: uma fusão harmoniosa entre protocolos clínicos padrão-ouro e a criação deliberada de um ecossistema seguro de paz.
            </p>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-light mb-8">
              Conduzido pessoalmente pela <strong className="font-semibold text-ink">Dra. Lilian</strong>, seja na modalidade presencial em consultório acolhedor ou no teleatendimento seguro para pacientes em todo o Brasil e no exterior, o compromisso é oferecer escuta atenta, rigor científico e respeito incondicional à sua história.
            </p>

            {/* Destaques Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-card border border-quartz-200/60">
                <Shield className="w-5 h-5 text-quartz-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ink">Espaço Seguro & Sem Julgamentos</h4>
                  <p className="text-xs text-ink-subtle">Liberdade para falar de tudo o que angustia</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-surface-card border border-leaf-200/60">
                <Award className="w-5 h-5 text-leaf-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-ink">Atendimento com a Dra. Lilian</h4>
                  <p className="text-xs text-ink-subtle">CRP 06/148920 · 12+ anos de prática clínica</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenAgendamento}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-quartz-500 to-quartz-600 hover:from-quartz-600 hover:to-quartz-700 text-white font-medium text-sm shadow-md shadow-quartz-400/20 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Entrar em contato</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card Especial de Apresentação da Dra. Lilian */}
        <div className="mb-28 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-surface-card via-quartz-50/40 to-leaf-50/40 border border-quartz-200/80 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4 relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-surface-soft relative">
                <img
                  src={DADOS_CLINICA.bioProfissional.foto}
                  alt="Dra. Lilian - Psicóloga Clínica"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-display text-xl font-bold">Dra. Lilian</p>
                  <p className="text-xs text-quartz-200">Psicóloga Clínica · CRP 06/148920</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quartz-100 text-quartz-900 border border-quartz-200 text-xs uppercase tracking-wider font-semibold">
                <UserCheck className="w-3.5 h-3.5 text-quartz-600" />
                Sua Psicóloga Responsável
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-ink leading-tight">
                "Ninguém cura a dor ignorando sua existência. Meu papel é ser seu solo seguro."
              </h3>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-light">
                Com mais de 12 anos dedicados ao estudo profundo da psique humana e ao alívio do sofrimento emocional, a <strong>Dra. Lilian</strong> alia rigor técnico a uma postura empática e desprovida de preconceitos. Cada sessão é personalizada para respeitar seu tempo biológico e sua singularidade.
              </p>

              <div className="space-y-2.5 pt-2">
                {DADOS_CLINICA.bioProfissional.titulos.map((titulo, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted">
                    <CheckCircle className="w-4 h-4 text-leaf-600 flex-shrink-0 mt-0.5" />
                    <span>{titulo}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAgendamento}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-quartz-500 hover:bg-quartz-600 text-white font-medium text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Agendar com a Dra. Lilian</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-ink-subtle italic">
                  Atendimento individual e exclusivo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bloco 2: Os 4 Pilares da Abordagem Clínica */}
        <div className="pt-10 mb-28">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-quartz-700 block mb-2">
              Pilares Metodológicos
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-medium text-ink leading-tight">
              A sustentação técnica e humana do nosso trabalho diário.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILARES_CLINICOS.map((pilar, index) => (
              <motion.div
                key={pilar.numero}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-7 rounded-3xl bg-surface-card border border-quartz-200/70 hover:border-quartz-300 transition-all duration-300 hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-surface-soft border border-quartz-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getPilarIcon(pilar.icone)}
                    </div>
                    <span className="font-display text-2xl font-light text-quartz-400">
                      {pilar.numero}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-semibold text-ink mb-1">
                    {pilar.titulo}
                  </h4>
                  <p className="text-xs font-semibold text-leaf-800 uppercase tracking-wider mb-3">
                    {pilar.subtitulo}
                  </p>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
                    {pilar.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bloco 3: A Jornada do Paciente (Como Funciona) */}
        <div id="jornada" className="pt-10 mb-28">
          <div className="p-8 sm:p-12 rounded-3xl bg-surface-soft/80 border border-border-subtle relative overflow-hidden">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-leaf-800 block mb-2">
                Transparência & Tranquilidade
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-medium text-ink leading-tight">
                Como funciona o início da sua caminhada terapêutica:
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {PASSOS_JORNADA.map((passo, idx) => (
                <div key={passo.etapa} className="relative flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-quartz-500 text-white font-semibold text-xs flex items-center justify-center shadow-xs">
                      {idx + 1}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-quartz-800">
                      {passo.etapa}
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-ink mb-2">
                    {passo.titulo}
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light">
                    {passo.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bloco 4: Depoimentos e Transformações (Anonimizadas) */}
        <div className="pt-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-quartz-700 block mb-2">
                Vozes Reais de Superação
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-medium text-ink leading-tight">
                Relatos de quem encontrou novos caminhos de serenidade.
              </h3>
            </div>
            <p className="text-xs text-ink-subtle max-w-xs font-light italic">
              * Identidades e detalhes protegidos em conformidade rigorosa com a Resolução do Conselho Federal de Psicologia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {DEPOIMENTOS.map((depoimento) => (
              <div
                key={depoimento.id}
                className="p-7 rounded-3xl bg-surface-card border border-quartz-200/70 hover:border-quartz-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-quartz-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-4 h-4 fill-quartz-300 text-quartz-500" />
                    ))}
                  </div>

                  <p className="font-display text-lg font-medium text-ink leading-snug mb-4">
                    "{depoimento.destaque}"
                  </p>

                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-light mb-6">
                    {depoimento.relato}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle/70">
                  <p className="text-xs font-semibold text-ink">
                    {depoimento.autorAnonimizado}
                  </p>
                  <p className="text-[11px] text-leaf-800 font-medium">
                    {depoimento.contexto} · {depoimento.tempoTerapia}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
