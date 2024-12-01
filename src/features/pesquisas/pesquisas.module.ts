import { Module } from '@nestjs/common';
import { PesquisasService } from './pesquisas.service';
import { PesquisasController } from './pesquisas.controller';
import { Pesquisa } from './entities/pesquisa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pesquisa])],
  controllers: [PesquisasController],
  providers: [PesquisasService],
})
export class PesquisasModule {}
