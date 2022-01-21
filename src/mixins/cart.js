export default {
  methods: {
    addToCart(product) {
      this.$store.dispatch("cart/addToCart", product);
    },
  },
};
