import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  MessageCircle,
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Heart,
  User,
  Phone,
} from 'lucide-react';
import { DADOS_CLINICA, AREAS_ATUACAO } from '../data/content';
import { AgendamentoForm } from '../types';
import { FaqSection } from './FaqSection';

interface ContatoSectionProps {
  initialArea?: string;
}

export const ContatoSection: React.FC<ContatoSectionProps> = ({ initialArea }) => {
  const [formData, setFormData] = useState<AgendamentoForm>({
    nome: '',
    telefone: '',
    email: '',
    modalidade: 'online',
    areaInteresse: initialArea || 'Ansiedade, Crises e Pânico',
    periodoPreferencia: 'tarde',
    dataPreferencia: '',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio rápido e elegante
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const texto = `Olá, Dra. Lilian! Meu nome é ${formData.nome || 'Visitante'}.\n` +
      `Gostaria de agendar um atendimento psicológico com você.\n` +
      `• Modalidade: ${formData.modalidade === 'online' ? 'Online (Virtual)' : 'Presencial'}\n` +
      `• Área de interesse: ${formData.areaInteresse}\n` +
      `• Melhor período: ${formData.periodoPreferencia}\n` +
      (formData.mensagem ? `• Mensagem: ${formData.mensagem}` : '');

    const url = `https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative bg-surface-soft/40 border-t border-border-subtle">
      {/* Elementos Suaves de Fundo */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-quartz-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-quartz-100 text-quartz-900 border border-quartz-200 text-xs uppercase tracking-wider font-semibold mb-4">
            <Heart className="w-3.5 h-3.5 text-quartz-600" />
            Primeiro Passo para o Cuidado
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-ink leading-tight tracking-tight mb-4">
            Dê o primeiro passo com a Dra. Lilian em direção à sua tranquilidade emocional.
          </h2>
          <p className="text-base sm:text-lg text-ink-muted font-light leading-relaxed">
            Preencha os campos abaixo com total tranquilidade. Suas informações são tratadas sob sigilo ético absoluto e a Dra. Lilian retornará seu contato com carinho e discrição.
          </p>
        </div>

        {/* Grid: Formulário + Painel Informativo Lateral */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Formulário de Alta Conversão (7 colunas) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-surface-card border border-quartz-200/80 shadow-sm relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-leaf-100 border border-leaf-200 text-leaf-700 flex items-center justify-center mb-6 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-ink mb-3">
                    Mensagem Recebida com Carinho!
                  </h3>
                  <p className="text-ink-muted text-sm sm:text-base max-w-md mb-8 font-light leading-relaxed">
                    Obrigado por nos confiar seu momento, <strong className="text-ink">{formData.nome || 'você'}</strong>. Entraremos em contato em até 2 horas úteis pelo WhatsApp ou e-mail informado.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-leaf-600 hover:bg-leaf-700 text-white font-medium text-sm shadow-md shadow-leaf-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Agilizar no WhatsApp agora</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-full text-xs text-ink-subtle hover:text-ink hover:underline cursor-pointer"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Modalidade de Atendimento (Tabs) */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-2.5">
                      1. Modalidade de Atendimento Desejada:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modalidade: 'online' })}
                        className={`py-3 px-4 rounded-2xl text-xs sm:text-sm font-medium border text-left transition-all cursor-pointer flex items-center justify-between ${
                          formData.modalidade === 'online'
                            ? 'bg-quartz-50 border-quartz-400 text-quartz-900 shadow-xs'
                            : 'bg-surface-soft/60 border-border-subtle text-ink-muted hover:border-quartz-200'
                        }`}
                      >
                        <div>
                          <p className="font-semibold">Atendimento Online</p>
                          <p className="text-[11px] text-ink-subtle">Todo o Brasil e Exterior</p>
                        </div>
                        {formData.modalidade === 'online' && (
                          <span className="w-2 h-2 rounded-full bg-quartz-500" />
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, modalidade: 'presencial' })}
                        className={`py-3 px-4 rounded-2xl text-xs sm:text-sm font-medium border text-left transition-all cursor-pointer flex items-center justify-between ${
                          formData.modalidade === 'presencial'
                            ? 'bg-leaf-50 border-leaf-400 text-leaf-900 shadow-xs'
                            : 'bg-surface-soft/60 border-border-subtle text-ink-muted hover:border-leaf-200'
                        }`}
                      >
                        <div>
                          <p className="font-semibold">Atendimento Presencial</p>
                          <p className="text-[11px] text-ink-subtle">Consultório Sensorial</p>
                        </div>
                        {formData.modalidade === 'presencial' && (
                          <span className="w-2 h-2 rounded-full bg-leaf-500" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Nome Completo e Telefone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-ink-muted mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-ink-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          placeholder="Como prefere ser chamado(a)?"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-soft/40 border border-border-subtle text-ink text-sm focus:outline-none focus:border-quartz-400 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-ink-muted mb-1.5">
                        WhatsApp ou Telefone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-ink-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          value={formData.telefone}
                          onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                          placeholder="(11) 90000-0000"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-soft/40 border border-border-subtle text-ink text-sm focus:outline-none focus:border-quartz-400 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* E-mail e Área de Interesse */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-ink-muted mb-1.5">
                        E-mail para confirmação
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-ink-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="seu.email@exemplo.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-soft/40 border border-border-subtle text-ink text-sm focus:outline-none focus:border-quartz-400 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-ink-muted mb-1.5">
                        Principal Motivo ou Área de Foco
                      </label>
                      <select
                        value={formData.areaInteresse}
                        onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-surface-soft/40 border border-border-subtle text-ink text-sm focus:outline-none focus:border-quartz-400 focus:bg-white transition-colors"
                      >
                        <option value="Ansiedade, Crises e Pânico">Ansiedade, Crises e Pânico</option>
                        <option value="Depressão e Reconstrução da Vitalidade">Depressão e Reconstrução da Vitalidade</option>
                        <option value="Terapia de Casal e Vínculos Afetivos">Terapia de Casal e Vínculos Afetivos</option>
                        <option value="Burnout e Sobrecarga Profissional">Burnout e Sobrecarga Profissional</option>
                        <option value="Luto, Perdas e Transições Difíceis">Luto, Perdas e Transições Difíceis</option>
                        <option value="Autoconhecimento e Regulação Emocional">Autoconhecimento e Autoestima</option>
                        <option value="Acolhimento Geral / Primeira Consulta">Ainda não sei definir, prefiro conversar</option>
                      </select>
                    </div>
                  </div>

                  {/* Melhor Período */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-2">
                      Melhor Período para Atendimento:
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'manha', label: 'Manhã', sub: '08h às 12h' },
                        { id: 'tarde', label: 'Tarde', sub: '13h às 18h' },
                        { id: 'noite', label: 'Noite', sub: '18h às 21h' },
                      ].map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              periodoPreferencia: p.id as 'manha' | 'tarde' | 'noite',
                            })
                          }
                          className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                            formData.periodoPreferencia === p.id
                              ? 'bg-quartz-50 border-quartz-400 text-quartz-900 font-semibold'
                              : 'bg-surface-soft/40 border-border-subtle text-ink-muted hover:border-quartz-200'
                          }`}
                        >
                          <p>{p.label}</p>
                          <p className="text-[10px] text-ink-subtle">{p.sub}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mensagem Opcional */}
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-1.5">
                      Como podemos te ajudar hoje? (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder="Fique à vontade para escrever o que estiver sentindo ou tirar qualquer dúvida pontual..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-soft/40 border border-border-subtle text-ink text-sm focus:outline-none focus:border-quartz-400 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Botão de Envio Principal (Entrar em contato) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-gradient-to-r from-quartz-500 via-quartz-600 to-quartz-500 hover:from-quartz-600 hover:to-quartz-700 text-white font-medium text-base shadow-lg shadow-quartz-400/25 hover:shadow-xl hover:shadow-quartz-400/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? 'Enviando com cuidado...' : 'Entrar em contato'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-ink-subtle">
                    <ShieldCheck className="w-3.5 h-3.5 text-leaf-600" />
                    <span>Seus dados nunca serão compartilhados. Respeito integral à LGPD e ao CFP.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Painel Lateral Informativo e Humanizado (5 colunas) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card com Informações de Contato e Resposta Rápida */}
            <div className="p-7 rounded-3xl bg-surface-card border border-quartz-200/80 shadow-xs">
              <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                Atendimento Acolhedor & Cuidadoso
              </h3>
              <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed mb-6">
                Entendemos que dar o primeiro passo exige coragem. Por isso, oferecemos uma resposta atenta, sem burocracias e sem pressa.
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-soft/60 border border-border-subtle">
                  <Clock className="w-5 h-5 text-quartz-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">Tempo de Retorno</p>
                    <p className="text-ink-subtle text-xs">{DADOS_CLINICA.tempoRespostaMedio}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-soft/60 border border-border-subtle">
                  <Mail className="w-5 h-5 text-quartz-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">E-mail Profissional</p>
                    <p className="text-ink-subtle text-xs">{DADOS_CLINICA.emailContato}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-leaf-50/70 border border-leaf-200">
                  <ShieldCheck className="w-5 h-5 text-leaf-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-leaf-900">Registro Profissional Ativo</p>
                    <p className="text-leaf-800 text-xs">{DADOS_CLINICA.registroProfissional}</p>
                  </div>
                </div>
              </div>

              {/* Botão de WhatsApp Direto */}
              <div className="mt-6 pt-6 border-t border-border-subtle/70">
                <a
                  href={`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
                    DADOS_CLINICA.whatsappMensagemPadrao
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-leaf-600 hover:bg-leaf-700 text-white font-medium text-sm shadow-md shadow-leaf-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar via WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card com Informativo Ético Importante */}
            <div className="p-6 rounded-3xl bg-quartz-50/70 border border-quartz-200/80">
              <div className="flex items-center gap-2 mb-2 text-quartz-900">
                <Sparkles className="w-4 h-4 text-quartz-600" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Acolhimento Emergencial
                </span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed font-light">
                Caso você ou alguém que você conheça esteja enfrentando uma emergência ou sofrimento emocional extremo imediato, ligue gratuitamente para o <strong>CVV (Centro de Valorização da Vida) no número 188</strong> ou procure a UPA/Pronto-Socorro mais próximo.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Integrado dentro do fluxo de decisão */}
        <FaqSection />
      </div>
    </section>
  );
};
