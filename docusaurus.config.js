const versions = require('./versions.json');

module.exports = {
	title: 'Fluid',
	tagline: 'Open Source, Collaborative Project',
	url: 'https://your-docusaurus-test-site.com',
	baseUrl: '/',
	favicon: 'img/fluid-logo-black.svg',
	organizationName: 'GermaVinsmoke', // Usually your GitHub org/user name.
	projectName: 'fluid-project', // Usually your repo name.
	customFields: {
		description:
			'Fluid is an open, collaborative project to improve the user experience and inclusiveness of open source software.',
	},
	themeConfig: {
		prism: {
			theme: require('prism-react-renderer/themes/github'),
			darkTheme: require('prism-react-renderer/themes/dracula'),
		},
		navbar: {
			title: '',
			logo: {
				alt: 'Fluid',
				src: 'img/fluid-logo-white.svg',
			},
			links: [
				{
					to: 'versions',
					label: `${versions[0]}`,
					position: 'left',
					style: {
						whiteSpace: 'nowrap',
						padding: '0.25rem 0.5rem 0.2rem 0.25rem',
						fontSize: 'calc(0.9 * var(--ifm-font-size-base))',
						textDecoration: 'underline',
					},
				},
				{
					to: 'docs/wc-1',
					label: 'Docs',
					position: 'left',
				},
				{
					to: 'docs/mdx',
					label: 'API',
					position: 'left',
				},
				{ to: 'blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right',
				},
			],
			hideOnScroll: true,
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Style Guide',
							to: 'docs/doc1',
						},
						{
							label: 'Second Doc',
							to: 'docs/doc2',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus',
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus',
						},
					],
				},
				{
					title: 'Social',
					items: [
						{
							label: 'Blog',
							to: 'blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					path: 'docs',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/',
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
				blog: {
					path: './blog',
					postsPerPage: 3,
					feedOptions: {
						type: 'all',
						copyright: `Copyright © ${new Date().getFullYear()} Fluid`,
					},
				},
			},
		],
	],
};
