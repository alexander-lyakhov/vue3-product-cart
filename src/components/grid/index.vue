<template>
  <div class="msg-loading">
    Fetching data...
  </div>
  <!--
  <div class="grid">
    <div class="grid-cell" v-for="(cart, index) in products" :key="index">
      <product-cart :cart="cart" />
    </div>
  </div>
  -->
</template>

<script>

import productCart from '@/components/cart';
import {mapState} from 'vuex';

export default {
  name: 'Grid',

  components: {
    'product-cart': productCart
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