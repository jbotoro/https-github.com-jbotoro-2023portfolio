import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'pageInfo',
	title: 'PageInfo',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'role',
			title: 'Role',
			type: 'string',
		}),
		defineField({
			name: 'heroImage',
			title: 'HeroImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'backgroundInfo',
			title: 'BackgroundInfo',
			type: 'string',
		}),
		defineField({
			name: 'primaryTechnologies',
			title: 'PrimaryTechnologies',
			type: 'string',
		}),
		defineField({
			name: 'databaseAndStorage',
			title: 'DatabaseAndStorage',
			type: 'string',
		}),
		defineField({
			name: 'frameworksAndLibraries',
			title: 'FrameworksAndLibraries',
			type: 'string',
		}),
		defineField({
			name: 'others',
			title: 'Others',
			type: 'string',
		}),
		defineField({
			name: 'profilePic',
			title: 'ProfilePic',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'phoneNumber',
			title: 'PhoneNumber',
			type: 'string',
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
		}),
		defineField({
			name: 'address',
			title: 'Address',
			type: 'string',
		}),
		defineField({
			name: 'social',
			title: 'Social',
			type: 'reference',
			to: { type: 'social' },
		}),
	],
})
