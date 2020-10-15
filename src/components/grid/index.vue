<template>
  <template v-if="!error">
    <transition name="fade">
      <div v-if="isLoading" class="message msg-info" ref="msgInfo">
        Fetching data...
      </div>

      <div v-else class="grid">
        <div class="grid-cell" v-for="(cart, index) in products" :key="index">
          <product-cart :cart="cart" />
        </div>
      </div>
    </transition>
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
      isLoading: true,
      error: ''
    });

    const msgInfo = ref(null);

    store.dispatch('fetchProducts').then(
      res => {
        state.isLoading = false;
        console.log('msg-info', document.querySelector('.msg-info'));
      },
      err => {
        setTimeout(() => state.error = err.toString().replace(/\"/,''), 1000);
      }
    );

    return {
      ...toRefs(state),
      msgInfo,
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
}

.message.fade-out {
  opacity: 0;
  transition: opacity .25s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-to {
  opacity: 0;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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