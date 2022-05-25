<template>
  <div class="settings">
    <wwEditorFormRow>
      <wwEditorInputRow
        label="dark theme"
        required
        type="boolean"
        :model-value="dark"
        bindable
        @update:modelValue="setDark"
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
      default: () => ({ dark: true }),
    },
  },
  emits: ["update:args"],
  data() {},
  computed: {
    dark() {
      return this.args.dark;
    },
  },
  methods: {
    setDark(dark) {
      this.$emit("update:args", { ...this.args, dark });
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
