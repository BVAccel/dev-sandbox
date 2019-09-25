import dom from '../common/Dom';
import 'styles/templates/product/index.scss';
import {
  update as updateInlineCart,
  show as showInlineCart,
  hide as hideInlineCart,
} from '../components/inline-cart'

const tease = () => {
  const inlineCartCount = $(dom.inlineCartCount).html();
  $(dom.inlineCartCount).html(parseInt(inlineCartCount) + 1);

  showInlineCart();

  setTimeout(() => {
    hideInlineCart();
  }, 2500);
}

document.addEventListener('DOMContentLoaded', () => {
  $('#add-to-cart').on('click', () => {
      $.post('/cart/add.js', {
        quantity: 1,
        id: '8456013938739'
      })
      .done(res => updateInlineCart());

      tease();
  });

  $('#add-to-cart-2').on('click', () => {
    $.post('/cart/add.js', {
      quantity: 1,
      id: '17461984722995'
    })
    .done(res => updateInlineCart());

    tease();
  });
});

window.addEventListener('load', () => {});
