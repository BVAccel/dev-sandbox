import dom from '../common/Dom';

export const update = () => {
  $.get('/cart?view=contents', response => {
    $(dom.lineItemEntryPoint).html(response);
  });
}

export const show = () => $(dom.inlineCart).addClass('is-active');

export const hide = () => $(dom.inlineCart).removeClass('is-active');

const bindUIActions = () => {
  // fetch cart content on every page load
  update();

  $(dom.inlineCartToggle).on('click', () => $(dom.inlineCart).toggleClass('is-active'));
  $(dom.inlineCartClose).on('click', hide);
  // $('[data-cart-line-item-expand]').on('click', () => {
  //   console.log('expand');
  // })
}

export const init = () => bindUIActions();