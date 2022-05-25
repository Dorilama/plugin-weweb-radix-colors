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
      type: Boolean,
      default: true,
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
      handler(value) {
        this.$emit("update:args", value);
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
