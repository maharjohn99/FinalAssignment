import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSuperAdminInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
