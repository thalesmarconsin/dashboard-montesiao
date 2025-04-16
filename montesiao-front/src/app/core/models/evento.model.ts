export interface Evento {
    id: number;
    titulo?: string;
    descricao?: string;
    horario?: string;
    data_inicio?: Date | string;
    data_fim?: Date | string;
    local?: string;
    tipo?: string;
    created_at?: string;
    updated_at?: string;
    imagem_url?: string;
  }
  