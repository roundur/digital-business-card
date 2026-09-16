import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { ExperienceService } from './experience.service';
import { Experience } from './models/experience.model';

import { Profile } from '../profile/models/profile.model';


@Resolver(() => Profile)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) { }

  @ResolveField('experience', () => [Experience])
  async getExperience(@Parent() profile: Profile): Promise<Experience[]> {
    return this.experienceService.findByProfileId(profile.id);
  }
}
