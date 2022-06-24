<template>
  <div class="settings">
    <wwEditorFormRow>
      <wwEditorInputTextSelect
        :options="options"
        :model-value="theme"
        placeholder="Select a collection"
        @update:modelValue="setTheme"
        bindable
      />
    </wwEditorFormRow>
  </div>
</template>
<script>
import { allThemes } from "../../constants";
export default {
  props: {
    plugin: { type: Object, required: true },
    args: {
      type: Object,
      default: () => ({ dark: true }),
    },
  },
  emits: ["update:args"],
  data() {
    const options = Object.values(allThemes).map((value) => {
      return { value, label: value };
    });
    return { options };
  },
  computed: {
    theme() {
      return this.args.theme;
    },
  },
  methods: {
    setTheme(theme) {
      this.$emit("update:args", { ...this.args, theme });
    },
  },
};
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
}
</style>
