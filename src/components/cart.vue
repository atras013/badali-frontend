<template>
  <div class="cart-list" id="cart-list">
    <div class="cart-wrapper">
      <div class="cart-header">
        <h4>سبد خرید</h4>
        <span class="close" @click="showCart">
          <ion-icon name="close-outline"></ion-icon
        ></span>
      </div>
      <div class="cart-items">
        <div class="cart-item" v-for="item in items" :key="item.id">
          <div class="item-content">
            <img :src="item.image" alt="" />
            <div class="item-info">
              <div class="detail">
                <h4>{{ item.title }}</h4>
                <p>سایز:34</p>
              </div>
              <div class="counter">
                <button @click="decreaseItem(item)">-</button>
                <span>{{ item.qyt }}</span>
                <button @click="increaseItem(item)">+</button>
              </div>
            </div>
          </div>
          <div class="item-price-info">
            <p class="price">{{ item.price }}</p>
            <span class="delete-item" @click="removeItem(item)">
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
      <div class="result-cart">
        <div class="result-info">
          <p>مجموع:</p>
          <p class="price">{{ totalAmount }}</p>
        </div>
        <a href="#">تکمیل خرید</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //show cart

  computed: {
    //get items of cart
    items() {
      return this.$store.getters["cart/items"];
    },
    //get total cart amount
    totalAmount() {
      return this.$store.getters["cart/total"];
    },
  },
  methods: {
    showCart() {
      document.getElementById("cart-list").classList.toggle("active-cart-list");
      document.getElementById("cart-list-bg").classList.toggle("active");
      document
        .getElementsByTagName("body")[0]
        .classList.toggle("hidden-overflow");
      document
        .getElementsByTagName("html")[0]
        .classList.toggle("hidden-overflow");
    },

    increaseItem(item) {
      this.$store.dispatch("cart/increaseItem", item);
    },

    decreaseItem(item) {
      this.$store.dispatch("cart/decreaseItem", item);
    },

    removeItem(item) {
      this.$store.dispatch("cart/removeProduct", item);
    },
  },
};
</script>
<style scoped>
/** cart list */

.cart-list {
  width: 50vw;
  height: unset;
  background-color: #fff;

  border: 1px solid black;
  border-radius: 10px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  margin: 10px;
  transform: translateX(-103%);
  z-index: 12;
  overflow: hidden;
  visibility: 0;
  transition: all 150ms ease-in-out;
}

.active-cart-list {
  -webkit-transform: none;
  visibility: 1;
  transform: translateX(0);
}

@keyframes showCartList {
  from {
  }
  to {
    -webkit-transform: none;
    transform: translateX(10px);
  }
}
.cart-list .close {
  cursor: pointer;
}
.cart-list .cart-header {
  display: flex;
  justify-content: space-between;
  color: black;
  margin: 0 0 50px 0;
  padding: 20px 14px;
}
.cart-list .cart-header h4 {
  font-weight: 600;
}
.cart-list .cart-header ion-icon {
  font-size: 2rem;
  color: #5c5b5b;
}
.cart-list .cart-items {
  height: calc(100% - 260px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.cart-list .cart-item {
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
  height: 100px;
  margin-bottom: 24px;
}
.cart-list .cart-item .item-content {
  display: flex;
  column-gap: 17px;
}
.cart-list .cart-item .item-content img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
}
.cart-list .cart-item .item-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-list .cart-item .counter {
  display: flex;
  width: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  border: 1px solid #1e1e1e;

  border-radius: 50px;
}
.cart-list .cart-item .counter button {
  font-size: 1.2rem;
  border: none;
  background: #fff;
}
.cart-list .cart-item .item-info h4 {
  font-size: 1.4rem;
  color: black;
  font-weight: 600;
  margin-bottom: 3px;
}
.cart-list .cart-item .item-price-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cart-list .cart-item .item-price-info .delete-item {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
}
.cart-list .cart-item .item-price-info ion-icon {
  font-size: 1.6rem;
  color: #ccc;
}
.cart-list .cart-wrapper {
  position: relative;
  height: 100%;
  border-radius: 10px;
}
.cart-list .result-cart {
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  height: auto;
  border-top: 1px solid black;
  padding: 14px;
}
.cart-list .result-cart .result-info {
  display: flex;
  justify-content: space-between;
}
.cart-list .result-cart .result-info p {
  font-size: 1.4rem;
  color: black;
}
.cart-list .result-cart .result-info .price {
  font-size: 1.1rem;
}
.result-cart a {
  width: 120px;
  border-radius: 10px;
  color: #1e1e1e;
  font-size: 1.2rem;
  border: 1px solid #1e1e1e;
  padding: 10px;
  background-color: #3ff;
  transition: all 300ms;
  width: 100%;
  display: block;
  text-align: center;
}
.result-cart a:hover {
  color: #fff;
  background-color: #1e1e1e;
}
@media only screen and (max-width: 768px) {
  .cart-list {
    width: 95vw;
    height: calc(98vh - 30px);
  }
}
@media only screen and (max-width: 480px) {
  .cart-list {
    width: 95vw;
    height: calc(98vh - 30px);
  }
  .cart-list .cart-item .item-info h4 {
    font-size: 1.2rem;
  }
  .cart-list .cart-item .counter {
    padding: 1px 14px;
  }
}
</style>
