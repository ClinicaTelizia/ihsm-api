import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacientesService {

  constructor(@InjectRepository(Paciente)private pacienteRepository: Repository<Paciente>){

  }

  create(createPacienteDto: CreatePacienteDto) {
    return 'This action adds a new paciente';
  }

  findAll() {
    return `This action returns all pacientes`;
  }

  async findOne(email: string) {
    const paciente = await this.pacienteRepository.findOne({where: {email: email}});

    return paciente;
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return `This action updates a #${id} paciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
