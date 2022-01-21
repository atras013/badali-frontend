<template>
  <section id="hero" class="hero">
    <div ref="container" id="container" class="container swiper">
      <swiper :options="swiperOptions" class="mySwiper">
        <swiper-slide v-for="product in products.slice(0, 5)" :key="product.id">
          <div @click="activeSlideDetail" class="slide swiper-slide">
            <img :src="product.image" alt="" />

            <div class="slide-detail">
              <button @click="closeSlideDetail" class="close-slide-detail">
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <div class="slide-info">
                <div class="slide-description">
                  <h3>{{ product.title }}</h3>
                  <p>{{ product.description }}</p>
                  <a href="">بیشتر...</a>
                </div>
                <div class="slide-price">
                  <p class="price">
                    {{ product.price }}
                    <span class="price-currency">تومان</span>
                  </p>
                  <button
                    @click="addToCart(product)"
                    class="d-flex justify-content-center align-items-center"
                  >
                    <ion-icon name="basket-outline"></ion-icon>
                    <span class="px-2">افزودن به سبد</span>
                  </button>
                </div>
              </div>
              <div class="related-products">
                <h4 class="title pb-3">محصولات مرتبط</h4>
                <div class="related-products-items">
                  <div
                    class="product"
                    v-for="product in products.slice(0, 3)"
                    :key="product.id"
                  >
                    <a href=""></a>
                    <img :src="product.image" alt="" />
                    <div class="content">
                      <p class="product-title">{{ product.title }}</p>
                      <p class="product-category">
                        {{ product.category_name }}
                      </p>

                      <p class="price">
                        {{ product.price }}
                        <span class="price-currency">تومان</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></swiper-slide
        >
      </swiper>
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
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 10,
        freeMode: false,
        loop: false,
        grabCursor: true,
      },
    };
  },

  computed: {
    products() {
      return this.$store.getters["prods/products"];
    },
  },
  methods: {
    activeSlideDetail(e) {
      e.path[1].children[1].classList.add("active-slide-detail");
      e.path[1].children[1].children[2].classList.add("active");
      let products = Array.from(
        e.path[1].children[1].children[2].children[1].children
      );
      products.forEach(function (product) {
        product.classList.add("active");
      });
    },
    closeSlideDetail(e) {
      e.path[6].children[1].classList.remove("active-slide-detail");
      e.path[6].children[1].children[2].classList.remove("active");
      let products = Array.from(
        e.path[6].children[1].children[2].children[1].children
      );

      products.forEach(function (product) {
        product.classList.remove("active");
      });
    },

    //add to cart
  },
};
</script>
<style scoped>
.hero {
  height: auto;
}
.hero .container {
  max-width: 1570px;
  height: auto;
  padding: 0 10px;
  margin-top: 50px;
  overflow: hidden;
}
.swiper-slide,
.swiper-slide-next {
  width: 572px !important;
}

.slide {
  margin-left: 10px;
  width: 572px;
  height: 763px;
  border-radius: 8px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  position: relative;
}
.slide img {
  width: 100%;
  height: 100%;
}
.slide .slide-detail {
  position: absolute;
  right: 0;
  /* bottom: -763px; */
  bottom: -800px;
  width: 100%;
  height: 100%;
  background: transparent;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(34px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  transition: all 0.7s;
}
.close-slide-detail {
  position: absolute;
  margin: 0;
  border: none;
  height: 35px;
  top: 15px;
  right: 15px;
  font-size: 2rem;
  border-radius: 10px;
}
.close-slide-detail ion-icon {
  border-radius: 5px;
}
.active-slide-detail {
  bottom: 0 !important;
}
.slide-info {
  background: transparent;
  border-right: 1px solid white;
  border-left: 1px solid white;
  border-bottom: 1px solid white;
  color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 60%;
  height: 300px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-top: none;
  justify-content: space-between;
}
.slide-description,
.slide-price {
  background: transparent;
}
.slide-price p,
.slide-price span {
  background: transparent;
}
.slide-info h3,
.slide-info p {
  background: transparent;
  text-align: center;
}

.slide-price .price {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
}
.slide-price .price-currency {
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0;
}

.slide-info button {
  width: 100%;
  height: 50px;
  border: 1px solid #fcd462;
  background: #1c1b19 !important;
  color: #fcd462;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 8px;
  position: relative;
  transition: all 0.3s;
}
.slide-info button:hover {
  color: #1c1b19 !important;
  background: #fcd462 !important;
}
.slide-price ion-icon {
  background: transparent;
  font-size: 1.8rem;
}

.slide-info a {
  color: #ffa8a8;
  text-align: center;
  display: block;
}
.related-products {
  background: transparent;
  color: #fff;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
.related-products .product:nth-child(3) {
  opacity: 0;
  transition: all 0.8s ease-in-out 0.7s;
}

.related-products .product:nth-child(2) {
  opacity: 0;
  transition: all 0.6s ease-in-out 0.5s;
}

.related-products .product:nth-child(1) {
  opacity: 0;
  transition: all 0.4s ease-in-out 0.3s;
}

.active {
  opacity: 1 !important;
  display: flex !important;
}

.related-products .title {
  background-color: transparent;
  text-align: center;
}
.related-products-items {
  display: flex;
  flex-direction: row;
  background-color: transparent;
}
.related-products p {
  background: transparent;
}

.related-products .product {
  width: 33%;
  margin: 10px;
  padding: 10px;
  background: transparent;
  border: 1px solid #fff;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.related-products .product a {
  position: absolute;
  width: 100%;
  height: 100%;
  right: 0;
  top: 0;
}
.related-products .product img {
  width: 100%;
  height: 150px;
  object-fit: center;
  border-radius: 10px;
}
.related-products .product p {
  margin: 0;
  font-size: 1.2rem;
}
.related-products .product .content {
  background: transparent;
}
.related-products .product .price {
  padding: 0;
  margin-bottom: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
}
.related-products .product span {
  background: transparent;
}
.price-currency {
  font-size: 1rem;
  font-weight: lighter;
}

/**media query */

@media only screen and (max-width: 610px) {
  .slide,
  .swiper-slide,
  .slide img {
    width: 500px !important;
    margin-left: 0px;
    height: 600px;
    object-position: center;
    object-fit: cover;
  }
  .slide .related-products {
    display: none;
  }
  .slide .slide-detail {
    justify-content: center;
  }
  .slide .slide-info {
    border-top: 1px solid #fff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
}
@media only screen and (max-width: 544px) {
  .slide,
  .swiper-slide,
  .slide img {
    width: 450px !important;
    margin-left: 0px;
    height: 600px;
    object-position: center;
    object-fit: cover;
  }
}

@media only screen and (max-width: 495px) {
  .slide,
  .swiper-slide,
  .slide img {
    width: 400px !important;
    margin-left: 0px;
    height: 600px;
    object-position: center;
    object-fit: cover;
  }
}
@media only screen and (max-width: 450px) {
  .slide,
  .swiper-slide,
  .slide img {
    width: 350px !important;
    margin-left: 0px;
    height: 550px;
    object-position: center;
    object-fit: cover;
  }
  .slide .slide-info {
    width: 80%;
  }
}
@media only screen and (max-width: 400px) {
  .slide,
  .swiper-slide,
  .slide img {
    width: 300px !important;
    margin-left: 0px;
    height: 500px;
    object-position: center;
    object-fit: cover;
  }
} ;
</style>
