import { Test, TestingModule } from '@nestjs/testing';
import { MentoringSessionController } from './mentoring-session.controller';

describe('MentoringSessionController', () => {
  let controller: MentoringSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MentoringSessionController],
    }).compile();

    controller = module.get<MentoringSessionController>(MentoringSessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
