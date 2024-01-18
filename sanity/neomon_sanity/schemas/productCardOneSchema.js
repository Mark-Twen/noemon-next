export default {
    name: 'jbl',
    type: 'document',
    title: 'JBL',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
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