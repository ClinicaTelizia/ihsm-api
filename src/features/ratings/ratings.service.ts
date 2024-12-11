import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
  ) {}

  async create(createRatingDto: CreateRatingDto) {
    const rating = this.ratingRepository.create(createRatingDto);
    return await this.ratingRepository.save(rating);
  }

  async findAll() {
    return await this.ratingRepository.find();
  }

  async findOne(id: string) {
    const rating = await this.ratingRepository.findOne({
      where: { id: id as any },
    });
    if (!rating) {
      throw new NotFoundException(`Rating with id ${id} not found`);
    }
    return rating;
  }

  async update(id: string, updateRatingDto: UpdateRatingDto) {
    const rating = await this.findOne(id);
    Object.assign(rating, updateRatingDto);
    return await this.ratingRepository.save(rating);
  }

  async remove(id: string) {
    const rating = await this.findOne(id);
    return await this.ratingRepository.remove(rating);
  }
}
