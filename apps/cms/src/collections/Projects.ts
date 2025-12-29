import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Used in URLs',
      },
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: {
        description: 'High-level problem + solution in 2–3 lines',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'architecture',
      type: 'group',
      label: 'Architecture & Decisions',
      fields: [
        {
          name: 'problem',
          type: 'textarea',
          required: true,
        },
        {
          name: 'solution',
          type: 'textarea',
          required: true,
        },
        {
          name: 'tradeoffs',
          type: 'textarea',
          admin: {
            description: 'What you consciously chose NOT to do',
          },
        },
      ],
    },
    {
      name: 'techStack',
      type: 'array',
      fields: [
        {
          name: 'technology',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'aiUsage',
      type: 'textarea',
      admin: {
        description: 'How AI was used responsibly (no gimmicks, no hype)',
      },
    },
    {
      name: 'productionNotes',
      type: 'textarea',
      admin: {
        description: 'Performance, accessibility, CI/CD, monitoring considerations',
      },
    },
  ],
}
