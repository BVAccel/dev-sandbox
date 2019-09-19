import dom from '../common/Dom';
import select from './select';

const breakpoint = 993;
const isMobile = () => window.innerWidth < breakpoint;

const $select = $($(dom.collectionSort)[0]);
const $buttons = $($(dom.collectionSort)[1]);

export const bindUIActions = () => {
  Shopify.queryParams = {};

  if (location.search.length) {
    let queryArr;
    let query = location.search.substr(1).split('&');

    for (let i = 0; i < query.length; i++) {
      queryArr = query[i].split('=');

      if (queryArr.length > 1) {
        const key = decodeURIComponent(queryArr[0]);
        const value = decodeURIComponent(queryArr[1]);

        Shopify.queryParams[key] = value;
      }
    }
  }
  // console.log('Mobile', $(dom.collectionSort)[0])
  // console.log('Desktop', $(dom.collectionSort)[1])

  console.log('isMobile()', isMobile())
  console.log('window.innerWidth', window.innerWidth)

  if (isMobile()) {
    console.log('Mobile els', $(dom.collectionSort)[0])

    $select
      .val('{{ collection.sort_by | default: collection.default_sort_by | escape }}')
      .bind('change', function() {
        Shopify.queryParams.sort_by = $(this).val();
        location.search = $.param(Shopify.queryParams).replace(/\+/g, '%20');
      });
  } else {
    console.log('Desktop els', $(dom.collectionSort)[1])
    $buttons.on('click', event => {
      console.log($(event.target).attr('value'));
      Shopify.queryParams.sort_by = $(event.target).attr('value')
      location.search = $.param(Shopify.queryParams).replace(/\+/g, '%20');
    })
  }
};

export const init = () => {
  select();
  bindUIActions();
}