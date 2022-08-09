import { Test, TestingModule } from '@nestjs/testing';
import { AppUsersResolver } from './app-users.resolver';
import { AppUsersService } from './app-users.service';

describe('AppUsersResolver', () => {
  let resolver: AppUsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppUsersResolver, AppUsersService],
    }).compile();

    resolver = module.get<AppUsersResolver>(AppUsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
