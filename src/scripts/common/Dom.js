/*

  Declare and export all DOM strings here

  e.g.

  export default {
    inlineCart: '[data-inline-cart]',
    inlineCartContents: '[data-inline-cart-contents]',
  };

  Usage:

  import dom from 'common/Dom';
  import { getCartContents } from './handlers';

  $(dom.inlineCartContents).html(getCartContents());

*/
const dom = {
  header: '[data-header]',
  headerHamburger: '[data-header-hamburger]',
  headerNav: '[data-header-nav]',
  headerNav: '[data-header-navbar]',
  headerNavListContainer: '[data-header-nav-list-container]',
  slider: '[data-slider]',
  instagram: '[data-instagram]',
  collectionFilters: '[data-collection-filters]',
  collectionFiltersTitle: '[data-collection-filter-title]',
  collectionFiltersTitleAttr: 'data-collection-filter-title',
  collectionFiltersContainer: '[data-collection-filter-container]',
  collectionFilterToggle: '[data-filter-toggle]',
  collectionSort: '[data-collection-sort]',
  customSelect: '[data-custom-select]',
  inlineCart: '[data-inline-cart]',
  inlineCartCount: '[data-inline-cart-count]',
  inlineCartToggle: '[data-inline-cart-toggle]',
  inlineCartClose: '[data-inline-cart-close]',
  inlineCartSubtotal: '[data-inline-cart-subtotal]',
  inlineCartCheckout: '[data-inline-cart-checkout]',
  lineItemEntryPoint: '[data-cart-contents]',
  cartLineItem: '[data-cart-line-item]',
  cartLineItemPrice: '[data-cart-line-item-price]',
  cartLineItemRemove: '[data-cart-line-item-remove]',
  cartLineItemProductVariant: '[data-cart-line-item-product-variant-id]',
  cartLineItemEdit: '[data-cart-line-item-edit]',
  cartLineItemEditPlus: '[data-cart-line-item-edit-plus]',
  cartLineItemEditMinus: '[data-cart-line-item-edit-minus]',
  cartLineItemEditQty: '[data-cart-line-item-edit-qty]',
  cartLineItemEditQtyVal: '[data-cart-line-item-edit-qty-val]',
  cartLineItemQtyVal: '[data-cart-line-item-qty-val]',
  cartLineItemExpand: '[data-cart-line-item-expand]',
  cartLineItemSubtotal: '[data-cart-line-item-subtotal]',
  cartLineItemEditContainer: '[data-cart-line-item-edit-container]',
};

export default dom;