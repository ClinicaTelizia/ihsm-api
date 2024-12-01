import { Injectable } from '@nestjs/common';
import { CreateTerapeutaDto } from './dto/create-terapeuta.dto';
import { UpdateTerapeutaDto } from './dto/update-terapeuta.dto';

@Injectable()
export class TerapeutasService {
  create(createTerapeutaDto: CreateTerapeutaDto) {
    return 'This action adds a new terapeuta';
  }

  async findAll() {
    const terapeutas = await this.terapeutaRepository.find();
    return terapeutas; // Retorna um array de terapeutas
  }
  

  findOne(id: number) {
    return `This action returns a #${id} terapeuta`;
  }

  update(id: number, updateTerapeutaDto: UpdateTerapeutaDto) {
    return `This action updates a #${id} terapeuta`;
  }

  remove(id: number) {
    return `This action removes a #${id} terapeuta`;
  }
}
