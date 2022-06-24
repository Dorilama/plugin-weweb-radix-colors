<template>
  <div>
    <p v-if="!singleAlias.length">No alias selected</p>
    <ul>
      <li v-for="({ alias, light, dark }, index) in singleAlias" :key="index">
        {{ alias }} -> light: {{ light }} - dark: {{ dark }}
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
    singleAlias() {
      return (this.settings.publicData.singleAlias || []).filter(
        ({ alias, light, dark }) => {
          return !!(alias && light && dark);
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
