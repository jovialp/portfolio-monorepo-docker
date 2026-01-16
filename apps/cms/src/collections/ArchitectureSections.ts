import type { CollectionConfig } from 'payload'

export const ArchitectureSections: CollectionConfig = {
  slug: 'architecture-sections',
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
      name: 'order',
      type: 'number',
      required: true,
      admin: {
        description: 'Controls section order on the page',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Explain your thinking clearly. No buzzwords.',
      },
    },
  ],
}
