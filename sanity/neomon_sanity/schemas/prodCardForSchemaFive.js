export default {
    name: 'prodCardFive',
    type: 'document',
    title: 'ProdCardFive-LedChip',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      },  
      {
        name: "script",
        type: "string",
        title: "String"
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