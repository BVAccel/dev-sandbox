import dom from '../common/Dom';

export const show = () => $(dom.inlineCart).addClass('is-active');

export const hide = () => $(dom.inlineCart).removeClass('is-active');

const expand = () => {
  $(dom.lineItemEntryPoint).on('click', event => {
    const target = event.target;

    if (
      target.matches('svg') ||
      target.matches('path') ||
      target.matches(dom.cartLineItemExpand)
    ) {
      $(target)
        .closest(dom.cartLineItem)
        .find(dom.cartLineItemEditContainer)
        .toggleClass('is-active')
    }
  });
}

export const update = () => {
  $.get('/cart?view=contents', response => {
    $(dom.lineItemEntryPoint).html(response);
  }).done(expand);
}

const bindUIActions = () => {
  update();

  $(dom.inlineCartToggle).on('click', () => $(dom.inlineCart).toggleClass('is-active'));
  $(dom.inlineCartClose).on('click', hide);
}

export const init = () => bindUIActions();