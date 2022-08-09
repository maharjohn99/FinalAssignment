import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUsersModule } from './app-users/app-users.module';
import { CharityPartnersModule } from './charity-partners/charity-partners.module';
import { AdminModule } from './admin/admin.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { AppUsersModule } from './app-users/app-users.module';
import { AdminModule } from './admin/admin.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { CharityPartnersModule } from './charity-partners/charity-partners.module';

@Module({
  imports: [
    AppUsersModule,
    CharityPartnersModule,
    AdminModule,
    SuperAdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
