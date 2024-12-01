import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnotacoesService } from './anotacoes.service';
import { CreateAnotacoeDto } from './dto/create-anotacoe.dto';
import { UpdateAnotacoeDto } from './dto/update-anotacoe.dto';

@Controller('anotacoes')
export class AnotacoesController {
  constructor(private readonly anotacoesService: AnotacoesService) {}

  @Post()
  create(@Body() createAnotacoeDto: CreateAnotacoeDto) {
    return this.anotacoesService.create(createAnotacoeDto);
  }

  @Get()
  findAll() {
    return this.anotacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.anotacoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnotacoeDto: UpdateAnotacoeDto) {
    return this.anotacoesService.update(+id, updateAnotacoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.anotacoesService.remove(+id);
  }
}
