import { Resolver, Query } from '@nestjs/graphql';

import { ProfileService } from './profile.service';
import { Profile } from './models/profile.model';


@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) { }

  @Query(() => Profile, { nullable: true })
  async profile(): Promise<Profile | null> {
    return this.profileService.findFirst();
  }
}
