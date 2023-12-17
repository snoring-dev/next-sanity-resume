/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'personalData',
  type: 'document',
  title: 'Personal Data',
  fields: [
    {
      name: 'full_name',
      type: 'string',
      title: 'Fullname',
    },
    {
      name: 'job_title',
      type: 'string',
      title: 'Job title',
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone number',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'picture_url',
      type: 'string',
      title: 'Picture URL',
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        {
          type: 'link',
        },
      ],
    },
  ],
}
