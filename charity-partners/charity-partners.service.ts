import { Injectable } from '@nestjs/common';
import { CreateCharityPartnerInput } from './dto/create-charity-partner.input';
import { UpdateCharityPartnerInput } from './dto/update-charity-partner.input';

@Injectable()
export class CharityPartnersService {
  create(createCharityPartnerInput: CreateCharityPartnerInput) {
    return 'This action adds a new charityPartner';
  }

  findAll() {
    return `This action returns all charityPartners`;
  }

  findOne(id: number) {
    return `This action returns a #${id} charityPartner`;
  }

  update(id: number, updateCharityPartnerInput: UpdateCharityPartnerInput) {
    return `This action updates a #${id} charityPartner`;
  }

  remove(id: number) {
    return `This action removes a #${id} charityPartner`;
  }
}
