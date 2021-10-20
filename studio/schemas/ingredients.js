export default {
  name: "ingredients",
  title: "Ingredient",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Ingredient Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "Notes",
      title: "Notes",
      type: "text",
    },
  ],
};
