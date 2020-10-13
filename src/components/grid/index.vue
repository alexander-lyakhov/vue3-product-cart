<template>
  <div v-if="isLoading" class="msg-loading">
    Fetching data...
  </div>

  <div v-else class="grid">
    <div class="grid-cell" v-for="(cart, index) in products" :key="index">
      <product-cart :cart="cart" />
    </div>
  </div>
</template>

<script>

import productCart from '@/components/cart';
import {mapState, useStore} from 'vuex';
import {reactive, toRefs, ref} from 'vue';

const url = 'https://my-json-server.typicode.com/alexander-lyakhov/vue3-product-cart/products'

export default {
  name: 'Grid',

  components: {
    'product-cart': productCart
  },

  setup() {
    const store = useStore();

    const state = reactive({
      isLoading: true,
    });


    store.dispatch('fetchProducts').then(
      res => {
        state.isLoading = false
        console.log('>> res', res)
      },
      err => {
        console.log('>> ERROR << ', err)
      });

    return {
      ...toRefs(state)
    }
  },

  computed: {
    ...mapState(['products'])
  }
}
</script>

<style lang="scss" scoped>

.msg-loading {
  font-size: 4rem;
  background: #686868;
  text-align: center;
  letter-spacing: 2px;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 0;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  padding-top: 80px;

  .grid-cell {
    min-width: 20%;
  }
}

@media screen and (max-width: 1600px) {
  .grid .grid-cell {
    min-width: 25%;
  }
}

@media screen and (max-width: 1280px) {
  .grid .grid-cell {
    min-width: 33.33%;
  }
}

@media screen and (max-width: 930px) {
  .grid .grid-cell {
    min-width: 50%;
  }
}
</style>