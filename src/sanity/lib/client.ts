import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'gqt6i1to',
  dataset: 'production',
  useCdn: false, // Turn off CDN for instant fresh data
  apiVersion: '2024-03-24', // Today's date is fine for API versioning
});
