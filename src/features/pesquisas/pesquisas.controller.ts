import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PesquisasService } from './pesquisas.service';
import { CreatePesquisaDto } from './dto/create-pesquisa.dto';
import { UpdatePesquisaDto } from './dto/update-pesquisa.dto';

@Controller('pesquisas')
export class PesquisasController {
  constructor(private readonly pesquisasService: PesquisasService) {}

  @Post()
  create(@Body() createPesquisaDto: CreatePesquisaDto) {
    return this.pesquisasService.create(createPesquisaDto);
  }

  @Get()
  findAll() {
    return this.pesquisasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pesquisasService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePesquisaDto: UpdatePesquisaDto,
  ) {
    return this.pesquisasService.update(id, updatePesquisaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pesquisasService.remove(id);
  }
}
