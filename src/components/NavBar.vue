<template>
  <header>
    <nav class="container">
      <div class="mobile-menu" :class="{ showMobileMenu: activeMobileMenu }">
        <div class="mobile-menu-container">
          <div
            class="first-row d-flex justify-content-between align-items-start pt-4"
          >
            <img class="logo-img" src="../assets/logo.png" alt="" />
            <span @click="showMobileMenu" class="close-btn d-flex">
              <ion-icon name="close-outline"></ion-icon>
            </span>
          </div>
          <ul class="mobile-menu-lists">
            <li>
              <div
                @click="showMobileJewelrySubMenu"
                class="mobile-head-menu d-flex column justify-content-between align-items-center"
              >
                <h5 class="p-2">جواهرالات</h5>
                <ion-icon
                  class="arrow-icon"
                  name="chevron-back-outline"
                ></ion-icon>
              </div>

              <ul
                class="mobile-jewelry-sub-menu"
                :class="{ active_Jewelry_SubMenu: activeJewelrySubMenu }"
              >
                <li><router-link to="/products">انگشتر</router-link></li>
                <li><a href="">گردنبند</a></li>
                <li><a href="">دستبند</a><a></a></li>
                <li><a href="">زنجیری</a></li>
                <li><a href="">پابند</a></li>
                <li><a href="">پلاک</a></li>
                <li><a href="">النگو</a></li>
              </ul>
            </li>
            <li>
              <div
                @click="showMobileWatchSubMenu"
                class="mobile-head-menu align-self-start d-flex column justify-content-between align-items-center"
              >
                <h5 class="p-2">ساعت</h5>
                <ion-icon
                  class="arrow-icon"
                  name="chevron-back-outline"
                ></ion-icon>
              </div>
              <ul
                class="mb-2 mobile-watch-sub-menu p-0"
                :class="{ active_watch_SubMenu: activeWatchSubMenu }"
              >
                <li><a href="">فلزی</a></li>
                <li><a href="">طلایی</a></li>
                <li><a href="">دست بند چرم</a></li>

                <li><a href="">طلایی</a></li>
                <li><a href="">دست بند چرم</a></li>
                <li><a href="">زنجیری</a></li>
              </ul>
            </li>
            <li>
              <div
                class="d-flex column justify-content-between align-items-center"
              >
                <h5 class="p-2">وبلاگ</h5>
              </div>
            </li>
            <li>
              <h5 class="p-2">همسفر</h5>
            </li>
            <li>
              <h5 class="p-2">درباره ما</h5>
            </li>
          </ul>
          <div
            class="p-4 social-media d-flex justify-content-center column align-items-end"
          >
            <ion-icon name="logo-instagram"></ion-icon>
            <i class="fab fa-telegram"></i>
            <ion-icon name="share-social-outline"></ion-icon>
          </div>
        </div>
      </div>

      <ul class="nave-bar row justify-content-between align-items-center">
        <li
          @click="showMobileMenu"
          class="hamburger-menu col-xl-2 col-lg-1 col-md-1 col-sm-1 col-2 align-items-center"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </li>
        <li class="logo col-xl-2 col-lg-1 col-md-1 col-sm-3 col-3">
          <img class="logo-img" src="../assets/logo.png" alt="" />
        </li>
        <li class="main-menu col-xl-6 col-lg-7">
          <div class="menu-item d-flex align-items-center justify-content-end">
            <h4><router-link to="/">صفحه اصلی</router-link></h4>
            <h4
              @mouseenter="showMegaMenu"
              @mouseleave="showMegaMenu"
              class="productHeadMenu"
            >
              محصولات
            </h4>
            <h4>وبلاگ</h4>
            <h4>همسفر</h4>
            <h4>درباره ما</h4>
          </div>
        </li>
        <li
          class="last-menu col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 d-flex justify-content-end align-items-center"
        >
          <div class="search">
            <input class="search-input" type="text" placeholder="جستجو" />
            <span class="search-icon">
              <i class="fa fa-search"></i>
            </span>
          </div>
          <div class="user-info d-flex column">
            <span class="profile">
              <ion-icon name="person-outline"></ion-icon>
            </span>

            <span class="bag-list" @click="showCart">
              <ion-icon name="bag-outline"></ion-icon>
              <span
                :class="{ active_cart_counter: this.cartQyt > 0 }"
                class="cart-counter"
                >{{ cartQyt }}</span
              >
            </span>
            <div class="search-for-mobile">
              <ion-icon name="search-outline"></ion-icon>
            </div>
          </div>
        </li>
      </ul>
      <div
        class="mega-menu"
        @mouseenter="mouseOnMegaMenu"
        @mouseleave="mouseOnMegaMenu"
        :class="{ show: !activeMegaMenu }"
      >
        <div class="container">
          <div class="first-row row">
            <div class="col-lg-3 d-flex justify-content-center">
              <div class="head-mega-menu">
                <ul class="d-flex flex-column">
                  <li class="d-flex align-items-center">
                    <a
                      class="d-flex align-items-center"
                      :class="{ activeSubMenu: activeMenu }"
                      href="#"
                      @mouseenter="showJewelrySubMenu"
                    >
                      <i class="far fa-gem"></i>
                      <span class="px-2">جواهرالات</span>
                    </a>
                  </li>
                  <li class="d-flex align-items-center">
                    <a
                      class="d-flex align-items-center"
                      :class="{ activeSubMenu: !activeMenu }"
                      href="#"
                      @mouseenter="showWatchSubMenu"
                    >
                      <ion-icon name="watch-outline"></ion-icon>
                      <span class="px-2">ساعت</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-9">
              <div
                class="jewelry-sub-menu row"
                v-show="activeMenu"
                ref="jewelrySubMenu"
              >
                <div class="col-lg-2">
                  <ul class="d-flex flex-column">
                    <li><router-link to="/products">انگشتر</router-link></li>
                    <li><a href="">گردنبند</a></li>
                    <li><a href="">دستبند</a><a></a></li>
                    <li><a href="">زنجیری</a></li>
                  </ul>
                </div>
                <div class="col-lg-2">
                  <ul class="d-flex flex-column">
                    <li><a href="">دستبند</a></li>
                    <li><a href="">پابند</a></li>
                    <li><a href="">پلاک</a></li>
                    <li><a href="">النگو</a></li>
                  </ul>
                </div>
                <div
                  class="col-lg-8 d-flex justify-content-center justify-self-end"
                >
                  <img
                    class="sub-menu-img"
                    src="../assets/img/gardeband.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="watch-sub-menu row" v-show="!activeMenu">
                <div class="col-lg-2">
                  <ul class="d-flex flex-column">
                    <li><a href="">فلزی</a></li>
                    <li><a href="">طلایی</a></li>
                    <li><a href="">دست بند چرم</a></li>
                    <li><a href="">زنجیری</a></li>
                  </ul>
                </div>

                <div class="col-lg-2">
                  <ul class="d-flex flex-column">
                    <li><a href="">دستبند</a></li>
                    <li><a href="">پابند</a></li>
                    <li><a href="">پلاک</a></li>
                    <li><a href="">النگو</a></li>
                  </ul>
                </div>
                <div class="col-lg-8 d-flex justify-content-center">
                  <img
                    class="sub-menu-img"
                    c
                    src="../assets/img/gardeband.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <cart ref="cartComponent"></cart>
      <div @click="showCart" id="cart-list-bg" class="cart-list-bg"></div>
    </nav>
  </header>
</template>
<script>
import Cart from "./cart.vue";
export default {
  components: {
    Cart,
  },

  data() {
    return {
      activeMegaMenu: true,
      activeMenu: true,
      activeMobileMenu: false,
      jewelrySubMenuVisible: true,
      activeJewelrySubMenu: false,
      activeWatchSubMenu: false,
    };
  },
  computed: {
    cartQyt() {
      return this.$store.getters["cart/qyt"];
    },
  },
  methods: {
    showWatchSubMenu() {
      this.activeMenu = false;
    },
    showJewelrySubMenu() {
      this.activeMenu = true;
    },

    showMegaMenu() {
      this.activeMegaMenu = !this.activeMegaMenu;
    },
    mouseOnMegaMenu() {
      this.activeMegaMenu = !this.activeMegaMenu;
    },
    showMobileMenu() {
      this.activeMobileMenu = !this.activeMobileMenu;
    },

    showMobileJewelrySubMenu() {
      this.activeJewelrySubMenu = !this.activeJewelrySubMenu;
    },
    showMobileWatchSubMenu() {
      this.activeWatchSubMenu = !this.activeWatchSubMenu;
    },
    //show cart
    showCart() {
      this.$refs.cartComponent.showCart();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1560px;
  overflow: hidden;
  color: #616161;
}
.nave-bar {
  list-style: none;
  padding: 20px 20px 0 20px;
  align-items: center;
  margin: 0 auto;
  height: auto;
}
.logo {
  padding: 0;
}

.logo-img {
  width: 80px;
  height: 50px;
}

.menu-item h4 {
  font-size: 1.3rem;
  padding: 24px 20px 0 20px;
  margin: 0;
  cursor: pointer;
  height: 70px;
  position: relative;
}
.menu-item h4::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f03e3e;
  width: 100%;
  height: 0.175rem;
  transform: scale(0, 1);
  transition: all 0.3s;
}
.menu-item h4:hover::after {
  transform: scale(1, 1);
}

.search-input {
  border: solid thin #e9ecef;
  font-size: 1rem;
  padding-right: 16px;
}
.last-menu span {
  padding: 0 12px;
  height: 24px;
  cursor: pointer;
}

.last-menu ion-icon {
  font-size: 1.8rem;
  padding: 0 5px;
}
.last-menu .user-info .profile {
  margin-right: 10px;
}
.search {
  display: flex;
  border: 1px solid rgb(199, 199, 199);
  border-radius: 30px;
  background-color: white;
  align-items: center;
  padding-right: 8px;
  height: 30px;
  width: 220px;
  position: relative;
}
.search-input {
  outline: none;
  border: none;
}
.last-menu span {
  padding: 0 0;
  margin-left: 10px;
}
.last-menu {
  padding-left: 0;
}

.last-menu .bag-list {
  position: relative;
}
.last-menu .cart-counter {
  position: absolute;
  top: -13px;
  right: -8px;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding-top: 2px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  background-color: #0071ae;
  color: #fff;
  opacity: 0;
  transition: all 0.3s;
}
.active_cart_counter {
  opacity: 1 !important;
}
.search-icon {
  border: none;
  outline: none;
  color: #777;
  font-size: 1.2rem;
  position: absolute;
  left: 0;
}
.search-icon i {
  font-size: 1.2rem;
}

header {
  position: relative;
}
/** mega menu */
.mega-menu {
  position: absolute;
  background-color: #fff;
  margin: 0 24px;
  color: #616161;
  height: auto;
  width: 93vw;
  -webkit-box-shadow: 2px 18px 44px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 18px 44px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 18px 44px -10px rgba(0, 0, 0, 0.75);
  transform: translateY(50px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: none;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s;

  z-index: 10;
}

.mega-menu .row {
  margin: 0;
}
.mega-menu .container {
  padding: 50px 0;
}
.mega-menu ul {
  list-style: none;
}

.head-mega-menu a {
  text-decoration: none;
  color: #616161;
  padding-right: 8px;
  font-size: 1.8rem;
}
.head-mega-menu span {
  font-size: 1.2rem;
}
.head-mega-menu ion-icon,
i {
  font-size: 1.3rem;
}
.head-mega-menu ul {
  row-gap: 24px;
}
.head-mega-menu {
  padding-left: 20px;
  border-left: 1px solid hsla(0, 0%, 38%, 0.26);
}
.sub-menu ul {
  row-gap: 16px;
}

.head-mega-menu .activeSubMenu {
  color: #f03e3e;
  border-right: 3px solid #f03e3e;
  transition: all 0.3s;
}
.jewelry-sub-menu,
.watch-sub-menu {
  color: #414141;
}
.watch-sub-menu li,
.jewelry-sub-menu li {
  margin-bottom: 18px;
  font-size: 1.1rem;
}
.jewelry-sub-menu ul li a:hover,
.watch-sub-menu ul li a:hover {
  color: #f03e3e;
  transition: all 0.4s;
}
.productHeadMenu {
  padding-top: 24px;
  margin: 0;
}
@keyframes fade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.show {
  display: block;
  animation: fade 0.5s forwards;
  visibility: visible;

  opacity: 1;

  z-index: 10;
}
.hamburger-menu {
  display: none;
  font-size: 2.9rem;
  height: 50px;
}
.main-menu a:hover {
  text-decoration: none;
  color: #414141;
}
/** Mobile menu */

.mobile-menu {
  position: fixed;
  right: 0;
  background-color: #fff;
  transform: translateX(430px);
  transition: all 0.5s;
  display: none;
  visibility: hidden;
  opacity: 0;
  z-index: 50;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
}
.mobile-menu ul {
  width: 100%;
}
.mobile-menu .mobile-menu-container {
  padding: 0 0;
  height: 100%;
  width: 60vw;
  display: grid;
  grid-template-rows: auto 2fr 1fr;
  box-shadow: -11px 1px 17px 0px rgba(23, 20, 20, 0.31);
  -webkit-box-shadow: -11px 1px 17px 0px rgba(23, 20, 20, 0.31);
  -moz-box-shadow: -11px 1px 17px 0px rgba(23, 20, 20, 0.31);
  overflow-y: auto;
  overflow-x: hidden;
}
.mobile-menu .logo-img {
  width: 60px;
  height: 40px;
  margin: 0 16px 0 0;
}
.mobile-menu .close-btn {
  margin: 0 16px 0 16px;
}
.mobile-menu .close-btn ion-icon {
  font-size: 2rem;
}
.mobile-menu ul {
  list-style: none;
}
.mobile-menu-lists {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 8px;
  margin-top: 50px;
  row-gap: 18px;
}
.mobile-menu li {
  margin: 0 0;
  width: 100%;
}
.mobile-menu .social-media ion-icon,
.mobile-menu .social-media i {
  font-size: 1.8rem;
  padding: 0 20px;
}
.mobile-jewelry-sub-menu,
.mobile-jewelry-sub-menu li,
.mobile-watch-sub-menu li {
  background-color: #f0f0f1;
}
.mobile-jewelry-sub-menu li,
.mobile-watch-sub-menu li {
  background-color: #f0f0f1;
  padding-right: 16px;
  padding: 10px 16px 10px 0;
}
.mobile-jewelry-sub-menu,
.mobile-watch-sub-menu {
  display: flex;
  flex-direction: column;
}
.mobile-jewelry-sub-menu,
.mobile-watch-sub-menu {
  display: none;
}
@keyframes show-mobile {
  from {
  }
  to {
    transform: translateY(0);
  }
}

.showMobileMenu {
  display: block;
  animation: show-mobile 0.4s forwards;
  visibility: visible;
  opacity: 1;
}
/* .activeJewelrySubMenu {
  display: 1;
} */
.active_Jewelry_SubMenu {
  display: flex;
}
.active_watch_SubMenu {
  display: flex;
}
/** mobile menu */

.mobile-menu .arrow-icon {
  font-size: 1.6rem;
}
/** cart background */

.cart-list-bg {
  display: none;
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
}
/** Media query */

@media only screen and (min-width: 1560px) {
  .mega-menu {
    width: 1480px;
  }
}
@media only screen and (max-width: 1200px) {
  .menu-item {
    justify-content: center !important;
  }
}
@media only screen and (max-width: 1070px) {
  .jewelry-sub-menu .sub-menu-img {
    height: 250px;
  }

  .menu-item h4 {
    font-size: 1.2rem;
  }
}
.last-menu .search-for-mobile {
  display: none;
}
/** make menu for mobile */
@media only screen and (max-width: 995px) {
  .hamburger-menu {
    display: block;
  }
  .main-menu {
    display: none !important;
  }

  .nave-bar {
    padding-right: 8px;
  }
  .nav-bar {
    flex-direction: row !important;
  }
  .nave-bar .logo img {
    width: 60px;
    height: 40px;
  }
}
@media only screen and (max-width: 685px) {
  .last-menu {
    flex-direction: column;
  }
  .last-menu .search {
    display: none;
  }
  .last-menu .search-for-mobile {
    display: block;
  }
}
@media only screen and (max-width: 765px) {
  .nave-bar .logo {
    display: flex;
  }
}
@media only screen and (max-width: 675px) {
  .nave-bar .logo {
    justify-content: center;
  }
}
@media only screen and (max-width: 455px) {
  .nave-bar .logo img {
    width: 45px;
    height: 40px;
  }

  .user-info span {
    margin-left: 3px;
  }
}
@media only screen and (min-width: 412px) {
  .nave-bar {
    padding-right: 0;
    padding-left: 8px;
  }
  .hamburger-menu {
    padding-right: 0;
  }
}
@media only screen and (max-width: 361px) {
  nav {
    padding-right: 0;
  }
  .nave-bar {
    padding-right: 0;
  }
}

@media only screen and (min-width: 768px) {
  .mobile-menu .mobile-menu-container {
    width: 45vw;
  }
}
@media only screen and (min-width: 994px) {
  .mobile-menu .mobile-menu-container {
    width: 35vw;
  }
}
</style>
