import { Test, TestingModule } from '@nestjs/testing';
import { TerapeutasController } from '../terapeutas.controller';
import { TerapeutasService } from '../terapeutas.service';

describe('TerapeutasController', () => {
  let controller: TerapeutasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerapeutasController],
      providers: [TerapeutasService],
    }).compile();

    controller = module.get<TerapeutasController>(TerapeutasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
