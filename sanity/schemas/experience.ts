/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'display_name',
      type: 'string',
      title: 'Display Name (for Sanity studio)',
    },
    {
      name: 'position_title',
      type: 'string',
      title: 'Position title',
    },
    {
      name: 'company_name',
      type: 'string',
      title: 'Company name',
    },
    {
      name: 'location_name',
      type: 'string',
      title: 'Location name',
    },
    {
      name: 'start_date',
      type: 'date',
      title: 'Start date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'end_date',
      type: 'date',
      title: 'End date',
    },
    {
      name: 'is_present',
      type: 'boolean',
      title: 'Are you still working here?',
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
    },
  ],
  initialValue: {
    is_present: false,
  },
}
