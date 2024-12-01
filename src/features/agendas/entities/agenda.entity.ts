import { DateTime } from "aws-sdk/clients/devicefarm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('agenda') 

export class Agenda {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar'})
    terapeutaId: string;

    @Column({type: 'char', length: 11})
    start: DateTime;

    @Column({type: 'varchar'})
    end: DateTime;

    @Column({type: 'varchar'})
    motivoReagendamento: string;

    @Column({type: 'varchar'})
    motivoCancelamento: string;

    @Column({type: 'varchar'})
    infosAdicionais: string;
}
