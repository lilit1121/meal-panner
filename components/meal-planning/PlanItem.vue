<template>
  <div class="plan_item">
    <div class="plan_item-title flex">
      <h3>{{ plan.title }}</h3>
    </div>
    <div class="plan_item-body">
      <div v-if="plan.fixed" class="fixed-item">
        <div class="fixed-item-img flex">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div class="fixed-item-desc">
          <h4>{{ plan.fixed.title }}</h4>
          <p>{{ plan.fixed.cups }}</p>
        </div>
      </div>
      <template v-if="plan.dynamic">
        <div
          v-for="(item, index) in plan.dynamic"
          :key="index"
          class="dynamic-item"
        >
          <div class="dynamic_content">
            <div class="dynamic-item-img">
              <img v-if="item.img" :src="item.img" alt="" />
              <div v-else class="add-btn">
                <div class="btn"><p>+</p></div>
              </div>
            </div>
            <div class="dynamic-item-desc">
              <h4 v-if="item.name">{{ item.name }}</h4>
              <h4 v-else>{{ item.title }}</h4>
              <p>{{ item.cups }}</p>
            </div>
          </div>

          <div class="dynamic-item-action">
            <button v-if="item.name" class="change" @click="openPopup(item)">
              Change
            </button>
            <button v-else class="choose" @click="openPopup(item)">
              Choose
            </button>
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
      this.$store.commit("setCurrentProduct", data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.plan_item {
  min-height: 10.625em;
  display: flex;
  &-title {
    justify-content: center;

    width: 12em;
    background: $pinkish-grey;
    color: $white;
    border-radius: 0.375em 0 0 0.375em;
  }
  &-body {
    border-radius: 0 0.6em 0.6em 0;
    border: solid 2px $pinkish-grey;
    width: 100%;
    overflow: hidden;

    .fixed-item,
    .dynamic-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10.625em;
      padding: 0 1.625em;
      background: #fff;
      overflow: hidden;
      button {
        margin-right: 3.5em;
        width: 9em;
        height: 2.2em;
        border-radius: 1.1em;
        border: none;
        text-align: center;

        font-family: inherit;
        font-size: 1em;
        letter-spacing: normal;
        line-height: 2;
        font-size: normal;
        font-stretch: normal;
        font-weight: normal;
        color: $white;
      }
      .fixed-item-desc {
        &-h4 {
          font-size: 24px;
          line-height: 12px;
        }
      }
    }
    .fixed-item {
      justify-content: unset;
    }
    .change {
      background-color: $button-gray;
    }
    .choose {
      background-color: $button-blue;
    }
    img,
    .add-btn {
      width: 7.5em;
      height: 7.5em;
      margin-right: 1.6em;
    }
    .dynamic-item + .dynamic-item {
      border-top: 2px solid $pinkish-grey;
    }
    .dynamic-item {
      .dynamic_content {
        display: flex;
        align-items: center;
      }
      &-img {
        .add-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f5f5f5;

          .btn {
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

.activeBorder {
  border: 2px solid $button-blue;
}
.activeBackground {
  background-color: $button-blue;
}
</style>
