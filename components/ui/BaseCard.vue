<template>
  <div class="planner-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.planner-container {
  background: $light-gray;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
}
</style>
