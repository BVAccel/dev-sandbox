import dom from '../common/Dom';

export const show = () => $(dom.inlineCart).addClass('is-active');

export const hide = () => $(dom.inlineCart).removeClass('is-active');

const productUpdate = (variantId, quantity) => {
  const updates = {};
  updates[variantId] = quantity;

  $.post('/cart/update.js', {
    updates
  })
  .done(() => update());
}

export const update = () => {
  $.get('/cart?view=contents', response => {
    $(dom.lineItemEntryPoint).html(response);
  });
}

const bindUIActions = () => {
  $(document).on('click', dom.cartLineItemRemove, event => {
    const $this = $(event.currentTarget);
    const id = $this.attr('data-variant-id')

    productUpdate(id, 0);
    $this.closest(dom.cartLineItem).remove();
  });

  $(document).on('click', dom.cartLineItemExpand, event => {
    const $this = $(event.currentTarget);
      $this
        .closest(dom.cartLineItem)
        .find(dom.cartLineItemEditContainer)
        .toggleClass('is-active')
  });

  $(document).on('click', dom.cartLineItemEditQty, event => {
    const $this = $(event.currentTarget);
    const $item = $this.closest(dom.cartLineItem)
    const qtyUpdate = parseInt($this.attr('data-line-item-edit-qty'));
    const currentQty = parseInt($item.find(dom.cartLineItemQtyVal).text());
    const qty = currentQty + qtyUpdate;
    const id = $this.closest(dom.cartLineItemProductVariant)
                    .attr('data-line-item-product-variant-id');

    productUpdate(id, qty);
  });

  $(dom.inlineCartToggle).on('click', () => $(dom.inlineCart).toggleClass('is-active'));
  $(dom.inlineCartClose).on('click', hide);
}

export const init = () => {
  update();
  bindUIActions();
}