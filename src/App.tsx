import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AreasSection } from './components/AreasSection';
import { SobreSection } from './components/SobreSection';
import { ContatoSection } from './components/ContatoSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AgendamentoModal } from './components/AgendamentoModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedArea, setSelectedArea] = useState<string>('Ansiedade, Crises e Pânico');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = (areaName?: string) => {
    if (areaName) {
      setSelectedArea(areaName);
    }
    setIsModalOpen(true);
  };

  const handleSelectArea = (areaTitulo: string) => {
    setSelectedArea(areaTitulo);
    // Abre o modal interativo direto com a área pré-selecionada
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col relative selection:bg-quartz-200 selection:text-quartz-900 font-sans">
      {/* Barra de Progresso de Leitura Superior Discreta */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-quartz-400 via-quartz-500 to-leaf-500 z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navegação Superior */}
      <Navbar onOpenAgendamento={() => handleOpenModal()} />

      {/* Estrutura das Seções Obrigatórias: inicio → areas → sobre → contato */}
      <main className="flex-1">
        {/* Seção 1: Início (Hero + Métricas + Acolhimento) */}
        <Hero onOpenAgendamento={() => handleOpenModal()} />

        {/* Seção 2: Áreas de Atuação */}
        <AreasSection onSelectAreaForBooking={handleSelectArea} />

        {/* Seção 3: Sobre a Clínica e Abordagem Terapêutica */}
        <SobreSection onOpenAgendamento={() => handleOpenModal()} />

        {/* Seção 4: Contato & Agendamento Humanizado + FAQ */}
        <ContatoSection initialArea={selectedArea} />
      </main>

      {/* Rodapé Institucional Completo */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Modal Interativo de Agendamento */}
      <AgendamentoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        preselectedArea={selectedArea}
      />
    </div>
  );
}
