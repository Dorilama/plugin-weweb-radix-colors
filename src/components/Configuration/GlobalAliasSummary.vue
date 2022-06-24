<template>
  <div>
    <p v-if="!globalAlias.length">No alias selected</p>
    <ul>
      <li v-for="({ alias, name }, index) in globalAlias" :key="index">
        {{ alias }} -> {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    settings: { type: Object, required: true },
    plugin: { type: Object, required: true },
  },
  computed: {
    globalAlias() {
      return (this.settings.publicData.globalAlias || []).filter(
        ({ alias, name }) => {
          return !!(alias && name);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
