import dom from '../common/Dom';

const transitionDuration = 250;
let expandedEl = null;

const $elements = $(dom.collectionFiltersContainer);

const setExpandedClass = action => {
  if (action === 'add') {
    $elements.addClass('is-expanded');
  } else if (action === 'remove') {
    $elements.removeClass('is-expanded');
  }
}

const expand = $element => {
  setExpandedClass('remove');
  setTimeout(() => {
    $element.addClass('is-expanded');
  }, transitionDuration);

  expandedEl = $element;
}

const shrink = () => {
  setExpandedClass('remove');
  expandedEl = null;
}

export const bindUIActions = () => {
  $(dom.collectionFilters).on('click', event => {
    const $target = $(event.target);
    const attr = $target.attr(dom.collectionFiltersTitleAttr);

    if (typeof attr !== typeof undefined && attr !== false) {
      const $targetElement = $target.next(dom.collectionFiltersContainer);

      $targetElement.is(expandedEl) ? shrink() : expand($targetElement);
    }
  });
};

export const init = () => bindUIActions();