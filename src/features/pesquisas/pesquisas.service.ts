import { Injectable } from '@nestjs/common';
import { CreatePesquisaDto } from './dto/create-pesquisa.dto';
import { UpdatePesquisaDto } from './dto/update-pesquisa.dto';

@Injectable()
export class PesquisasService {
  create(createPesquisaDto: CreatePesquisaDto) {
    return 'This action adds a new pesquisa';
  }

  findAll() {
    return `This action returns all pesquisas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pesquisa`;
  }

  update(id: number, updatePesquisaDto: UpdatePesquisaDto) {
    return `This action updates a #${id} pesquisa`;
  }

  remove(id: number) {
    return `This action removes a #${id} pesquisa`;
  }
}
