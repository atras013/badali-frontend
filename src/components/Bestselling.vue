<template>
  <section>
    <div class="best_selling">
      <div class="container">
        <div class="header">
          <h3>پر فروش ترین</h3>
        </div>
        <div class="swiper">
          <swiper :options="swiperOptions" class="best_selling_swiper">
            <swiper-slide
              class="product_card swiper-slide"
              v-for="product in products.slice(0, 8)"
              :key="product.id"
            >
              <div class="product_card_img">
                <a href="#">
                  <img :src="product.image" alt="" />
                </a>

                <button @click="addToCart(product)" class="add_button">
                  افزودن به سبد خرید
                </button>
              </div>
              <div class="product_content">
                <div class="product_title">
                  <p class="product_name">{{ product.title }}</p>
                  <p class="product_price">{{ product.price }}</p>
                </div>

                <p class="product_category">{{ product.category_name }}</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";

// import style (<= Swiper 5.x)
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      window: window.innerWidth,
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 0,
        freeMode: false,
        loop: false,
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  computed: {
    products() {
      return this.$store.getters["prods/products"];
    },
  },
};
</script>
<style scoped>
.best_selling {
  max-width: 1600px;
  margin-top: 120px;
}
.container {
  max-width: 1600px !important;
  margin: 0;
  padding: 0 10px 0 0;
  display: flex;
  flex-direction: column;
}
.best_selling_swiper {
  height: auto;
}
.best_selling .header {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.best_selling .header h3 {
  font-weight: 600;
}
.product_card {
  width: 32.5%;
  height: auto !important;
  transition: all 0.4s;
  border-radius: 8px;
  margin-left: 14px;
}

.product_card_img {
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
}
.product_card_img img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.product_card_img {
  transition: all 0.3s ease;
}
.product_card_img:hover {
  -webkit-box-shadow: -5px 7px 4px 1px rgb(0, 0, 0);
  -moz-box-shadow: -5px 7px 4px 1px rgb(0, 0, 0);
  box-shadow: -5px 7px 4px 1px rgb(0, 0, 0);
  border: 1px solid #000000;
}

.product_card_img .add_button {
  border: 1px solid #222;
  width: calc(100% - 40px);
  margin: 0 20px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 10;
  font-size: 1.2rem;
  font-weight: 600;
  background: #fff;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.product_card_img:hover .add_button {
  visibility: visible;
  opacity: 1;
}
.product_card_img .add_button:hover {
  color: #1c1b19 !important;
  background: #fcd462;
}

.product_title {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.product_name {
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.2;
}
.product_price {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.2;
}
.product_category {
  font-size: 1.2rem;
  font-weight: 400;
}
.swiper-pagination {
  position: relative;
}
.swiper-pagination {
  position: relative;
  margin-top: 30px;
}
/** customize slider pagination add to home css   */

/** media query */
@media only screen and (max-width: 1024px) {
  .product_card {
    width: calc((100% - 40px) / 3);
    height: 390px;
  }
  .product_card_img {
    height: 330px;
  }
  .product_card_img img {
    height: 330px;
  }
}
@media only screen and (max-width: 768px) {
  .product_card {
    width: 240px;
    height: 360px;
  }
  .product_card_img {
    width: 240px;
    height: 266px;
  }
  .product_card_img img {
    width: 240px;
    height: 266px;
  }
  .product_content .product_name {
    font-size: 1rem;
  }
  .product_content .product_price {
    font-size: 0.9rem;
  }
  .product_content .product_category {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 840px) {
  .product_content .product_name {
    font-size: 1rem;
  }
  .product_content .product_price {
    font-size: 0.9rem;
  }
  .product_content .product_category {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 700px) {
  .product_content .product_name {
    font-size: 0.8rem;
  }
  .product_content .product_price {
    font-size: 0.8rem;
  }
  .product_content .product_category {
    font-size: 1rem;
  }
  .best_selling .header h3 {
    font-size: 1.2rem;
  }
}
</style>
