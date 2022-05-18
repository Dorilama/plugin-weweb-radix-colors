<template>
  <div class="summary">
    <wwEditorIcon large name="todo" />
    <span class="caption-m">{{ todo }}</span>
  </div>
</template>

<script>
export default {
  props: {
    settings: { type: Object, required: true },
  },
  computed: {
    todo() {
      const todo = this.settings.privateData.todo || "";
      return todo;
    },
  },
};
</script>

<style lang="scss" scoped>
.summary {
  display: flex;
  align-items: baseline;
  &__icon {
    margin-right: var(--ww-spacing-02);
  }
}
</style>
