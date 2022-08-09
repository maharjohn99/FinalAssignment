import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CharityPartnersService } from './charity-partners.service';
import { CharityPartner } from './entities/charity-partner.entity';
import { CreateCharityPartnerInput } from './dto/create-charity-partner.input';
import { UpdateCharityPartnerInput } from './dto/update-charity-partner.input';

@Resolver(() => CharityPartner)
export class CharityPartnersResolver {
  constructor(private readonly charityPartnersService: CharityPartnersService) {}

  @Mutation(() => CharityPartner)
  createCharityPartner(@Args('createCharityPartnerInput') createCharityPartnerInput: CreateCharityPartnerInput) {
    return this.charityPartnersService.create(createCharityPartnerInput);
  }

  @Query(() => [CharityPartner], { name: 'charityPartners' })
  findAll() {
    return this.charityPartnersService.findAll();
  }

  @Query(() => CharityPartner, { name: 'charityPartner' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.charityPartnersService.findOne(id);
  }

  @Mutation(() => CharityPartner)
  updateCharityPartner(@Args('updateCharityPartnerInput') updateCharityPartnerInput: UpdateCharityPartnerInput) {
    return this.charityPartnersService.update(updateCharityPartnerInput.id, updateCharityPartnerInput);
  }

  @Mutation(() => CharityPartner)
  removeCharityPartner(@Args('id', { type: () => Int }) id: number) {
    return this.charityPartnersService.remove(id);
  }
}
