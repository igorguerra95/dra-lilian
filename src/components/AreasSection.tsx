import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  HeartHandshake,
  Users,
  Flame,
  Compass,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  ChevronRight,
  Check,
} from 'lucide-react';
import { AREAS_ATUACAO } from '../data/content';
import { AreaAtuacao } from '../types';

interface AreasSectionProps {
  onSelectAreaForBooking: (areaTitulo: string) => void;
}

export const AreasSection: React.FC<AreasSectionProps> = ({ onSelectAreaForBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('todas');
  const [selectedAreaModal, setSelectedAreaModal] = useState<AreaAtuacao | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="w-6 h-6" strokeWidth={1.5} />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" strokeWidth={1.5} />;
      case 'Users':
        return <Users className="w-6 h-6" strokeWidth={1.5} />;
      case 'Flame':
        return <Flame className="w-6 h-6" strokeWidth={1.5} />;
      case 'Compass':
        return <Compass className="w-6 h-6" strokeWidth={1.5} />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" strokeWidth={1.5} />;
      default:
        return <Sparkles className="w-6 h-6" strokeWidth={1.5} />;
    }
  };

  const filtros = [
    { id: 'todas', rotulo: 'Todas as Áreas' },
    { id: 'ansiedade', rotulo: 'Ansiedade & Pânico' },
    { id: 'depressao', rotulo: 'Depressão & Ânimo' },
    { id: 'casal', rotulo: 'Terapia de Casal' },
    { id: 'burnout', rotulo: 'Burnout & Trabalho' },
    { id: 'autoconhecimento', rotulo: 'Autoconhecimento' },
  ];

  const areasFiltradas =
    activeFilter === 'todas'
      ? AREAS_ATUACAO
      : AREAS_ATUACAO.filter((a) => a.id === activeFilter);

  return (
    <section id="areas" className="py-24 sm:py-32 relative bg-surface-soft/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quartz-100 text-quartz-900 border border-quartz-200 text-xs uppercase tracking-wider font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-quartz-500" />
              Áreas de Atuação Clínica
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-ink leading-tight tracking-tight">
              Cuidado especializado para cada dimensão da sua dor e do seu florescer.
            </h2>
          </div>
          <p className="text-ink-muted text-base sm:text-lg max-w-md font-light leading-relaxed">
            Abordagens terapêuticas baseadas em evidências para acolher seu sofrimento, desconstruir nós emocionais e construir novas rotas de paz.
          </p>
        </div>

        {/* Filtros em Pill Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filtros.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-quartz-500 text-white shadow-md shadow-quartz-400/25'
                  : 'bg-surface-card text-ink-muted hover:text-ink hover:bg-surface-card-hover border border-quartz-200/60'
              }`}
            >
              {f.rotulo}
            </button>
          ))}
        </div>

        {/* Grid de Cards de Alta Precisão */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areasFiltradas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
              className="card-elevated rounded-3xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Imagem do Card com Badge Sobreposta */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-soft">
                  <img
                    src={area.imagem}
                    alt={area.titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-surface-card/90 backdrop-blur-md text-[11px] font-semibold text-ink uppercase tracking-wider border border-white/50 shadow-xs">
                      {area.categoria}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="p-1.5 rounded-lg bg-quartz-400/30 backdrop-blur-md text-quartz-100">
                        {getIcon(area.icone)}
                      </div>
                      <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                        {area.titulo}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-6">
                  <p className="text-sm font-medium text-quartz-800 italic mb-3">
                    "{area.tagline}"
                  </p>

                  <p className="text-sm text-ink-muted leading-relaxed mb-6 font-light">
                    {area.descricao}
                  </p>

                  {/* Sintomas Acolhidos */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-border-subtle/70">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink-subtle block mb-2">
                      Sintomas frequentemente acolhidos:
                    </span>
                    {area.sintomasComuns.slice(0, 3).map((sintoma, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-ink-muted">
                        <Check className="w-3.5 h-3.5 text-leaf-600 mt-0.5 flex-shrink-0" />
                        <span>{sintoma}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rodapé do Card com Ação de Agendamento */}
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border-subtle/50">
                  <span className="text-xs text-ink-subtle flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-quartz-500" />
                    {area.tempoMedio.split(' ')[0]} {area.tempoMedio.split(' ')[1]}
                  </span>

                  <button
                    onClick={() => onSelectAreaForBooking(area.titulo)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-quartz-700 hover:text-quartz-800 group-hover:translate-x-1 transition-all cursor-pointer py-1.5 px-3 rounded-full hover:bg-quartz-50"
                  >
                    <span>Entrar em contato</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner Inferior de Acolhimento Personalizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-quartz-100/80 via-surface-card to-leaf-50/80 border border-quartz-200/80 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="max-w-2xl">
            <h4 className="font-display text-2xl font-semibold text-ink mb-1">
              Não tem certeza de qual especialidade se encaixa no seu momento?
            </h4>
            <p className="text-sm text-ink-muted leading-relaxed font-light">
              Isso é completamente natural. Na primeira conversa, acolhemos sua narrativa de forma livre para compreender o cenário antes de definir o plano clínico.
            </p>
          </div>
          <button
            onClick={() => onSelectAreaForBooking('Acolhimento Geral / Primeira Consulta')}
            className="px-6 py-3 rounded-full bg-quartz-500 hover:bg-quartz-600 text-white font-medium text-sm shadow-md shadow-quartz-400/20 whitespace-nowrap transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Entrar em contato
          </button>
        </motion.div>
      </div>
    </section>
  );
};
