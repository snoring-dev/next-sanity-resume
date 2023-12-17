/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'keyValue',
        },
      ],
    },
  ],
}
