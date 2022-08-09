import { Module } from '@nestjs/common';
import { CharityPartnersService } from './charity-partners.service';
import { CharityPartnersResolver } from './charity-partners.resolver';

@Module({
  providers: [CharityPartnersResolver, CharityPartnersService]
})
export class CharityPartnersModule {}
