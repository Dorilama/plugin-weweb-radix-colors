/* wwEditor:start */
import "./components/PaletteEdit.vue";
import "./components/PaletteSummary.vue";
import "./components/SetDarkTheme.vue";
/* wwEditor:end */

export default {
  getColors() {
    // can't test in dev editor
    const dark = wwLib.wwVariable.getValue(`${this.id}-dark`);
    return dark
      ? this.settings.publicData.colors.dark
      : this.settings.publicData.colors.light;
  },
  getTheme() {
    // can't test in dev editor
    const dark = wwLib.wwVariable.getValue(`${this.id}-dark`);
    return dark;
  },
  toggleDarkTheme() {
    // can't test in dev editor
    const dark = wwLib.wwVariable.getValue(`${this.id}-dark`);
    return this.setDarkTheme({ dark: !dark });
  },
  setDarkTheme({ dark }) {
    // can't test in dev editor
    wwLib.wwVariable.updateValue(`${this.id}-dark`, dark);
    return dark;
  },
};
