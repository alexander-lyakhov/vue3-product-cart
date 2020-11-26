import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    'products-in-cart': 'Products in cart',
    'total-price': 'Total price',
  },
  ru: {
    'products-in-cart': 'Товаров в корзине',
    'total-price': 'Цена итого'
  }
}

export default createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages
})