import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotificacoeDto } from './dto/create-notificacoe.dto';
import { UpdateNotificacoeDto } from './dto/update-notificacoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Notificacoes } from './entities/notificacoes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotificacoesService {
  constructor(
    @InjectRepository(Notificacoes)
    private notificacaoRepository: Repository<Notificacoes>,
  ) {}

  async create(createNotificacoeDto: CreateNotificacoeDto) {
    const notificacao = this.notificacaoRepository.create(createNotificacoeDto);
    return await this.notificacaoRepository.save(notificacao);
  }

  async findAll() {
    const notificacoes = await this.notificacaoRepository.find();
    return notificacoes;
  }

  async findOne(id: string) {
    const notificacao = await this.notificacaoRepository.findOne({
      where: { id },
    });
    if (!notificacao) {
      throw new NotFoundException(`Notificação com ID ${id} não encontrada`);
    }
    return notificacao;
  }

  async update(id: string, updateNotificacoeDto: UpdateNotificacoeDto) {
    const notificacao = await this.notificacaoRepository.findOne({
      where: { id },
    });
    if (!notificacao) {
      throw new NotFoundException(`Notificação com ID ${id} não encontrada`);
    }
    Object.assign(notificacao, updateNotificacoeDto);
    return await this.notificacaoRepository.save(notificacao);
  }

  async remove(id: string) {
    const notificacao = await this.notificacaoRepository.findOne({
      where: { id },
    });
    if (!notificacao) {
      throw new NotFoundException(`Notificação com ID ${id} não encontrada`);
    }
    return await this.notificacaoRepository.remove(notificacao);
  }
}
