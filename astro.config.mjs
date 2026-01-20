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
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon.ico', sizes: '48x48' } },
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' } },
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' } },
				{ tag: 'link', attrs: { rel: 'icon', href: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
				{ tag: 'link', attrs: { rel: 'manifest', href: '/site.webmanifest' } },
			],
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
