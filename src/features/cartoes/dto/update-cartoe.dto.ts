import { PartialType } from '@nestjs/swagger';
import { CreateCartoeDto } from './create-cartoe.dto';

export class UpdateCartoeDto extends PartialType(CreateCartoeDto) {}
