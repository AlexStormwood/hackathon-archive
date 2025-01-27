// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://alexstormwood.github.io',
  	base: 'hackathon-archive',
	integrations: [
		starlight({
			title: "Bigfoot's Hackathon Archive",
			social: {
				github: 'https://github.com/AlexStormwood/hackathon-archive',
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'Global Game Jam',
					autogenerate: { directory: 'global-game-jam' },
				},
				{
					label: 'Ludum Dare',
					autogenerate: { directory: 'ludum-dare' },
				},
				{
					label: 'React Jam',
					autogenerate: { directory: 'react-jam' },
				},
				{
					label: 'Ubisoft Australia',
					autogenerate: { directory: 'ubisoft-australia' },
				},
				{
					label: 'Game Maker\'s Toolkit Game Jam',
					autogenerate: { directory: 'gmtk-game-jam' },
				},
			],
		}),
	],
});
