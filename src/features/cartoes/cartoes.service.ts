import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartoeDto } from './dto/create-cartoe.dto';
import { UpdateCartoeDto } from './dto/update-cartoe.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cartoe } from './entities/cartoe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartoesService {
  constructor(
    @InjectRepository(Cartoe)
    private cartaoRepository: Repository<Cartoe>,
  ) {}

  async create(createCartoeDto: CreateCartoeDto) {
    const cartao = this.cartaoRepository.create(createCartoeDto);
    return await this.cartaoRepository.save(cartao);
  }

  async findAll() {
    const cartoes = await this.cartaoRepository.find();
    return cartoes;
  }

  async findOne(id: string) {
    const cartao = await this.cartaoRepository.findOne({
      where: { id },
    });
    if (!cartao) {
      throw new NotFoundException(`Cartão com ID ${id} não encontrado`);
    }
    return cartao;
  }

  async update(id: string, updateCartoeDto: UpdateCartoeDto) {
    const cartao = await this.cartaoRepository.findOne({
      where: { id },
    });
    if (!cartao) {
      throw new NotFoundException(`Cartão com ID ${id} não encontrado`);
    }
    Object.assign(cartao, updateCartoeDto);
    return await this.cartaoRepository.save(cartao);
  }

  async remove(id: string) {
    const cartao = await this.cartaoRepository.findOne({
      where: { id },
    });
    if (!cartao) {
      throw new NotFoundException(`Cartão com ID ${id} não encontrado`);
    }
    return await this.cartaoRepository.remove(cartao);
  }
}
