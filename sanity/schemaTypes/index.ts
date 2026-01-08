import { type SchemaTypeDefinition } from 'sanity'
import { landingPage } from './landingPage'
import { post } from './post'
import { author } from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, post, author],
}
