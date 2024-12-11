import { Injectable } from '@nestjs/common';
import { CreateCartoeDto } from './dto/create-cartoe.dto';
import { UpdateCartoeDto } from './dto/update-cartoe.dto';

@Injectable()
export class CartoesService {
  create(createCartoeDto: CreateCartoeDto) {
    return 'This action adds a new cartoe';
  }

  findAll() {
    return `This action returns all cartoes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} cartoe`;
  }

  update(id: string, updateCartoeDto: UpdateCartoeDto) {
    return `This action updates a #${id} cartoe`;
  }

  remove(id: string) {
    return `This action removes a #${id} cartoe`;
  }
}
