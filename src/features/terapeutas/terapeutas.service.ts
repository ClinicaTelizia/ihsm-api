import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTerapeutaDto } from './dto/create-terapeuta.dto';
import { UpdateTerapeutaDto } from './dto/update-terapeuta.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Terapeuta } from './entities/terapeuta.entity';

@Injectable()
export class TerapeutasService {
  constructor(
    @InjectRepository(Terapeuta)
    private readonly terapeutaRepository: Repository<Terapeuta>,
  ) {}

  async create(createTerapeutaDto: CreateTerapeutaDto) {
    const terapeuta = this.terapeutaRepository.create(createTerapeutaDto);
    return await this.terapeutaRepository.save(terapeuta);
  }

  async findAll() {
    const terapeutas = await this.terapeutaRepository.find();
    return terapeutas;
  }

  async findOne(id: string) {
    const terapeuta = await this.terapeutaRepository.findOneBy({
      id: id as any,
    });
    if (!terapeuta) {
      throw new NotFoundException(`Terapeuta com id ${id} não encontrado`);
    }
    return terapeuta;
  }

  async update(id: string, updateTerapeutaDto: UpdateTerapeutaDto) {
    const terapeuta = await this.findOne(id);
    Object.assign(terapeuta, updateTerapeutaDto);
    return await this.terapeutaRepository.save(terapeuta);
  }

  async remove(id: string) {
    const terapeuta = await this.findOne(id);
    return await this.terapeutaRepository.remove(terapeuta);
  }
}
