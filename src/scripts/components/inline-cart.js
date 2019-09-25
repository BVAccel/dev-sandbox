import dom from '../common/Dom';

export const show = () => $(dom.inlineCart).addClass('is-active');

export const hide = () => $(dom.inlineCart).removeClass('is-active');

const productUpdate = (variantId, quantity) => {
  const updates = {};
  updates[variantId] = quantity;

  $.post('/cart/update.js', {
    updates
  });
}

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

const handleRemove = () => {
  $(dom.lineItemEntryPoint).on('click', event => {
    const target = event.target;
    console.log('remove', target)

    if (target.matches('[data-cart-line-item-remove]')) {
      const id = $(target).attr('data-variant-id')

      console.log('remove id', id)
      productUpdate(id, 0);
      $(target).closest('[data-cart-line-item]').remove();
    }
  });
}

const handleQty = () => {
  $(dom.lineItemEntryPoint).on('click', event => {
    const target = event.target;

    const id = $(target)
      .closest('[data-cart-line-item-product-variant-id]')
      .attr('data-cart-line-item-product-variant-id');

    const qtyCounter = $(target)
      .closest('[data-cart-line-item]')
      .find('[data-cart-line-item-qty]');

    const inlineCartCount = $(dom.inlineCartCount).html();

    if (target.matches(dom.cartLineItemEditPlus)) {
      const qty = new Number($(target).prev().html()) + 1;

      productUpdate(id, qty);
      // update edit counter
      $(target).prev().html(qty);
      // update line item counter
      $(qtyCounter[0]).html(`QTY: ${qty}`);
      // update total counter
      $(dom.inlineCartCount).html(parseInt(inlineCartCount) + 1)
    }

    if (target.matches(dom.cartLineItemEditMinus)) {
      const current = new Number($(target).next().html());

      if (current > 1) {
        const qty = current - 1;

        productUpdate(id, qty);
        // update edit counter
        $(target).next().html(qty);
        // update line item counter
        $(qtyCounter[0]).html(`QTY: ${qty}`);
        // update total counter
        $(dom.inlineCartCount).html(parseInt(inlineCartCount) - 1)
      } else {
        productUpdate(id, 0);
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
    handleRemove();
  });
}

const bindUIActions = () => {
  update();

  $(dom.inlineCartToggle).on('click', () => $(dom.inlineCart).toggleClass('is-active'));
  $(dom.inlineCartClose).on('click', hide);
}

export const init = () => bindUIActions();