import { Test, TestingModule } from '@nestjs/testing';
import { FoundingService } from './founding.service';

describe('FoundingService', () => {
  let service: FoundingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoundingService],
    }).compile();

    service = module.get<FoundingService>(FoundingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
