<template>
  <div class="container">
    <wwEditorFormRow v-if="settings.publicData.globalAlias">
      <div
        v-for="(aliasTuple, index) in settings.publicData.globalAlias || []"
        :key="index"
      >
        <wwEditorFormRow class="alias-container">
          <p>{{ aliasTuple[0] || "N/D" }} -> {{ aliasTuple[1] || "N/D" }}</p>
        </wwEditorFormRow>
      </div>
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
