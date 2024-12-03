import { Test, TestingModule } from '@nestjs/testing';
import { MenteesController } from './mentees.controller';

describe('MenteesController', () => {
  let controller: MenteesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenteesController],
    }).compile();

    controller = module.get<MenteesController>(MenteesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
