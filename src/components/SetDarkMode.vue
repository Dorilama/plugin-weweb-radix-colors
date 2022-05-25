<template>
  <div class="settings">
    <wwEditorFormRow>
      <wwEditorInputRow
        label="dark mode"
        required
        type="boolean"
        :model-value="dark"
        bindable
      />
    </wwEditorFormRow>
  </div>
</template>
<script>
export default {
  props: {
    plugin: { type: Object, required: true },
    args: {
      type: Object,
      default: { dark: true },
    },
  },
  emits: ["update:args"],
  data() {
    console.log(this.args);
    return {
      dark: this.args,
    };
  },
  watch: {
    dark: {
      handler(dark) {
        console.log("watch", dark);
        this.$emit("update:args", { ...this.args, dark });
      },
      immediate: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
}
</style>
