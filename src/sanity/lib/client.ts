import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'gqt6i1to',
  dataset: 'production',
  useCdn: true, // Use CDN for faster responses, set to false if you need immediate fresh data
  apiVersion: '2024-03-24', // Today's date is fine for API versioning
});
