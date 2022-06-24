<template>
  <div class="container">
    <datalist id="selected-colors">
      <option v-for="color in selected" :key="color" :value="color"></option>
    </datalist>

    <wwEditorFormRow
      class="alias-container"
      v-for="([alias, light, dark], index) in settings.publicData.singleAlias ||
      []"
      :key="index"
    >
      <wwEditorInputText
        type="text"
        placeholder="alias name"
        :model-value="alias"
        @update:modelValue="(value) => setAlias(index, value)"
        class="alias-input"
      />
      <wwEditorInputText
        label="light"
        type="text"
        placeholder="light"
        :model-value="light"
        @update:modelValue="(value) => setLight(index, value)"
        list="selected-colors"
        class="alias-input"
      />
      <wwEditorInputText
        type="text"
        placeholder="dark"
        :model-value="dark"
        @update:modelValue="(value) => setDark(index, value)"
        list="selected-colors"
      />
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
    selected() {
      return this.settings.publicData.selected.concat(
        this.settings.publicData.globalAlias.map(([alias, name]) => {
          if (alias && name) {
            return alias;
          }
        })
      );
    },
  },
  emits: ["update:settings"],
  methods: {
    setAlias(index, value) {
      const singleAlias = this.settings.publicData.singleAlias || [];
      singleAlias[index][0] = value;
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
    setDark(index, value) {
      const singleAlias = this.settings.publicData.singleAlias || [];
      singleAlias[index][2] = value;
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
    setLight(index, value) {
      const singleAlias = this.settings.publicData.singleAlias || [];
      singleAlias[index][1] = value;
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
    add() {
      const singleAlias = this.settings.publicData.singleAlias || [];
      singleAlias.push([]);
      console.log(this.settings.publicData.colors);
      this.$emit("update:settings", {
        ...this.settings,
        publicData: { ...this.settings.publicData, singleAlias },
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
    width: calc(100% - 20px / 3);
  }
}
.alias-input {
  margin-right: 10px;
}
</style>
