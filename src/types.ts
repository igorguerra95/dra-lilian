export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AreaAtuacao {
  id: string;
  titulo: string;
  tagline: string;
  categoria: string;
  descricao: string;
  sintomasComuns: string[];
  beneficios: string[];
  tempoMedio: string;
  icone: string;
  imagem: string;
}

export interface PilarClinico {
  numero: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  icone: string;
}

export interface Depoimento {
  id: string;
  autorAnonimizado: string;
  tempoTerapia: string;
  contexto: string;
  relato: string;
  destaque: string;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
  categoria: string;
}

export interface AgendamentoForm {
  nome: string;
  telefone: string;
  email: string;
  modalidade: 'online' | 'presencial';
  areaInteresse: string;
  periodoPreferencia: 'manha' | 'tarde' | 'noite';
  dataPreferencia: string;
  mensagem: string;
}
