import { Module } from '@nestjs/common';
import { AppUsersService } from './app-users.service';
import { AppUsersResolver } from './app-users.resolver';

@Module({
  providers: [AppUsersResolver, AppUsersService]
})
export class AppUsersModule {}
