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
  customSelect: '[data-custom-select]'
};

export default dom;
