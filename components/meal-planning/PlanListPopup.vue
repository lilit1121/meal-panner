<template>
  <div class="popup">
    <div class="carousel-container">
      <h2>Fruit Purees</h2>
      <div class="close" @click="$emit('togglePopup', false)">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5L4.5 13.5"
            stroke="#47505B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 4.5L13.5 13.5"
            stroke="#47505B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <client-only>
        <slick v-bind="settings">
          <div
            class="product"
            v-for="product in products"
            :key="product.id"
            @click="setData(product)"
          >
            <img :src="product.image" alt="Product" />
            <p>{{ product.name }}</p>
          </div>
        </slick>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      settings: {
        arrows: false,
        slidesToShow: 5,
        centerMode: true,
      },
      products: [
        {
          id: 1,
          name: "Banana",
          image: "images/banana.jpg",
        },
        {
          id: 2,
          name: "Mango",
          image: "images/mango.jpg",
        },
        {
          id: 3,
          name: "Papaya",
          image: "images/papaya.jpg",
        },
        {
          id: 4,
          name: "Pear",
          image: "images/pear.jpg",
        },
        {
          id: 5,
          name: "Blueberries",
          image: "images/blueberries.jpg",
        },
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
.popup {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: rgba($color: #000000, $alpha: 0.1);
}
.carousel-container {
  background: $pinkish-grey;
  width: 80%;
  margin: 200px auto;
  position: relative;
  overflow: hidden;
  padding-bottom: 40px;
  h2 {
    text-align: center;
    padding: 10px 0;
  }
  .close {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
  .product + .product {
    margin-left: 2em;
  }
  .product {
    background: #fff;
    cursor: pointer;
    img {
      width: 100%;
      background: lightgray;
    }
    p {
      text-align: center;
    }
  }
}
</style>
