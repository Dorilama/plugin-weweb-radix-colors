export default {
  editor: {
    settings: {
      edit: () => import("./src/components/SettingsEdit.vue"),
      summary: () => import("./src/components/SettingsSummary.vue"),
      getIsValid(settings) {
        // TODO
        return true;
      },
    },
  },
  actions: [
    // TODO
    // template
    // {
    //   name: "Create a record",
    //   code: "createRecord",
    //   isAsync: true,
    //   /* wwEditor:start */
    //   edit: () => import("./src/components/RecordCreate.vue"),
    //   getIsValid({ collectionId, recordData }) {
    //     return !!collectionId && !!recordData;
    //   },
    //   /* wwEditor:end */
    // },
  ],
};
