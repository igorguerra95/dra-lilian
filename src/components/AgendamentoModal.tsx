import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Calendar,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Heart,
  Video,
  User,
  Phone,
  Mail,
  Sun,
} from 'lucide-react';
import { DADOS_CLINICA, AREAS_ATUACAO } from '../data/content';
import { AgendamentoForm } from '../types';

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedArea?: string;
}

export const AgendamentoModal: React.FC<AgendamentoModalProps> = ({
  isOpen,
  onClose,
  preselectedArea,
}) => {
  const [formData, setFormData] = useState<AgendamentoForm>({
    nome: '',
    telefone: '',
    email: '',
    modalidade: 'online',
    areaInteresse: preselectedArea || 'Ansiedade, Crises e Pânico',
    periodoPreferencia: 'tarde',
    dataPreferencia: '',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    if (preselectedArea) {
      setFormData((prev) => ({ ...prev, areaInteresse: preselectedArea }));
    }
  }, [preselectedArea]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setEnviado(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    const texto = `Olá, Dra. Lilian! Meu nome é ${formData.nome || 'Visitante'}.\n` +
      `Gostaria de agendar um atendimento psicológico com você.\n` +
      `• Modalidade: ${formData.modalidade === 'online' ? 'Online' : 'Presencial'}\n` +
      `• Área de interesse: ${formData.areaInteresse}\n` +
      `• Melhor período: ${formData.periodoPreferencia}\n` +
      (formData.mensagem ? `• Mensagem: ${formData.mensagem}` : '');

    const url = `https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/60 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-surface-card rounded-3xl shadow-2xl border border-quartz-200 overflow-hidden z-10 my-8"
        >
          {/* Header do Modal */}
          <div className="px-6 sm:px-8 py-5 border-b border-border-subtle/80 flex items-center justify-between bg-gradient-to-r from-quartz-50/70 via-surface-card to-leaf-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-quartz-100 border border-quartz-200 flex items-center justify-center text-quartz-600">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-ink">
                  Agendar Acolhimento Terapêutico
                </h3>
                <p className="text-xs text-ink-subtle">
                  Dra. Lilian - Psicóloga · CRP 06/148920
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-ink-subtle hover:text-ink hover:bg-surface-soft transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {enviado ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-leaf-100 text-leaf-700 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-ink mb-2">
                  Solicitação Recebida com Sucesso!
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted max-w-md mb-8 leading-relaxed font-light">
                  Nossa equipe de acolhimento entrará em contato em até 2 horas úteis pelo WhatsApp com os horários disponíveis.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-leaf-600 hover:bg-leaf-700 text-white font-medium text-sm shadow-md transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Continuar no WhatsApp agora</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="px-5 py-3 rounded-full text-xs text-ink-subtle hover:text-ink cursor-pointer"
                  >
                    Fechar janela
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Modalidade */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-2">
                    Modalidade:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, modalidade: 'online' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-left flex items-center justify-between cursor-pointer ${
                        formData.modalidade === 'online'
                          ? 'bg-quartz-50 border-quartz-400 text-quartz-900 font-semibold shadow-xs'
                          : 'bg-surface-soft/60 border-border-subtle text-ink-muted'
                      }`}
                    >
                      <span>Online (Todo o Brasil)</span>
                      {formData.modalidade === 'online' && (
                        <span className="w-2 h-2 rounded-full bg-quartz-500" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, modalidade: 'presencial' })}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-left flex items-center justify-between cursor-pointer ${
                        formData.modalidade === 'presencial'
                          ? 'bg-leaf-50 border-leaf-400 text-leaf-900 font-semibold shadow-xs'
                          : 'bg-surface-soft/60 border-border-subtle text-ink-muted'
                      }`}
                    >
                      <span>Presencial (Espaço Sensorial)</span>
                      {formData.modalidade === 'presencial' && (
                        <span className="w-2 h-2 rounded-full bg-leaf-500" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Nome e Telefone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-1">
                      Seu Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-ink-subtle absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder="Nome e Sobrenome"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-surface-soft/40 border border-border-subtle text-ink text-xs sm:text-sm focus:outline-none focus:border-quartz-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-muted mb-1">
                      WhatsApp ou Celular *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-ink-subtle absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(11) 99999-9999"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-surface-soft/40 border border-border-subtle text-ink text-xs sm:text-sm focus:outline-none focus:border-quartz-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Área de Interesse */}
                <div>
                  <label className="block text-xs font-medium text-ink-muted mb-1">
                    Área de Cuidado
                  </label>
                  <select
                    value={formData.areaInteresse}
                    onChange={(e) => setFormData({ ...formData, areaInteresse: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-surface-soft/40 border border-border-subtle text-ink text-xs sm:text-sm focus:outline-none focus:border-quartz-400"
                  >
                    {AREAS_ATUACAO.map((area) => (
                      <option key={area.id} value={area.titulo}>
                        {area.titulo}
                      </option>
                    ))}
                    <option value="Acolhimento Geral / Primeira Consulta">
                      Acolhimento Geral / Conversa Inicial
                    </option>
                  </select>
                </div>

                {/* Período */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ink-subtle mb-1.5">
                    Preferência de Período:
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {(['manha', 'tarde', 'noite'] as const).map((periodo) => (
                      <button
                        key={periodo}
                        type="button"
                        onClick={() => setFormData({ ...formData, periodoPreferencia: periodo })}
                        className={`py-2 px-2 rounded-xl border text-center capitalize cursor-pointer ${
                          formData.periodoPreferencia === periodo
                            ? 'bg-quartz-50 border-quartz-400 text-quartz-900 font-semibold'
                            : 'bg-surface-soft/40 border-border-subtle text-ink-muted'
                        }`}
                      >
                        {periodo === 'manha' ? 'Manhã' : periodo === 'tarde' ? 'Tarde' : 'Noite'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-quartz-500 hover:bg-quartz-600 text-white font-medium text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Entrar em contato</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-leaf-50 border border-leaf-200 text-leaf-800 hover:bg-leaf-100 font-medium text-sm transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-leaf-600" />
                    <span>WhatsApp Direto</span>
                  </button>
                </div>

                <div className="text-center pt-2 text-[11px] text-ink-subtle flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-leaf-600" />
                  <span>Sigilo profissional garantido pelo Código de Ética do Psicólogo</span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
