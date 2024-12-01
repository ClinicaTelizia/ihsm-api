import { Test, TestingModule } from '@nestjs/testing';
import { TerapeutasService } from '../terapeutas.service';

describe('TerapeutasService', () => {
  let service: TerapeutasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TerapeutasService],
    }).compile();

    service = module.get<TerapeutasService>(TerapeutasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
