export default {
  name: 'prodKit',
  type: 'document',
  title: 'ProductKitOne',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'script',
      type: 'string',
      title: 'Script',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
