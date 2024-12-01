import { DateTime } from "aws-sdk/clients/devicefarm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('terapeuta') 

export class Terapeuta {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar'})
    nome: string;

    @Column({type: 'varchar'})
    dataNascimente: DateTime;

    @Column({type: 'char', length: 11})
    telefone: string;

    @Column({type: 'varchar'})
    email: string;

    @Column({type: 'varchar'})
    tagsId: string;

    @Column({type: 'bytea'})
    fotoPerfil: Buffer;

    @Column({type: 'varchar'})
    ratingId: string;

    @Column({type: 'varchar'})
    descricaoId: string;

    @Column({type: 'varchar'})
    anotacaoId: string;

    @Column({type: 'varchar'})
    links: string;
}
