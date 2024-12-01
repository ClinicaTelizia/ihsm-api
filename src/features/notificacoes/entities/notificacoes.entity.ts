import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('notificacao') 

export class Notificacoes {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar'})
    pacienteId: string;

    @Column({type: 'varchar'})
    terapeutaId: string;

    @Column({type: 'varchar'})
    consultaId: string;

    @Column({type: 'varchar'})
    agendaId: string;

    @Column({type: 'varchar'})
    pagamentoId: string;

    @Column({type: 'varchar'})
    cartoesId: string;

    @Column({type: 'varchar'})
    ratingsId: string;

    @Column({type: 'varchar'})
    reportsId: string;

}
