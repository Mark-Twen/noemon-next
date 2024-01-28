export default {
  name: 'prodKit',
  type: 'document',
  title: 'ProductKitOneJBL',
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
      name: "slug",
      title: "Slug",
      type: "slug"
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
