import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Title of the project',
            type: 'string',
        }),
        defineField({
            name:  'image',
            title: 'Image',
            type:  'image',
            options: {
                hotspot: true,
            }
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'string',
        }),
        defineField({
            name: 'points',
			title: 'Points',
			type: 'array',
			of: [{ type: 'string' }],
        }),
        defineField({
            name: 'technologiesUsed',
            title: 'TechnologiesUsed',
            type: 'array',
            of: [{type: 'reference', to: {type: 'skill'}}],
        }),
        defineField({
            name: 'linkToProject',
            title: 'LinkToProject',
            type: 'url',
        })
    ],
})
