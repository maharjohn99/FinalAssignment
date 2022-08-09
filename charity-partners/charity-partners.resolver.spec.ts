import { Test, TestingModule } from '@nestjs/testing';
import { CharityPartnersResolver } from './charity-partners.resolver';
import { CharityPartnersService } from './charity-partners.service';

describe('CharityPartnersResolver', () => {
  let resolver: CharityPartnersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharityPartnersResolver, CharityPartnersService],
    }).compile();

    resolver = module.get<CharityPartnersResolver>(CharityPartnersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
