<template>
  <div class="wrapper">
    <PlannerContainer />
  </div>
</template>

<script>
import PlannerContainer from "~/components/meal-planning/PlannerContainer.vue";
export default {
  components: { PlannerContainer },
  name: "IndexPage",
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.wrapper {
  width: 100%;
  height: 124em;
  margin: 0;
  padding: 0;
  background-color: $light-gray;
}
</style>
