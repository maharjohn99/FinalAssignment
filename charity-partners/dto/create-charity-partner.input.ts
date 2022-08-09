import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCharityPartnerInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
