import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, MessageCircle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { DADOS_CLINICA } from '../data/content';

interface NavbarProps {
  onOpenAgendamento: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAgendamento }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Áreas de Atuação', href: '#areas' },
    { label: 'Sobre o Espaço', href: '#sobre' },
    { label: 'Jornada Clínica', href: '#jornada' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-[0_4px_30px_rgba(244,114,182,0.08)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logotipo da Clínica */}
            <a href="#inicio" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-quartz-200 via-quartz-100 to-leaf-100 border border-quartz-300/40 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                <div className="relative flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-quartz-400 opacity-90" />
                  <div className="absolute w-5 h-5 rounded-full border border-leaf-600/50" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-semibold tracking-tight text-ink group-hover:text-quartz-600 transition-colors">
                  Dra. Lilian
                </span>
                <span className="text-[11px] uppercase tracking-widest text-ink-subtle font-medium -mt-1">
                  Psicóloga Clínica
                </span>
              </div>
            </a>

            {/* Links Desktop */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-ink-muted hover:text-quartz-700 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-quartz-400 hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Ações Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-leaf-50/80 border border-leaf-200 text-leaf-800 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-leaf-500 animate-pulse" />
                <span>Dra. Lilian · Online & Presencial</span>
              </div>

              <button
                onClick={onOpenAgendamento}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-quartz-500 to-quartz-600 hover:from-quartz-600 hover:to-quartz-700 text-white text-sm font-medium shadow-md shadow-quartz-400/20 hover:shadow-lg hover:shadow-quartz-400/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Entrar em contato</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Botão Mobile Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenAgendamento}
                className="px-3.5 py-1.5 rounded-full bg-quartz-500 text-white text-xs font-medium shadow-sm hover:bg-quartz-600 transition-colors"
              >
                Agendar
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu de navegação"
                className="p-2 rounded-xl text-ink-muted hover:text-ink hover:bg-surface-soft transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Mobile */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-surface-card p-6 shadow-2xl flex flex-col justify-between border-l border-quartz-200/50">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-surface-soft">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-quartz-100 flex items-center justify-center border border-quartz-200">
                    <div className="w-3 h-3 rounded-full bg-quartz-400" />
                  </div>
                  <div>
                    <span className="font-display text-xl font-bold text-ink">
                      Dra. Lilian
                    </span>
                    <p className="text-[11px] text-ink-subtle uppercase tracking-wider">
                      Psicóloga Clínica
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-ink-muted hover:bg-surface-soft"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 py-2 px-3 rounded-xl bg-leaf-50 border border-leaf-200/70 flex items-center gap-2 text-xs text-leaf-800">
                <span className="w-2 h-2 rounded-full bg-leaf-500 animate-pulse" />
                <span>Atendendo Online em todo o Brasil</span>
              </div>

              <nav className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-medium text-ink-muted hover:text-quartz-700 hover:bg-quartz-50/60 transition-all"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-surface-soft space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAgendamento();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-quartz-500 to-quartz-600 text-white font-medium text-sm shadow-md shadow-quartz-400/20"
              >
                <Heart className="w-4 h-4" />
                <span>Entrar em contato</span>
              </button>

              <a
                href={`https://wa.me/${DADOS_CLINICA.whatsappNumero}?text=${encodeURIComponent(
                  DADOS_CLINICA.whatsappMensagemPadrao
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-leaf-50 border border-leaf-200 text-leaf-800 font-medium text-sm hover:bg-leaf-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-leaf-600" />
                <span>Falar no WhatsApp</span>
              </a>

              <div className="text-center pt-2">
                <span className="text-[11px] text-ink-light flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-leaf-600" />
                  {DADOS_CLINICA.registroProfissional}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
