import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SuperAdminService } from './super-admin.service';
import { SuperAdmin } from './entities/super-admin.entity';
import { CreateSuperAdminInput } from './dto/create-super-admin.input';
import { UpdateSuperAdminInput } from './dto/update-super-admin.input';

@Resolver(() => SuperAdmin)
export class SuperAdminResolver {
  constructor(private readonly superAdminService: SuperAdminService) {}

  @Mutation(() => SuperAdmin)
  createSuperAdmin(@Args('createSuperAdminInput') createSuperAdminInput: CreateSuperAdminInput) {
    return this.superAdminService.create(createSuperAdminInput);
  }

  @Query(() => [SuperAdmin], { name: 'superAdmin' })
  findAll() {
    return this.superAdminService.findAll();
  }

  @Query(() => SuperAdmin, { name: 'superAdmin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.superAdminService.findOne(id);
  }

  @Mutation(() => SuperAdmin)
  updateSuperAdmin(@Args('updateSuperAdminInput') updateSuperAdminInput: UpdateSuperAdminInput) {
    return this.superAdminService.update(updateSuperAdminInput.id, updateSuperAdminInput);
  }

  @Mutation(() => SuperAdmin)
  removeSuperAdmin(@Args('id', { type: () => Int }) id: number) {
    return this.superAdminService.remove(id);
  }
}
