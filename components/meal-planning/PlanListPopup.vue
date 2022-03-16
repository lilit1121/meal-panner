<template>
  <div class="popup">
    <div class="carousel-container">
      <h2>Fruit Purees</h2>
      <div class="close" @click="$emit('togglePopup', false)">
        <svg
          width="25"
          height="25"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="close-btn"
            d="M13.5 4.5L4.5 13.5"
            stroke="#1fa2ce"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            class="close-btn"
            d="M4.5 4.5L13.5 13.5"
            stroke="#1fa2ce"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <slick v-bind="settings">
        <div
          class="product"
          v-for="product in products"
          :key="product.id"
          @click="setData(product)"
        >
          <img :src="require(`~/assets/${product.image}`)" alt="Product" />
          <p>{{ product.name }}</p>
        </div>
      </slick>
      <img src="~/assets/images/arrow-prev.png" class="arrow-prev" alt="" />
      <img src="~/assets/images/arrow-next.png" class="arrow-next" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        slidesToShow: 4,
        centerMode: true,
      },
      products: [
        {
          id: 1,
          name: "Banana",
          image: "images/banana.png",
        },
        {
          id: 2,
          name: "Mango",
          image: "images/mango.png",
        },
        {
          id: 3,
          name: "Papaya",
          image: "images/papaya.png",
        },
        {
          id: 4,
          name: "Pear",
          image: "images/pear.png",
        },
        // {
        //   id: 5,
        //   name: "Blueberries",
        //   image: "images/pear.png",
        // },
      ],
    };
  },
  methods: {
    setData(data) {
      this.$store.commit("setData", data);
      this.$emit("togglePopup", false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

@media screen and (max-width: 982px) {
  .carousel-container {
    margin: 100px -15em !important;
  }
}

.popup {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba($black, $alpha: 0.55);
}

.carousel-container {
  background: $background-carousel;
  width: 80em;
  height: 31em;
  margin: 100px auto;
  position: relative;
  overflow: hidden;
  padding-bottom: 40px;
  h2 {
    margin-bottom: 1.2em;
    font-size: 28px;
    text-align: center;
    padding: 10px 0;
    font-weight: bold;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }

  .product {
    background: #fff;
    border-radius: 5px;
    &:hover,
    &:active {
      box-shadow: 0 3px 25.9px 4.1px rgba(0, 0, 0, 0.29);
    }
    cursor: pointer;
    img {
      width: 100%;
      background: lightgray;
    }
    p {
      font-size: 18px;
      text-align: center;
      font-weight: 600;
    }
  }
}
.arrow-prev,
.arrow-next {
  width: 3.1em;
  height: 3.1em;
  cursor: pointer;

  position: absolute;
  top: 15em;
  border-radius: 50%;
}
.arrow-prev {
  left: 2.5%;
}
.arrow-next {
  left: 94%;
}
</style>
