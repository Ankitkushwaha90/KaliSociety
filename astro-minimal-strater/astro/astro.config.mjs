import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-sanity-minimal-starter.netlify.app/',
  // Your public domain, e.g.: https://my-site.dev/
  integrations: [
    sitemap(),
    sanity({
      projectId: 'qnt16b0i',
      dataset: 'production',
      apiVersion: '2022-03-07',
      useCdn: true,
    }),
  ],
});
