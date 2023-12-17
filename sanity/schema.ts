import { type SchemaTypeDefinition } from 'sanity'
import academicPath from './schemas/academic-path'
import experience from './schemas/experience'
import keyValue from './schemas/key-value'
import language from './schemas/language'
import link from './schemas/link'
import personalData from './schemas/personal-data'
import project from './schemas/project'
import resume from './schemas/resume'
import skill from './schemas/skill'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    resume,
    personalData,
    link,
    experience,
    academicPath,
    skill,
    language,
    keyValue,
    project,
  ],
}
