import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SEERVICE_DOMAIN,
  apiKey: process.env.API_KEY
})
