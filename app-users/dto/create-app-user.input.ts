import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAppUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
