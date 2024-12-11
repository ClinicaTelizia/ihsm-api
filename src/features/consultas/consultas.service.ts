import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from './entities/consulta.entity';

@Injectable()
export class ConsultasService {
  constructor(
    @InjectRepository(Consulta)
    private readonly consultaRepository: Repository<Consulta>,
  ) {}

  async create(createConsultaDto: CreateConsultaDto) {
    const consulta = this.consultaRepository.create(createConsultaDto);
    return await this.consultaRepository.save(consulta);
  }

  async findAll() {
    return await this.consultaRepository.find();
  }

  async findOne(id: string) {
    const consulta = await this.consultaRepository.findOne({
      where: { id: id as any },
    });
    if (!consulta) {
      throw new NotFoundException(`Consulta com id ${id} não encontrada`);
    }
    return consulta;
  }

  async update(id: string, updateConsultaDto: UpdateConsultaDto) {
    const consulta = await this.findOne(id);
    Object.assign(consulta, updateConsultaDto);
    return await this.consultaRepository.save(consulta);
  }

  async remove(id: string) {
    const consulta = await this.findOne(id);
    return await this.consultaRepository.remove(consulta);
  }
}
