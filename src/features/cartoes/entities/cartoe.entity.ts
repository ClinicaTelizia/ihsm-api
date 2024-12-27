import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cartao')
export class Cartoe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  pacienteId: string;

  @Column({ type: 'varchar', nullable: true })
  terapeutaId: string;

  @Column({ type: 'varchar', nullable: true })
  consultaId: string;

  @Column({ type: 'varchar', nullable: true })
  agendaId: string;

  @Column({ type: 'varchar', nullable: true })
  pagamentoId: string;

  @Column({ type: 'varchar', nullable: true })
  cartoesId: string;

  @Column({ type: 'varchar', nullable: true})
  ratingsId: string;

  @Column({ type: 'varchar', nullable: true })
  reportsId: string;
}
