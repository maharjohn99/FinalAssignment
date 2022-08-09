import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CharityPartner {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
