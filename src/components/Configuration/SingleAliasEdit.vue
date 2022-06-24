<template>
  <div>
    <datalist id="selected-colors">
      <option v-for="color in selected" :key="color" :value="color"></option>
    </datalist>
    <wwEditorInputRow
      label=""
      type="array"
      :model-value="singleAlias"
      @update:modelValue="setSingleAlias"
      @add-item="setSingleAlias([...(singleAlias || []), {}])"
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
          :model-value="item.light"
          type="query"
          small
          placeholder="light color"
          @update:model-value="setItem({ ...item, light: $event })"
          list="selected-colors"
        />
        <wwEditorInputRow
          :model-value="item.dark"
          type="query"
          small
          placeholder="dark color"
          @update:model-value="setItem({ ...item, dark: $event })"
          list="selected-colors"
        />
      </template>
    </wwEditorInputRow>
  </div>
</template>

<script>
import { createColorObject } from "../../utils";

export default {
  props: {
    settings: { type: Object, required: true },
    plugin: { type: Object, required: true },
  },
  computed: {
    globalAlias() {
      return this.settings.publicData.globalAlias || [];
    },
    singleAlias() {
      return this.settings.publicData.singleAlias || [];
    },
    selected() {
      const globalAlias = this.settings.publicData.globalAlias || [];
      return this.settings.publicData.selected.concat(
        globalAlias.map(({ alias, name }) => {
          if (alias && name) {
            return alias;
          }
        })
      );
    },
  },
  emits: ["update:settings"],
  methods: {
    setSingleAlias(singleAlias) {
      const colors = createColorObject(
        this.settings.publicData.selected,
        this.settings.publicData.globalAlias,
        singleAlias
      );
      this.$emit("update:settings", {
        ...this.settings,
        publicData: { ...this.settings.publicData, singleAlias, colors },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
