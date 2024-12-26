import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnotacoeDto } from './dto/create-anotacoe.dto';
import { UpdateAnotacoeDto } from './dto/update-anotacoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Anotacoe } from './entities/anotacoe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnotacoesService {
  constructor(
    @InjectRepository(Anotacoe)
    private anotacaoRepository: Repository<Anotacoe>,
  ) {}

  async create(createAnotacoeDto: CreateAnotacoeDto) {
    const anotacao = this.anotacaoRepository.create(createAnotacoeDto);
    return await this.anotacaoRepository.save(anotacao);
  }

  async findAll() {
    const anotacoes = await this.anotacaoRepository.find();
    return anotacoes;
  }

  async findOne(id: string) {
    const anotacao = await this.anotacaoRepository.findOne({
      where: { id },
    });
    if (!anotacao) {
      throw new NotFoundException(`Anotação com ID ${id} não encontrada`);
    }
    return anotacao;
  }

  async update(id: string, updateAnotacoeDto: UpdateAnotacoeDto) {
    const anotacao = await this.anotacaoRepository.findOne({
      where: { id },
    });
    if (!anotacao) {
      throw new NotFoundException(`Anotação com ID ${id} não encontrada`);
    }
    Object.assign(anotacao, updateAnotacoeDto);
    return await this.anotacaoRepository.save(anotacao);
  }

  async remove(id: string) {
    const anotacao = await this.anotacaoRepository.findOne({
      where: { id },
    });
    if (!anotacao) {
      throw new NotFoundException(`Anotação com ID ${id} não encontrada`);
    }
    return await this.anotacaoRepository.remove(anotacao);
  }
}
