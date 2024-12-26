import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const admin = this.adminRepository.create(createAdminDto);
    return await this.adminRepository.save(admin);
  }

  async findAll() {
    const admins = await this.adminRepository.find();
    return admins;
  }

  async findOne(id: string) {
    const admin = await this.adminRepository.findOne({
      where: { id },
    });
    if (!admin) {
      throw new NotFoundException(`Admin com ID ${id} não encontrado`);
    }
    return admin;
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    const admin = await this.adminRepository.findOne({
      where: { id },
    });
    if (!admin) {
      throw new NotFoundException(`Admin com ID ${id} não encontrado`);
    }
    Object.assign(admin, updateAdminDto);
    return await this.adminRepository.save(admin);
  }

  async remove(id: string) {
    const admin = await this.adminRepository.findOne({
      where: { id },
    });
    if (!admin) {
      throw new NotFoundException(`Admin com ID ${id} não encontrado`);
    }
    return await this.adminRepository.remove(admin);
  }
}
