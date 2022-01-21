export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qyt: 0,
    };
  },
  mutations: {
    addProductToCart(state, payload) {
      const productId = payload.id;

      const productInCartIndex = state.items.findIndex(
        (item) => item.id === productId
      );

      if (productInCartIndex < 0) {
        const newProduct = {
          id: payload.id,
          image: payload.image,
          title: payload.title,
          price: payload.price,
          qyt: 1,
        };
        state.items.push(newProduct);
        state.qyt++;
        state.total += newProduct.price;
      }
    },

    increaseItem(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );

      if (productInCartIndex >= 0) {
        const item = state.items[productInCartIndex];
        console.log(item.price);
        item.qyt++;

        state.total += item.price;
      }
    },
    decreaseItem(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );
      const item = state.items[productInCartIndex];
      if (productInCartIndex >= 0) {
        if (state.items[productInCartIndex].qyt > 1) {
          item.qyt--;

          state.total -= item.price;
        } else {
          state.items.splice(productInCartIndex);
          state.qyt--;
          state.total -= item.price;
        }
      }
    },
    removeProduct(state, payload) {
      const productInCartIndex = state.items.findIndex(
        (item) => item.id === payload.id
      );
      if (productInCartIndex >= 0) {
        const item = state.items[productInCartIndex];
        const sum = item.qyt * item.price;
        state.total -= sum;
        state.qyt--;
        state.items.splice(productInCartIndex);
      }
    },
  },
  actions: {
    addToCart(context, payload) {
      context.commit("addProductToCart", payload);
    },
    increaseItem(context, payload) {
      context.commit("increaseItem", payload);
    },
    decreaseItem(context, payload) {
      context.commit("decreaseItem", payload);
    },
    removeProduct(context, payload) {
      context.commit("removeProduct", payload);
    },
  },
  getters: {
    items(state) {
      return state.items;
    },
    total(state) {
      return state.total;
    },
    qyt(state) {
      return state.qyt;
    },
  },
};
