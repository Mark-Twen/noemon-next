export default {
    name: 'perlisten',
    type: 'document',
    title: 'Perlisten',
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