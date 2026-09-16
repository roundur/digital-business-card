import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Project } from '../../project/models/project.model';
import { Experience } from '../../experience/models/experience.model';

@ObjectType()
export class Profile {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  title: string;

  @Field()
  summary: string;

  @Field(() => [String])
  links: string[];

  @Field(() => [String])
  skills: string[];

  projects?: Project[];
  
  experience?: Experience[];
}
