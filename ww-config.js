export default {
  editor: {
    settings: [
      {
        label: "Palette",
        edit: () => import("./src/components/PaletteEdit.vue"),
        summary: () => import("./src/components/PaletteSummary.vue"),
        getIsValid(settings) {
          const colors = settings.publicData.colors;
          return colors && colors.length;
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
  // actions: [
  //   {
  //     name: "Set dark theme",
  //     code: "setDarkTheme",
  //     isAsync: false,
  //     /* wwEditor:start */
  //     edit: () => import("./src/components/SetDarkTheme.vue"),
  //     getIsValid(settings) {
  //       // TODO
  //       return true;
  //     },
  //     /* wwEditor:end */
  //   },
  //   {
  //     name: "Toggle dark theme",
  //     code: "toggleDarkTheme",
  //     isAsync: false,
  //   },
  //   {
  //     name: "Set alias",
  //     code: "setAlias",
  //     isAsync: false,
  //     /* wwEditor:start */
  //     edit: () => import("./src/components/SetAlias.vue"),
  //     getIsValid(settings) {
  //       // TODO
  //       return true;
  //     },
  //     /* wwEditor:end */
  //   },
  // ],
  // formulas: [
  //   {
  //     name: "getColor",
  //     arrity: 0,
  //   },
  //   {
  //     name: "getTheme",
  //     arrity: 0,
  //   },
  // ],
};
