import dom from '../common/Dom';
import 'styles/templates/product/index.scss';
import { update as updateInlineCart } from '../components/inline-cart';

document.addEventListener('DOMContentLoaded', () => {
  $('#add-to-cart').on('click', () => {
      $.post('/cart/add.js', {
        quantity: 1,
        id: '8456013938739'
      })
      .done(() => updateInlineCart(true));
  });

  $('#add-to-cart-2').on('click', () => {
    $.post('/cart/add.js', {
      quantity: 1,
      id: '17461984722995'
    })
    .done(res => updateInlineCart(true));
  });
});

window.addEventListener('load', () => {});
