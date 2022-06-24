import { names } from "./src/constants";

export default {
  editor: {
    settings: [
      {
        label: "Palette",
        edit: () => import("./src/components/Configuration/PaletteEdit.vue"),
        summary: () =>
          import("./src/components/Configuration/PaletteSummary.vue"),
        getIsValid(settings) {
          const selected = settings.publicData.selected;
          return selected && selected.length;
        },
      },
      {
        label: "Global Alias",
        edit: () =>
          import("./src/components/Configuration/GlobalAliasEdit.vue"),
        summary: () =>
          import("./src/components/Configuration/GlobalAliasSummary.vue"),
        getIsValid(settings) {
          return true;
        },
      },
      {
        label: "Single Alias",
        edit: () =>
          import("./src/components/Configuration/SingleAliasEdit.vue"),
        summary: () =>
          import("./src/components/Configuration/SingleAliasSummary.vue"),
        getIsValid(settings) {
          return true;
        },
      },
    ],
  },
  variables: [
    { name: names.theme, value: names.theme, type: "string", defaultValue: "" },
    {
      name: names.colors,
      value: names.colors,
      type: "object",
      defaultValue: {},
    },
  ],
  actions: [
    {
      name: "Set theme",
      code: "setTheme",
      isAsync: false,
      /* wwEditor:start */
      edit: () => import("./src/components/Functions/SetTheme.vue"),
      getIsValid() {
        return true;
      },
      /* wwEditor:end */
    },
    {
      name: "Toggle theme",
      code: "toggleTheme",
      isAsync: false,
    },
    // {
    //   name: "Set alias",
    //   code: "setAlias",
    //   isAsync: false,
    //   /* wwEditor:start */
    //   edit: () => import("./src/components/SetAlias.vue"),
    //   getIsValid(settings) {
    //     // TODO
    //     return true;
    //   },
    //   /* wwEditor:end */
    // },
  ],
  formulas: [
    {
      name: "getColors",
      arrity: 0,
    },
    {
      name: "getTheme",
      arrity: 0,
    },
  ],
};
