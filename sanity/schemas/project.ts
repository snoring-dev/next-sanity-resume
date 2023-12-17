/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'display_name',
      type: 'string',
      title: 'Display Name (for Sanity studio)',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'show_title',
      type: 'boolean',
      title: 'Show title?',
    },
    {
      name: 'body',
      title: 'Experience Body',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'technical_stack',
      title: 'Technical Stack',
      type: 'array',
      of: [{type: 'text'}],
    },
  ],
  initialValue: {
    show_title: false,
  },
}
