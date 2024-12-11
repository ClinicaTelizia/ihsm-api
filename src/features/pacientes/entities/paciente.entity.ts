import { DateTime } from 'aws-sdk/clients/devicefarm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('paciente')
export class Paciente {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  nome: string;

  @Column({ type: 'varchar' })
  dataNascimento: DateTime;

  @Column({ type: 'char', length: 11 })
  telefone: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  descricao: string;

  @Column({ type: 'varchar' })
  cpf: string;

  @Column({ type: 'varchar' })
  endereco: string;

  @Column({ type: 'varchar' })
  fotoPerfil: string;
}
