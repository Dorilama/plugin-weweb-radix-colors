<template>
  <div class="settings">
    <a
      href="https://www.radix-ui.com/docs/colors/palette-composition/composing-a-palette"
      target="_blank"
      >Check Radix Colors documentation
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>
    <wwEditorFormRow>
      <div v-for="group in groups.allGroups" :key="group.key">
        <div class="group-label">
          <h3 :class="{ 'with-tip': group.tip }">{{ group.label }}</h3>
          <p v-if="group.tip" class="tip">{{ group.tip }}</p>
        </div>

        <div
          v-for="color in groups[group.key]"
          :key="color"
          class="color-switch"
        >
          <Sample :color="color" />
          <wwEditorInputSwitch v-model="selected[color]" />
          <p v-if="tips[color]" class="tip tip-right">{{ tips[color] }}</p>
        </div>
      </div>
    </wwEditorFormRow>
  </div>
</template>
<script>
import {
  groups,
  selectedArrToObj,
  selectedObjToArr,
  createColorObject,
} from "../../utils";
import Sample from "./Sample.vue";

export default {
  components: { Sample },
  props: {
    settings: { type: Object, required: true },
  },
  emits: ["update:settings"],
  data() {
    const selected = selectedArrToObj(this.settings.publicData.selected || []);
    return {
      groups,
      selected,
    };
  },
  computed: {
    tips() {
      const value = Object.entries(groups.tips).reduce((acc, [key, fn]) => {
        acc[key] = fn(this.settings.publicData.selected);
        return acc;
      }, {});
      return value;
    },
  },
  watch: {
    selected: {
      handler(value) {
        const newSelected = selectedObjToArr(value);
        const newColors = createColorObject(newSelected);
        this.$emit("update:settings", {
          ...this.settings,
          publicData: {
            ...this.settings.publicData,
            selected: newSelected,
            colors: newColors,
          },
        });
      },
      deep: true,
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
}
a {
  color: #3e63dd;
  &:hover {
    color: #3451b2;
  }
}
.group-label {
  display: flex;
  flex-direction: column;
  & .with-tip {
    margin-bottom: 0;
  }
  & p {
    margin-bottom: 20px;
  }
}
.tip {
  font-size: 13px;
}

.tip-right {
  margin-left: auto;
  text-align: right;
  max-width: 55%;
}
.color-switch {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
</style>
