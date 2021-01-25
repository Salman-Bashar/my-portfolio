// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "sourceCode",
      type: "url",
    },
    {
      name: "description",
      type: "text",
    },
  ],
}
