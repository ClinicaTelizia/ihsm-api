import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pesquisa')
export class Pesquisa {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  terapeutaId: string;

  @Column({ type: 'varchar' })
  pacienteId: string;

  @Column({ type: 'varchar' })
  tagsId: string;

  @Column({ type: 'varchar' })
  ratingsId: string;

  @Column({ type: 'varchar' })
  agendaId: string;
}
