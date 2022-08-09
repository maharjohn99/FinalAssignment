import { CreateSuperAdminInput } from './create-super-admin.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSuperAdminInput extends PartialType(CreateSuperAdminInput) {
  @Field(() => Int)
  id: number;
}
