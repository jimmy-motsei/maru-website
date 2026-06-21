import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

/**
 * Server-only Sanity client with write access.
 * Requires SANITY_API_WRITE_TOKEN (an Editor token from sanity.io/manage).
 * Never import this into client components — the token must stay server-side.
 */
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
  perspective: 'raw',
})
