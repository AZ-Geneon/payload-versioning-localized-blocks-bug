import type { CollectionConfig } from 'payload'


export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true
    },
    {
      name: 'content',
      type: 'blocks',
      localized: true,
      blocks: [
        {
          slug: 'richTextContent',
          fields: [
            {
              name: 'textContent',
              type: 'richText',
            },
          ],
        }
      ]
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
