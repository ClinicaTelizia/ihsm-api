import { Module } from '@nestjs/common';
import { PagamentosService } from './pagamentos.service';
import { PagamentosController } from './pagamentos.controller';
import { Pagamento } from './entities/pagamento.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pagamento])],
  controllers: [PagamentosController],
  providers: [PagamentosService],
})
export class PagamentosModule {}
