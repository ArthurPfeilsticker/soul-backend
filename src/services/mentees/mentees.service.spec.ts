import { Test, TestingModule } from '@nestjs/testing';
import { MenteesService } from './mentees.service';

describe('MenteesService', () => {
  let service: MenteesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenteesService],
    }).compile();

    service = module.get<MenteesService>(MenteesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
