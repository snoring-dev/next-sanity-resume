/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'academicPath',
  title: 'Academic Path',
  type: 'document',
  fields: [
    {
      name: 'degree_title',
      type: 'string',
      title: 'Degree title',
    },
    {
      name: 'college_name',
      type: 'string',
      title: 'College name',
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
      name: 'body',
      title: 'Experience Body',
      type: 'array',
      of: [{type: 'block'}],
    }
  ],
  initialValue: {
    is_present: false,
  },
}