<template>
  <base-card>
    <PlanItem
      v-for="plan in plans"
      :key="plan.id"
      :plan="plan"
      @togglePopup="togglePopup"
    />
    <PlanListPopup v-if="popup" @togglePopup="togglePopup" />
  </base-card>
</template>

<script>
import PlanListPopup from "./PlanListPopup.vue";
import PlanItem from "./PlanItem.vue";
import BaseCard from "../ui/BaseCard.vue";

export default {
  components: { PlanItem, PlanListPopup, BaseCard },
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
        {
          id: 3,
          title: "2nd Feeding",
          fixed: {
            id: 1,
            img: [],
            title: "2nd Breast Milk or Formula Feeding",
            cups: "6 ounces",
          },
          dynamic: false,
        },
        {
          id: 4,
          title: "Afternoon Snack",
          fixed: false,
          dynamic: [
            {
              id: 1,
              img: "",
              name: "",
              title: "Fruit or Vegetable",
              cups: "¼ cup, cut up",
            },
          ],
        },
        {
          id: 5,
          title: "Evening Snack",
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
              title: "Cup of Water",
              cups: "2 ounces",
            },
          ],
        },
        {
          id: 6,
          title: "3rd Feeding",
          fixed: {
            id: 1,
            img: [],
            title: "3rd Breast Milk or Formula Feeding",
            cups: "6 ounces",
          },
          dynamic: false,
        },
        {
          id: 7,
          title: "4th Feeding",
          fixed: {
            id: 1,
            img: [],
            title: "4th Breast Milk or Formula Feeding",
            cups: "6 ounces",
          },
          dynamic: false,
        },
        {
          id: 8,
          title: "5th Feeding",
          fixed: {
            id: 1,
            img: [],
            title: "5th Breast Milk or Formula Feeding",
            cups: "6 ounces",
          },
          dynamic: false,
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
.plan_item {
  margin: 0 3rem 2em 3em;
}
.planner-container {
  padding-top: 2em;
}
</style>
