import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    'products-in-cart': 'Products in cart',
    'total-price': 'Total price',
    'cart-is-empty': 'Cart is empty',
    'price': 'Price',
    'total':'Total',
    'reset':'Reset'
  },
  ru: {
    'products-in-cart': 'Товаров в корзине',
    'total-price': 'Общая стоимость',
    'cart-is-empty': 'Карта пуста',
    'price': 'Цена',
    'total':'Итого',
    'reset':'Сброс'
  }
}

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})