import { Test, TestingModule } from '@nestjs/testing';
import { FoundingController } from './founding.controller';

describe('FoundingController', () => {
  let controller: FoundingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoundingController],
    }).compile();

    controller = module.get<FoundingController>(FoundingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
