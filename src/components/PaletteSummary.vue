<template>
  <div class="summary">
    <div v-for="group in groups.allGroups" :key="group.key" class="color-group">
      <h3>{{ group.label }}</h3>
      <div
        v-for="color in groups[group.key].filter((v) => selected.includes(v))"
        :key="color"
        class="color-switch"
      >
        <Sample :color="color" />
      </div>
    </div>
  </div>
</template>

<script>
import { groups } from "../utils";
import Sample from "./Sample.vue";

export default {
  components: { Sample },
  props: {
    settings: { type: Object, required: true },
  },
  data() {
    return { groups };
  },
  computed: {
    selected() {
      return this.settings.publicData.colors || [];
    },
  },
};
</script>

<style lang="scss" scoped>
.summary {
  display: flex;
  flex-direction: column;
}

.color-switch {
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 200px;
  margin-bottom: 10px;
}
</style>
