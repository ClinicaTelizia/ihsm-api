import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('consulta') 

export class Consulta {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar'})
    status: string;

    @Column({type: 'varchar'})
    terapeutaId: string;

    @Column({type: 'varchar'})
    pacienteId: string;

    @Column({type: 'varchar'})
    agendaId: string;

    @Column({type: 'varchar'})
    infosAdicionais: string;
}
