import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemaTypes';

// You will get these from your Sanity Dashboard
export const projectId = 'gqt6i1to';
export const dataset = 'production';

export default defineConfig({
  name: 'default',
  title: 'Zagreb Transfers CMS',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
  
  basePath: '/admin', // The route where the studio is mounted
});
