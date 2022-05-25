/* wwEditor:start */
// TODO
import "./components/PaletteEdit.vue";
import "./components/PaletteSummary.vue";
/* wwEditor:end */

export default {
  getColors() {
    // can't test in dev editor
    console.log(this.settings);
    const dark = wwLib.wwVariable.getValue(`${this.id}-dark`);
    return dark
      ? this.settings.publicData.colors.dark
      : this.settings.publicData.colors.light;
  },
  getTheme() {
    // can't test in dev editor
    console.log(this.settings);
    const dark = wwLib.wwVariable.getValue(`${this.id}-dark`);
    return dark;
  },
  toggleDarkTheme() {
    // can't test in dev editor
    const dark = wwLib.wwVariable.getValue(`${this.id}-dark`);
    const newDark = !dark;
    wwLib.wwVariable.updateValue(`${this.id}-dark`, newDark);
    return newDark;
  },
};
