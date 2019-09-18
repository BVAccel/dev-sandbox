import dom from '../common/Dom';

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

  $(dom.collectionSort)
    .val('{{ collection.sort_by | default: collection.default_sort_by | escape }}')
    .bind('change', function() {
      Shopify.queryParams.sort_by = $(this).val();
      location.search = $.param(Shopify.queryParams).replace(/\+/g, '%20');
    });
};

export const init = () => bindUIActions();