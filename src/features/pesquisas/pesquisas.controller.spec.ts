import { Test, TestingModule } from '@nestjs/testing';
import { PesquisasController } from './pesquisas.controller';
import { PesquisasService } from './pesquisas.service';

describe('PesquisasController', () => {
  let controller: PesquisasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PesquisasController],
      providers: [PesquisasService],
    }).compile();

    controller = module.get<PesquisasController>(PesquisasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
