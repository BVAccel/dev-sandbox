import dom from '../common/Dom';
import select from './select';

// Get Mobile and Desktop sort elements
const $select = $($(dom.collectionSort)[0]);
const $buttons = $($(dom.collectionSort)[1]);


/**
 * @description Initialize Select Sort
 * @example
 *
 *     initSelectSort()
 */
const initSelectSort = () => {
  const defaultSortBy = $select.attr('data-collection-sort');
  $select.val(defaultSortBy)
};

/**
 * @description Set up Shopify Query Params
 * @example
 *
 *     shopifyQueryParams()
 */
const shopifyQueryParams = () => {
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
}

/**
 * @description Bind UI actions to the component
 * @example
 *
 *     bindUIActions()
 */
export const bindUIActions = () => {
  $select.on('change', function() {
    Shopify.queryParams.sort_by = $(this).val();
    location.search = $.param(Shopify.queryParams).replace(/\+/g, '%20');
  });

  $buttons.on('click', event => {
    Shopify.queryParams.sort_by = $(event.target).attr('value')
    location.search = $.param(Shopify.queryParams).replace(/\+/g, '%20');
  });
};

/**
 * @description Init functions is used to initialize component at template level imports.
 * @example
 *
 *     init()
 */
export const init = () => {
  initSelectSort();
  select();
  shopifyQueryParams();
  bindUIActions();
}