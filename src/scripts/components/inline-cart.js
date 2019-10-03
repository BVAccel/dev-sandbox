import dom from '../common/Dom';

/**
 * @description Open Inline Cart
 * @example
 *
 *     show()
 */
export const show = () => $(dom.inlineCart).addClass('is-active');

/**
 * @description Close Inline Cart
 * @example
 *
 *     hide()
 */
export const hide = () => $(dom.inlineCart).removeClass('is-active');

/**
 * @description Update product variant ID
 * @param {number} variantId - A product variant id
 * @param {number} quantity - A product quantity
 * @return {productUpdate~update} update - The returned function
 *
 * @example
 *
 *     productUpdate(561445896243, 1)
 */
const productUpdate = (variantId, quantity) => {
  const updates = {};
  updates[variantId] = quantity;

  $.post('/cart/update.js', {
    updates
  })
  .done(() => update());
}

/**
 * @description Update product variant ID
 * @param {boolean} showCart - Show cart switch
 * @return {update~showCart} show - The returned function
 *
 * @example
 *
 *     update(true)
 */
export const update = showCart => {
  $.get('/cart?view=contents', response => {
    $(dom.lineItemEntryPoint).html(response);
  })
  .done(() => {
    if (showCart) {
      show();
    }
  });
}

/**
 * @description Bind UI actions to the component
 * @example
 *
 *     bindUIActions()
 */
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

/**
 * @description Init functions is used to initialize component at template level imports.
 * @example
 *
 *     init()
 */
export const init = () => {
  update(false);
  bindUIActions();
}