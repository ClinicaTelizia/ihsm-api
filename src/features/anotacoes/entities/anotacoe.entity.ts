import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('anotacao')
export class Anotacoe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  tituloNota: string;

  @Column({ type: 'varchar' })
  anotacao: string;

  @Column({ type: 'varchar' })
  terapeutaId: string;

  @Column({ type: 'varchar' })
  pacienteId: string;
}
