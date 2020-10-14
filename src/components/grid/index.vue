<template>
  <template v-if="!error">
    <div v-if="!products.length" class="message msg-info">
      Fetching data...
    </div>

    <div v-else class="grid">
      <div class="grid-cell" v-for="(cart, index) in products" :key="index">
        <product-cart :cart="cart" />
      </div>
    </div>
  </template>

  <template v-else>
    <div class="message msg-error">
      {{error}}
    </div>
  </template>
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
      error: ''
    });

    store.dispatch('fetchProducts').then(
      res => {
        state.error = '';
      },
      err => {
        setTimeout(() => state.error = err.toString().replace(/\"/,''), 1000);
      }
    );

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

.message {
  text-align: center;
  letter-spacing: 2px;
  line-height: 6rem;
  width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  //padding: 2rem 0;
}

.msg-info {
  font-size: 2rem;
  background: #606080;
}

.msg-error {
  font-size: 1.5rem;
  background: #804040;
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