import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,
  ) {}

  async create(createTagDto: CreateTagDto) {
    const tag = this.tagRepository.create(createTagDto);
    return await this.tagRepository.save(tag);
  }

  async findAll() {
    return await this.tagRepository.find();
  }

  async findOne(id: string) {
    const tag = await this.tagRepository.findOne({ where: { id: id as any } });
    if (!tag) {
      throw new NotFoundException(`Tag with id ${id} not found`);
    }
    return tag;
  }

  async update(id: string, updateTagDto: UpdateTagDto) {
    const tag = await this.findOne(id);
    Object.assign(tag, updateTagDto);
    return await this.tagRepository.save(tag);
  }

  async remove(id: string) {
    const tag = await this.findOne(id);
    return await this.tagRepository.remove(tag);
  }
}
