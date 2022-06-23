<template>
  <div class="container">
    <wwEditorFormRow v-if="settings.publicData.globalAlias">
      <div
        v-for="(aliasTuple, index) in settings.publicData.globalAlias || []"
        :key="index"
      >
        <wwEditorFormRow class="alias-container">
          <wwEditorInputText
            type="text"
            placeholder="alias name"
            :model-value="aliasTuple[0]"
            @update:modelValue="(value) => setAlias(index, value)"
            class="alias-input"
          />
          <wwEditorInputTextSelect
            placeholder="color name"
            :options="options"
            :model-value="aliasTuple[1]"
            @update:modelValue="(value) => setName(index, value)"
          />
        </wwEditorFormRow>
      </div>
    </wwEditorFormRow>
    <wwEditorFormRow>
      <button
        type="button"
        class="ww-editor-button -small -primary ml-2 mt-3"
        @click="add"
      >
        add alias
      </button>
    </wwEditorFormRow>
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
    options() {
      return this.settings.publicData.selected.map((value) => {
        return { value, label: value };
      });
    },
  },
  emits: ["update:settings"],
  methods: {
    setAlias(index, value) {
      const globalAlias = this.settings.publicData.globalAlias || [];
      globalAlias[index][0] = value;
      const colors = createColorObject(
        this.settings.publicData.selected,
        globalAlias
      );
      this.$emit("update:settings", {
        ...this.settings,
        publicData: { ...this.settings.publicData, globalAlias, colors },
      });
    },
    setName(index, value) {
      const globalAlias = this.settings.publicData.globalAlias || [];
      globalAlias[index][1] = value;
      const colors = createColorObject(
        this.settings.publicData.selected,
        globalAlias
      );
      this.$emit("update:settings", {
        ...this.settings,
        publicData: { ...this.settings.publicData, globalAlias, colors },
      });
    },
    add() {
      const globalAlias = this.settings.publicData.globalAlias || [];
      globalAlias.push([]);
      this.$emit("update:settings", {
        ...this.settings,
        publicData: { ...this.settings.publicData, globalAlias },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}

.alias-container {
  flex-direction: row;
  justify-content: flex-start;
  & * {
    width: calc(100% - 10px / 2);
  }
}
.alias-input {
  margin-right: 10px;
}
</style>
