import dom from '../common/Dom';

export const bindUIActions = () => {
  $(dom.collectionFilterToggle).on('click', event => {
    $(dom.collectionFilters).toggleClass('is-expanded');
  });
};

export const init = () => bindUIActions();