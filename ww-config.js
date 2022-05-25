export default {
  editor: {
    settings: [
      {
        label: "Palette",
        edit: () => import("./src/components/PaletteEdit.vue"),
        summary: () => import("./src/components/PaletteSummary.vue"),
        getIsValid(settings) {
          const selected = settings.publicData.selected;
          return selected && selected.length;
        },
      },
      // {
      //   name: "Alias",
      //   edit: () => import("./src/components/AliasEdit.vue"),
      //   summary: () => import("./src/components/AliasSummary.vue"),
      //   getIsValid(settings) {
      //     // TODO
      //     return true;
      //   },
      // },
    ],
  },
  variables: [
    { name: "dark", value: "dark", type: "boolean", defaultValue: false },
  ],
  actions: [
    {
      name: "Set dark mode",
      code: "setDarkMode",
      isAsync: false,
      /* wwEditor:start */
      edit: () => import("./src/components/SetDarkMode.vue"),
      getIsValid({ dark }) {
        console.log("valid", dark);
        return typeof dark == "boolean";
      },
      /* wwEditor:end */
    },
    {
      name: "Toggle dark theme",
      code: "toggleDarkTheme",
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
