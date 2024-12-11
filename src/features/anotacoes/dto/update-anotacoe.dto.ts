import { PartialType } from '@nestjs/swagger';
import { CreateAnotacoeDto } from './create-anotacoe.dto';

export class UpdateAnotacoeDto extends PartialType(CreateAnotacoeDto) {}
