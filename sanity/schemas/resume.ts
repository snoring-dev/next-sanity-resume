/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "resume",
  type: "document",
  title: "Resume",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "lang",
      type: "string",
      title: "Language",
    },
    {
      title: "Channel",
      name: "channel",
      type: "string",
      initialValue: "web",
      options: {
        list: [
          { title: "Web", value: "web" },
          { title: "PDF", value: "pdf" },
          { title: "Both (Web & PDF)", value: "both" },
        ],
      },
    },
    {
      title: "Personal Data",
      name: "personal_data",
      type: "reference",
      to: [{ type: "personalData" }],
    },
    {
      title: "Experiences",
      name: "experiences",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "experience" }],
        },
      ],
    },
    {
      title: "Academic Path",
      name: "academic_path",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "academicPath" }],
        },
      ],
    },
    {
      title: "Skills",
      name: "skills",
      type: "reference",
      to: [{ type: "skill" }],
    },
    {
      title: "Languages",
      name: "languages",
      type: "reference",
      to: [{ type: "language" }],
    },
  ],
};
