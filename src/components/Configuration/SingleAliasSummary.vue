<template>
  <div class="container">
    <wwEditorFormRow
      class="alias-container"
      v-for="([alias, light, dark], index) in settings.publicData.singleAlias ||
      []"
      :key="index"
    >
      <p>{{ alias }} -> light: {{ light }}, dark: {{ dark }}</p>
    </wwEditorFormRow>
  </div>
</template>

<script>
export default {
  props: {
    settings: { type: Object, required: true },
    plugin: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
