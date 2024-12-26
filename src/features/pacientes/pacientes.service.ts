import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacientesService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {}

  async create(createPacienteDto: CreatePacienteDto) {
    const paciente = this.pacienteRepository.create(createPacienteDto);
    return await this.pacienteRepository.save(paciente);
  }

  async findAll() {
    const pacientes = await this.pacienteRepository.find();
    return pacientes;
  }

  async findOne(email: string) {
    const paciente = await this.pacienteRepository.findOne({
      where: { email },
    });
    if (!paciente) {
      throw new NotFoundException(`Paciente com email ${email} não encontrado`);
    }
    return paciente;
  }

  async update(id: string, updatePacienteDto: UpdatePacienteDto) {
    // Corrigindo tipo de ID para compatibilidade com o TypeORM
    const paciente = await this.pacienteRepository.findOne({
      where: { id: id as any },
    });
    if (!paciente) {
      throw new NotFoundException(`Paciente com id ${id} não encontrado`);
    }
    Object.assign(paciente, updatePacienteDto);
    return await this.pacienteRepository.save(paciente);
  }

  async remove(id: string) {
    const paciente = await this.pacienteRepository.findOne({
      where: { id: id as any },
    });
    if (!paciente) {
      throw new NotFoundException(`Paciente com id ${id} não encontrado`);
    }
    return await this.pacienteRepository.remove(paciente);
  }
}
