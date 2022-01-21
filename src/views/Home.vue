<template>
  <div class="root">
    <hero-section></hero-section>
    <best-selling></best-selling>
    <feature-section></feature-section>
    <new-products></new-products>
    <special-section></special-section>
  </div>
</template>
<style scoped>
.root {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0;
}
</style>
<script>
import HeroSection from "../components/HeroSection.vue";
import BestSelling from "../components/Bestselling.vue";
import FeatureSection from "../components/FeatureSection.vue";
import NewProducts from "../components/NewProducts.vue";
import SpecialSection from "../components/SpecialSection.vue";
export default {
  components: {
    HeroSection,
    BestSelling,
    FeatureSection,
    NewProducts,
    SpecialSection,
  },
};
</script>
<style>
@import "../assets/css/general.css";
</style>

<style>
/** customize best selling pagination slider */
.swiper-pagination .swiper-pagination-bullet,
.swiper-pagination_new .swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  margin-left: 10px;
}
.swiper-pagination .swiper-pagination-bullet-active,
.swiper-pagination_new .swiper-pagination-bullet-active {
  background: #000;
}

/** media query for customize bestSelling pagination slider */
.swiper-pagination .swiper-pagination-bullet,
.swiper-pagination_new .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  margin-left: 10px;
}
</style>
