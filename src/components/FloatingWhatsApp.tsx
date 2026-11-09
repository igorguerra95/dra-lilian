import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { DADOS_CLINICA } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
    DADOS_CLINICA.whatsappMensagemPadrao
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Balão de Acolhimento Amigável */}
      {showTooltip && (
        <div className="mb-3 max-w-[240px] p-3.5 rounded-2xl glass-panel shadow-xl border border-leaf-200/80 text-xs text-ink animate-bounce-slight relative transition-all">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-1.5 right-1.5 p-1 text-ink-subtle hover:text-ink rounded-full"
            aria-label="Fechar balão de mensagem"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 font-semibold text-leaf-800 mb-1">
            <span className="w-2 h-2 rounded-full bg-leaf-500 animate-ping" />
            <span>Dra. Lilian - Psicóloga</span>
          </div>
          <p className="text-[11px] text-ink-muted leading-tight">
            Olá! Sou a Dra. Lilian. Precisa de um espaço seguro de escuta? Fale comigo no WhatsApp.
          </p>
        </div>
      )}

      {/* Botão Flutuante com Pulso Discreto */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato via WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-leaf-600 hover:bg-leaf-700 text-white shadow-lg shadow-leaf-600/30 hover:shadow-xl hover:shadow-leaf-600/40 transition-all duration-300 transform hover:scale-105"
      >
        {/* Anel de Pulso Suave */}
        <span className="absolute inset-0 rounded-full bg-leaf-500 opacity-30 animate-ping group-hover:opacity-40" />

        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Badge "Online" */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
      </a>
    </div>
  );
};
