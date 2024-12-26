import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagamento } from './entities/pagamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PagamentosService {
  constructor(
    @InjectRepository(Pagamento)
    private pagamentoRepository: Repository<Pagamento>,
  ) {}

  async create(createPagamentoDto: CreatePagamentoDto) {
    const pagamento = this.pagamentoRepository.create(createPagamentoDto);
    return await this.pagamentoRepository.save(pagamento);
  }

  async findAll() {
    const pagamentos = await this.pagamentoRepository.find();
    return pagamentos;
  }

  async findOne(id: string) {
    const pagamento = await this.pagamentoRepository.findOne({
      where: { id },
    });
    if (!pagamento) {
      throw new NotFoundException(`Pagamento com ID ${id} não encontrado`);
    }
    return pagamento;
  }

  async update(id: string, updatePagamentoDto: UpdatePagamentoDto) {
    const pagamento = await this.pagamentoRepository.findOne({
      where: { id },
    });
    if (!pagamento) {
      throw new NotFoundException(`Pagamento com ID ${id} não encontrado`);
    }
    Object.assign(pagamento, updatePagamentoDto);
    return await this.pagamentoRepository.save(pagamento);
  }

  async remove(id: string) {
    const pagamento = await this.pagamentoRepository.findOne({
      where: { id },
    });
    if (!pagamento) {
      throw new NotFoundException(`Pagamento com ID ${id} não encontrado`);
    }
    return await this.pagamentoRepository.remove(pagamento);
  }
}
