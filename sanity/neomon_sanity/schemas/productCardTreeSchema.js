export default {
    name: 'prodcardthree',
    type: 'document',
    title: 'ProdCardThree',
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