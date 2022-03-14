<template>
  <div class="planner-container">
    <plan-item
      v-for="plan in plans"
      :key="plan.id"
      :plan="plan"
      @togglePopup="togglePopup"
    />
    <plan-list-popup v-if="popup" @togglePopup="togglePopup" />
  </div>
</template>

<script>
import PlanListPopup from "./Plan-list-popup.vue";
import PlanItem from "./Plan-item.vue";
export default {
  components: { PlanItem, PlanListPopup },
  name: "PlannerContainer",
  data() {
    return {
      popup: false,
      plans: [
        {
          id: 1,
          title: "1st Feeding",
          fixed: {
            id: 1,
            img: [],
            title: "1st Breast Milk or Formula Feeding",
            cups: "6 ounces",
          },
          dynamic: false,
        },
        {
          id: 2,
          title: "Breakfast",
          fixed: false,
          dynamic: [
            {
              id: 1,
              img: "",
              name: "",
              title: "Fruit or Vegetable",
              cups: "¼ cup, cut up",
            },
            {
              id: 2,
              img: "",
              name: "",
              title: "Fruit or Vegetable",
              cups: "¼ cup, cut up",
            },
          ],
        },
      ],
    };
  },
  methods: {
    togglePopup(bool) {
      this.popup = bool;
    },
  },
};
</script>

<style lang="scss" scoped>
.planner-container {
  background: #f5f5f5;
  width: 86.125em;
  max-width: 100%;
  margin: 0 auto;
  padding: 7.5em 6.75em 6.25em 6.5em;
}
</style>
