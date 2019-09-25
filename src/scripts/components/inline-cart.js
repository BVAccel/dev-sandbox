import dom from '../common/Dom';

export const show = () => $(dom.inlineCart).addClass('is-active');

export const hide = () => $(dom.inlineCart).removeClass('is-active');

const handleExpand = () => {
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

const handleQty = () => {
  $(dom.lineItemEntryPoint).on('click', event => {
    const target = event.target;

    if (target.matches(dom.cartLineItemEditPlus)) {
      const qty = new Number($(target).prev().html()) + 1;

      $(target).prev().html(qty);
    }

    if (target.matches(dom.cartLineItemEditMinus)) {
      const current = new Number($(target).next().html());

      if (current > 1) {
        const qty = current - 1;

        $(target).next().html(qty);
      } else {
        $(target).closest('[data-cart-line-item]').remove();
      }
    }
  })
}

export const update = () => {
  $.get('/cart?view=contents', response => {
    $(dom.lineItemEntryPoint).html(response);
  }).done(() => {
    handleExpand();
    handleQty();
  });
}

const bindUIActions = () => {
  update();

  $(dom.inlineCartToggle).on('click', () => $(dom.inlineCart).toggleClass('is-active'));
  $(dom.inlineCartClose).on('click', hide);
}

export const init = () => bindUIActions();