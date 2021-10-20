export default {
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Recipe Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "chef",
      title: "chef",
      type: "reference",
      to: { type: "chef" },
    },
    {
      name: "mainImage",
      title: "Recipe Main",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "ingredient",
      title: "ingredient",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "ingredient",
              title: "Ingredient",
              type: "reference",
              to: [
                {
                  type: "ingredients",
                },
              ],
            },
            {
              name: "wholeNumber",
              title: "Whole number",
              type: "number",
            },
            {
              name: "fraction",
              title: "Fraction",
              type: "string",
              options: {
                list: ["1/2", "1/3", "1/4", "3/4", "2/3", "whole"],
              },
            },
            {
              name: "unit",
              title: "Unit",
              type: "string",
              options: {
                list: ["grams", "cup", "Tbsp.", "tsp.", "heavy-metal"],
              },
            },
          ],
          preview: {
            select: {
              title: "ingredient.name",
              name: "ingredient.name",
              media: "ingredient.image",
              wholeNumber: "wholeNumber",
              fraction: "fraction",
              unit: "unit",
            },
            prepare({
              title,
              subtitle,
              media,
              wholeNumber = "(No whole number set)",
              fraction = "(No fraction set)",
              unit = "(No unit set)",
            }) {
              return {
                title,
                subtitle: ` The recipe has${wholeNumber} ${fraction} ${unit}`,
                media,
              };
            },
          },
        },
      ],
    },
    {
      name: "instructions",
      title: "Instructions",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
