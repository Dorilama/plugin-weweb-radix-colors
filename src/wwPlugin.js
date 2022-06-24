/* wwEditor:start */
import "./components/Configuration/PaletteEdit.vue";
import "./components/Configuration/PaletteSummary.vue";
import "./components/Configuration/GlobalAliasEdit.vue";
import "./components/Configuration/GlobalAliasSummary.vue";
import "./components/Configuration/SingleAliasEdit.vue";
import "./components/Configuration/SingleAliasSummary.vue";
import "./components/Functions/SetTheme.vue";
/* wwEditor:end */
import { allThemes, names } from "./constants";

export default {
  async onLoad() {
    this.setColors();
  },
  theme() {
    return wwLib.wwVariable.getValue(`${this.id}-${names.theme}`);
  },
  colors() {
    return wwLib.wwVariable.getValue(`${this.id}-${names.colors}`);
  },
  setColors() {
    let colors = {};
    if (this.settings.publicData.colors && this.theme()) {
      colors =
        this.theme() === allThemes.dark
          ? this.settings.publicData.colors.dark
          : this.settings.publicData.colors.light;
    }
    /* wwEditor:start */
    console.log("set colors", this.theme(), colors);
    /* wwEditor:end */
    wwLib.wwVariable.updateValue(`${this.id}-${names.colors}`, colors);
  },
  setTheme(theme) {
    /* wwEditor:start */
    console.log("set theme", theme);
    /* wwEditor:end */
    if (value !== allThemes.dark || value !== allThemes.light) {
      console.error("Theme must be light or dark");
      return;
    }
    wwLib.wwVariable.updateValue(`${this.id}-${names.theme}`, theme);
    return theme;
  },
  toggleTheme() {
    const newTheme =
      this.theme() === allThemes.dark ? allThemes.light : allThemes.dark;
    /* wwEditor:start */
    console.log(`toggle theme from ${this.theme()} to ${newTheme}`);
    /* wwEditor:end */
    wwLib.wwVariable.updateValue(`${this.id}-${names.theme}`, newTheme);
    return newTheme;
  },
};
