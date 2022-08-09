import { Test, TestingModule } from '@nestjs/testing';
import { CharityPartnersService } from './charity-partners.service';

describe('CharityPartnersService', () => {
  let service: CharityPartnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharityPartnersService],
    }).compile();

    service = module.get<CharityPartnersService>(CharityPartnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
