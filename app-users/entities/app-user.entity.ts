import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class AppUser {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
