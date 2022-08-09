import { Injectable } from '@nestjs/common';
import { CreateAppUserInput } from './dto/create-app-user.input';
import { UpdateAppUserInput } from './dto/update-app-user.input';

@Injectable()
export class AppUsersService {
  create(createAppUserInput: CreateAppUserInput) {
    return 'This action adds a new appUser';
  }

  findAll() {
    return `This action returns all appUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appUser`;
  }

  update(id: number, updateAppUserInput: UpdateAppUserInput) {
    return `This action updates a #${id} appUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} appUser`;
  }
}
