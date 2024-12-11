import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePesquisaDto } from './dto/create-pesquisa.dto';
import { UpdatePesquisaDto } from './dto/update-pesquisa.dto';
import { Pesquisa } from './entities/pesquisa.entity';

@Injectable()
export class PesquisasService {
  constructor(
    @InjectRepository(Pesquisa)
    private readonly pesquisaRepository: Repository<Pesquisa>,
  ) {}

  async create(createPesquisaDto: CreatePesquisaDto) {
    const pesquisa = this.pesquisaRepository.create(createPesquisaDto);
    return await this.pesquisaRepository.save(pesquisa);
  }

  async findAll() {
    return await this.pesquisaRepository.find();
  }

  async findOne(id: string) {
    const pesquisa = await this.pesquisaRepository.findOne({ where: { id } });
    if (!pesquisa) {
      throw new NotFoundException(`Pesquisa with id ${id} not found`);
    }
    return pesquisa;
  }

  async update(id: string, updatePesquisaDto: UpdatePesquisaDto) {
    const pesquisa = await this.findOne(id);
    Object.assign(pesquisa, updatePesquisaDto);
    return await this.pesquisaRepository.save(pesquisa);
  }

  async remove(id: string) {
    const pesquisa = await this.findOne(id);
    return await this.pesquisaRepository.remove(pesquisa);
  }
}
