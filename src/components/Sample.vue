<template>
  <div class="sample-group">
    <div class="sample-container">
      <div
        class="sample"
        :style="{
          backgroundColor: getColor(color, scale),
        }"
      ></div>
    </div>
    <p>{{ color }}</p>
  </div>
</template>
<script>
import { isOverlay, getColor } from "../utils";
export default {
  props: {
    color: { type: String, required: true },
  },
  computed: {
    scale() {
      return isOverlay(this.color) ? 12 : 9;
    },
  },
  methods: {
    getColor,
  },
};
</script>

<style lang="scss" scoped>
.sample-group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 130px;
}
.sample-container {
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
}
.sample {
  width: 100%;
  height: 100%;
}
</style>
