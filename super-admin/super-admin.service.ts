import { Injectable } from '@nestjs/common';
import { CreateSuperAdminInput } from './dto/create-super-admin.input';
import { UpdateSuperAdminInput } from './dto/update-super-admin.input';

@Injectable()
export class SuperAdminService {
  create(createSuperAdminInput: CreateSuperAdminInput) {
    return 'This action adds a new superAdmin';
  }

  findAll() {
    return `This action returns all superAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} superAdmin`;
  }

  update(id: number, updateSuperAdminInput: UpdateSuperAdminInput) {
    return `This action updates a #${id} superAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} superAdmin`;
  }
}
