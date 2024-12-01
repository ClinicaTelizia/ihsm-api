import { Module } from '@nestjs/common';
import { AgendasService } from './agendas.service';
import { AgendasController } from './agendas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Agenda } from './entities/agenda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Agenda])],
  controllers: [AgendasController],
  providers: [AgendasService],
})
export class AgendasModule {}
