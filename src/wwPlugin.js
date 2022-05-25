/* wwEditor:start */
// TODO
import "./components/PaletteEdit.vue";
import "./components/PaletteSummary.vue";
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
    return this.setDarkMode(!dark);
  },
  setDarkMode(value) {
    // can't test in dev editor
    wwLib.wwVariable.updateValue(`${this.id}-dark`, value);
    return value;
  },
};
