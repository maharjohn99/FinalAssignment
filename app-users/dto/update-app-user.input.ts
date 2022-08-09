import { CreateAppUserInput } from './create-app-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAppUserInput extends PartialType(CreateAppUserInput) {
  @Field(() => Int)
  id: number;
}
