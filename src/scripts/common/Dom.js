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
};

export default dom;
