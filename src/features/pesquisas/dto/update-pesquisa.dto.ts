import { PartialType } from '@nestjs/swagger';
import { CreatePesquisaDto } from './create-pesquisa.dto';

export class UpdatePesquisaDto extends PartialType(CreatePesquisaDto) {}
