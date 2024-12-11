import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('report')
export class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  descricaoProblema: string;

  @Column({ type: 'varchar' })
  pacienteId: string;

  @Column({ type: 'varchar' })
  terapeutaId: string;
}
