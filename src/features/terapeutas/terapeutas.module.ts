import { Module } from '@nestjs/common';
import { TerapeutasService } from './terapeutas.service';
import { TerapeutasController } from './terapeutas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Terapeuta } from './entities/terapeuta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Terapeuta])],
  controllers: [TerapeutasController],
  providers: [TerapeutasService],
})
export class TerapeutasModule {}
