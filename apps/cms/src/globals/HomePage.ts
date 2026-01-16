import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'techstack',
          type: 'array',
          label: 'Tech Stack',
          fields: [
            {
              name: 'name',
              type: 'text',
            },
          ],
        },
        {
          name: 'headline1',
          type: 'text',
          label: 'Headline 1',
        },
        {
          name: 'headline2',
          type: 'text',
          label: 'Headline 2',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'callToAction',
          type: 'group',
          label: 'Call to Action',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'href',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
