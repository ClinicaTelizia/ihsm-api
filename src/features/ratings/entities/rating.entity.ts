import { DateTime } from "aws-sdk/clients/devicefarm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rating') 

export class Rating {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar'})
    pacienteId: string;

    @Column({type: 'varchar'})
    terapeutaId: string;

    @Column({type: 'varchar'})
    data: DateTime;

    @Column({type: 'char', length: 11})
    comentario: string;

    @Column({type: 'char', length: 11})
    valorAvaliacao: string;

}


