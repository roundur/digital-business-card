import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { ProjectService } from './project.service';
import { Project } from './models/project.model';

import { Profile } from '../profile/models/profile.model';


@Resolver(() => Profile)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) { }

  @ResolveField('projects', () => [Project])
  projects(@Parent() profile: Profile) {
    return this.projectService.findByProfileId(profile.id);
  }
}
