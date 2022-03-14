<template>
  <div class="plan_item">
    <div class="plan_item-title">
      <h3>{{ plan.title }}</h3>
    </div>
    <div class="plan_item-body">
      <div v-if="plan.fixed" class="fixed-item">
        <div class="fixed-item-img flex">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div class="fixed-item-desc">
          <h4>1st Breast Milk or Formula Feeding</h4>
          <p>6 ounces</p>
        </div>
      </div>
      <template v-if="plan.dynamic">
        <div
          v-for="(item, index) in plan.dynamic"
          :key="index"
          class="dyinamic-item"
        >
          <div class="dyinamic-item-img">
            <img v-if="item.img" :src="item.img" alt="" />
            <div v-else class="add-btn">
              <button><p>+</p></button>
            </div>
          </div>
          <div class="dynamic-item-desc">
            <h4>{{ item.title }}</h4>
            <p>{{ item.cups }}</p>
          </div>
          <div class="dynamic-item-action">
            <button v-if="item.name" class="choose" @click="openPopup(item)">Change</button>
            <button v-else class="choose" @click="openPopup(item)">Choose</button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plan: {
      default: () => {},
    },
  },
  data() {
    return {
      popup: false,
    };
  },
  methods: {
    openPopup(data) {
      this.$emit("togglePopup", true);
      this.$store.commit('setCurrentProduct', data)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.plan_item + .plan_item {
  margin-top: 1.875em;
}

.plan_item {
  width: 100%;
  min-height: 10.625em;
  display: flex;
  &-title {
    background: $pinkish-grey;
    color: #fff;
    border-radius: 0.375em 0 0 0.375em;
  }
  &-body {
    border-radius: 0 0.4em 0.4em 0;
    border: solid 2px $pinkish-grey;
    width: 100%;
    overflow: hidden;
    .fixed-item,
    .dyinamic-item {
      display: flex;
      align-items: center;
      height: 10.625em;
      padding: 0 1.625em;
      background: #fff;
      overflow: hidden;
    }
    img,
    .add-btn {
      width: 7.5em;
      height: 7.5em;
    }
    .dyinamic-item {
      &-img {
        .add-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f5f5f5;

          button {
            width: 3.125em;
            height: 3.125em;
            background-color: #1fa2ce;
            color: #fff;
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            p {
              font-size: 4em;
              margin: 0;
              padding: 0;
            }
          }
        }
      }
    }
  }
}
</style>
