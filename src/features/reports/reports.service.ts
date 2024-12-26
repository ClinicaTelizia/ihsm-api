import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './entities/report.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
  ) {}

  async create(createReportDto: CreateReportDto) {
    const report = this.reportRepository.create(createReportDto);
    return await this.reportRepository.save(report);
  }

  async findAll() {
    const reports = await this.reportRepository.find();
    return reports;
  }

  async findOne(id: string) {
    const report = await this.reportRepository.findOne({
      where: { id },
    });
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return report;
  }

  async update(id: string, updateReportDto: UpdateReportDto) {
    const report = await this.reportRepository.findOne({
      where: { id },
    });
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    Object.assign(report, updateReportDto);
    return await this.reportRepository.save(report);
  }

  async remove(id: string) {
    const report = await this.reportRepository.findOne({
      where: { id },
    });
    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }
    return await this.reportRepository.remove(report);
  }
}
