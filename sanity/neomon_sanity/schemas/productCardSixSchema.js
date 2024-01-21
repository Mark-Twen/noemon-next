export default {
    name: 'prodCardSix',
    type: 'document',
    title: 'ProdCardSix-Light Channels',
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