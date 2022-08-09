import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AppUsersService } from './app-users.service';
import { AppUser } from './entities/app-user.entity';
import { CreateAppUserInput } from './dto/create-app-user.input';
import { UpdateAppUserInput } from './dto/update-app-user.input';

@Resolver(() => AppUser)
export class AppUsersResolver {
  constructor(private readonly appUsersService: AppUsersService) {}

  @Mutation(() => AppUser)
  createAppUser(@Args('createAppUserInput') createAppUserInput: CreateAppUserInput) {
    return this.appUsersService.create(createAppUserInput);
  }

  @Query(() => [AppUser], { name: 'appUsers' })
  findAll() {
    return this.appUsersService.findAll();
  }

  @Query(() => AppUser, { name: 'appUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.appUsersService.findOne(id);
  }

  @Mutation(() => AppUser)
  updateAppUser(@Args('updateAppUserInput') updateAppUserInput: UpdateAppUserInput) {
    return this.appUsersService.update(updateAppUserInput.id, updateAppUserInput);
  }

  @Mutation(() => AppUser)
  removeAppUser(@Args('id', { type: () => Int }) id: number) {
    return this.appUsersService.remove(id);
  }
}
