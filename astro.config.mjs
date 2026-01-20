// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Umbrella Handbook',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Meta & Deal Room',
					slug: 'meta',
				},
				{
					label: 'People',
					slug: 'people',
				},
				{
					label: 'Fundraising',
					slug: 'fundraising',
				},
				{
					label: 'Sales',
					slug: 'sales',
				},
				{
					label: 'Operations',
					slug: 'ops',
				},
				{
					label: 'Design & Brand',
					slug: 'brand',
				},
				{
					label: 'Engineering',
					slug: 'engineering',
				},
			],
		}),
	],
});
