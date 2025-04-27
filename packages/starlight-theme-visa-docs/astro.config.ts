// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight'

import starlightThemeVisa from 'starlight-theme-visa'

export default defineConfig({
  integrations: [
    starlight({
      favicon: './favicon.ico',
      credits: true,
      editLink: {
        baseUrl: 'https://github.com/artursopelnik/starlight-theme-visa/edit/main/docs/',
      },
      plugins: [starlightThemeVisa()],
      sidebar: [
        {
          label: 'Start Here',
          items: ['getting-started', 'customization'],
        },
        {
          label: 'Resources',
          items: [{ label: 'Plugins and Tools', link: '/resources/starlight/' }],
        },
        {
          label: 'Examples',
          autogenerate: { directory: 'examples' },
        },
      ],
      social: [
        { href: 'https://github.com/artursopelnik/starlight-theme-visa', icon: 'github', label: 'GitHub' },
      ],
      title: 'Starlight Visa',
    }),
  ],
  site: 'https://starlight-theme-visa.vercel.app',
})
