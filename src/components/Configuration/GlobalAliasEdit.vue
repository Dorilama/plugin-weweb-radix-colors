<template>
  <wwEditorInputRow
    label=""
    type="array"
    :model-value="globalAlias"
    @update:modelValue="setGlobalAlias"
    @add-item="setGlobalAlias([...(globalAlias || []), {}])"
  >
    <template #default="{ item, setItem }">
      <wwEditorInputRow
        :model-value="item.alias"
        type="query"
        small
        placeholder="alias name"
        @update:model-value="setItem({ ...item, alias: $event })"
      />
      <wwEditorInputRow
        :model-value="item.name"
        type="select"
        :options="options"
        small
        placeholder="color name"
        @update:model-value="setItem({ ...item, name: $event })"
      />
    </template>
  </wwEditorInputRow>
</template>

<script>
import { createColorObject } from "../../utils";

export default {
  props: {
    settings: { type: Object, required: true },
    plugin: { type: Object, required: true },
  },
  computed: {
    options() {
      return this.settings.publicData.selected.map((value) => {
        return { value, label: value };
      });
    },
    globalAlias() {
      return this.settings.publicData.globalAlias || [];
    },
  },
  emits: ["update:settings"],
  methods: {
    setGlobalAlias(globalAlias) {
      const colors = createColorObject(
        this.settings.publicData.selected,
        globalAlias
      );
      this.$emit("update:settings", {
        ...this.settings,
        publicData: { ...this.settings.publicData, globalAlias, colors },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
