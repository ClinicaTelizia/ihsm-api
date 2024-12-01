import { Module } from '@nestjs/common';
import { AnotacoesService } from './anotacoes.service';
import { AnotacoesController } from './anotacoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Anotacoe } from './entities/anotacoe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Anotacoe])],
  controllers: [AnotacoesController],
  providers: [AnotacoesService],
})
export class AnotacoesModule {}
