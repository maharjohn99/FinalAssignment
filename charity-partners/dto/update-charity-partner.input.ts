import { CreateCharityPartnerInput } from './create-charity-partner.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCharityPartnerInput extends PartialType(CreateCharityPartnerInput) {
  @Field(() => Int)
  id: number;
}
