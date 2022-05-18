<template>
  <div class="settings">
    <wwEditorFormRow required label="TODO">
      <wwEditorInputText
        type="text"
        name="todo"
        placeholder="todo"
        :model-value="settings.privateData.todo"
        :style="{ '-webkit-text-security': isKeyVisible ? 'none' : 'disc' }"
        large
        @update:modelValue="methodTodo"
      />
    </wwEditorFormRow>
  </div>
</template>
<script>
export default {
  props: {
    settings: { type: Object, required: true },
  },
  emits: ["update:settings"],
  data() {
    return {};
  },
  methods: {
    methodTodo(todo) {
      this.$emit("update:settings", {
        ...this.settings,
        privateData: { todo },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  &__link {
    color: var(--ww-color-blue-500);
    margin-left: var(--ww-spacing-02);
  }
  &__row {
    display: flex;
    align-items: center;
  }
  &__radio-label {
    margin-left: var(--ww-spacing-02);
  }
}
</style>
