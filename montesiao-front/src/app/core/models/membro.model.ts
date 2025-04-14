import { Ministerio } from "./ministerio.model";

export interface Membro {
  id: number;
  nome?: string;
  sobrenome: string;
  email: string;
  idade: number;
  cpf: string;
  telefone?: string;
  batizado?: boolean;
  data_batismo?: Date | string;
  ministerio_id?: number;
  created_at?: string;
  updated_at?: string;
}