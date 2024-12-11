import { float } from 'aws-sdk/clients/cloudfront';
import { DateTime } from 'aws-sdk/clients/devicefarm';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pagamento')
export class Pagamento {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  cartoesId: string;

  @Column({ type: 'varchar' })
  valor: float;

  @Column({ type: 'varchar' })
  dataPagamento: DateTime;

  @Column({ type: 'varchar' })
  descricaoFormaPagamento: string;

  @Column({ type: 'varchar' })
  instituicaoBancaria: string;
}
