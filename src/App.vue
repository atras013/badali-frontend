<template>
  <div class="root">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-section></footer-section>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/Footer.vue";

export default {
  name: "App",
  components: { NavBar, FooterSection },
};
</script>

<style>
@font-face {
  font-family: "Yekan";
  src: url("./assets/Font/Yekan.eot"); /* IE9 Compat Modes */
  src: url("./assets/Font/Yekan.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("./assets/Font/Yekan.woff2") format("woff2"),
    /* Modern Browsers */ url("./assets/Font/Yekan.woff") format("woff"),
    /* Modern Browsers */ url("./assets/Font/Yekan.otf") format("opentype"),
    /* Open Type Font */ url("./assets/Font/Yekan.ttf") format("truetype"); /* Safari, Android, iOS */
  font-weight: normal;
  font-style: normal;
  text-rendering: optimizeLegibility;
  font-display: auto;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Yekan";
  direction: rtl;

  padding: 0;
  margin: 0;
  text-align: right;
  box-sizing: border-box;
}

body a {
  text-decoration: none;
  color: #414141;
}
</style>
