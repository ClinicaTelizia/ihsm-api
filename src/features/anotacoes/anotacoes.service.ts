import { Injectable } from '@nestjs/common';
import { CreateAnotacoeDto } from './dto/create-anotacoe.dto';
import { UpdateAnotacoeDto } from './dto/update-anotacoe.dto';

@Injectable()
export class AnotacoesService {
  create(createAnotacoeDto: CreateAnotacoeDto) {
    return 'This action adds a new anotacoe';
  }

  findAll() {
    return `This action returns all anotacoes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} anotacoe`;
  }

  update(id: string, updateAnotacoeDto: UpdateAnotacoeDto) {
    return `This action updates a #${id} anotacoe`;
  }

  remove(id: string) {
    return `This action removes a #${id} anotacoe`;
  }
}
