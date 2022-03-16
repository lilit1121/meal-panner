<template>
  <div class="plan_item">
    <div class="plan_item-title flex">
      <h3>{{ plan.title }}</h3>
    </div>
    <div class="plan_item-body">
      <div v-if="plan.fixed" class="fixed-item">
        <div class="fixed-item-img flex">
          <img src="~/assets/images/breast-feeding-1.png" alt="" />
          <img src="~/assets/images/breast-feeding-2.png" alt="" />
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
              <img
                v-if="item.img"
                :src="require(`~/assets/${item.img}`)"
                alt=""
              />
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

@media screen and (max-width: 982px) {
  .plan_item {
    flex-direction: column;
    .plan_item-title {
      width: 100%;
      border-radius: 0.6em 0.6em 0 0;
    }
    .plan_item-body {
      width: 100%;
      border-radius: 0 0 0.6em 0.6em;
    }
  }
  .choose,
  .change {
    margin-right: 1em !important;
  }
  .fixed-item-desc {
    h4 {
      font-size: 16px !important;
      line-height: 0.2;
    }
    p {
      font-size: 15px;
      line-height: 0.5;
    }
  }
}
@media screen and (max-width: 792px) {
  .fixed-item-desc {
    h4 {
      font-size: 13px !important;
      line-height: 0.15;
    }
    p {
      font-size: 13px;
      line-height: 0.4;
    }
  }
}

.plan_item {
  min-height: 10.625em;
  display: flex;
  &:hover,
  &:active {
    .plan_item-body {
      border-color: $button-blue;
    }
    .plan_item-title {
      background-color: $button-blue;
      border-color: $button-blue;
    }
    .dynamic-item + .dynamic-item {
      border-color: $button-blue;
    }
  }
  &-title {
    justify-content: center;
    h3 {
      text-align: center;
    }

    width: 14%;
    background: $pinkish-grey;
    color: $white;
    border-radius: 0.6em 0 0 0.6em;
    border: solid 2px $pinkish-grey;
  }
  &-body {
    border-radius: 0 0.6em 0.6em 0;
    border: solid 2px $pinkish-grey;
    width: 86%;
    overflow: hidden;

    .fixed-item,
    .dynamic-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10.625em;
      padding: 0;
      background: #fff;
      overflow: hidden;
      button {
        margin-right: 3.2em;
        width: 10em;
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
        // width: 30em;
        color: #333;

        h4 {
          font-weight: 600;
          font-size: 20px;
          line-height: 0.25;
          // letter-spacing: normal;
          font-family: inherit;
        }
        p {
          font-weight: normal;
          line-height: 0.625;
        }
      }
    }
    .fixed-item {
      justify-content: unset;
    }
    .change {
      background-color: $button-gray;
      cursor: pointer;
    }
    .choose {
      background-color: $button-blue;
      cursor: pointer;
    }
    img,
    .add-btn {
      width: 7.5em;
      height: 7.4em;
      margin-right: 1.6em;
      margin-left: 1.68em;
    }
    img + img {
      margin-left: 0;
      margin-right: 3.1em;
    }
    .dynamic-item + .dynamic-item {
      border-top: 2px solid $pinkish-grey;
    }
    .dynamic-item-action:hover {
      transform: translateX(-2.5em);
      transition: all 0.5s ease-in-out;
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
      .choose,
      .change {
        margin-right: 3.25em;
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
@media screen and (max-width: 736px) {
 
  .wrapper {
    width: 80vw;
  }
  .plan_item {
    margin-left: 1em !important;
    // margin: 0 auto;
    width: 80vw;
    &-body {
      .fixed-item {
        justify-content: center;
        flex-direction: column;
      }
      img,
      .add-btn {
        width: 5em;
        height: 5em;
      }
      .dynamic-item-action {
        align-self: flex-end;
        margin-bottom: 2em;
      }
      .dynamic-item-action:hover {
        transform: translateY(-0.8em);
        transition: all 0.4s ease-in-out;
      }
      .choose,
      .change {
        width: 6em !important;
        align-self: flex-end;

      }
    }
  }
}
</style>
