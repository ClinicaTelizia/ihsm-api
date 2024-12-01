import { Module } from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { CartoesController } from './cartoes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cartoe } from './entities/cartoe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cartoe])],
  controllers: [CartoesController],
  providers: [CartoesService],
})
export class CartoesModule {}
