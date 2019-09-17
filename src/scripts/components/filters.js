import dom from '../common/Dom';
import { throttle } from '../common/Helpers';

const throttleDuration = 250;
const transitionDuration = 250;
const breakpoint = 993;
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

const isMobile = () => window.innerWidth < breakpoint;

const windowResize = () => {
  console.log('windowResize');
  if (!isMobile()) {
    console.log('isMobile - ', isMobile())
    $(dom.collectionFilters).removeClass('is-expanded');
  }
}

export const bindUIActions = () => {
  $(window).on('resize', throttle(windowResize, throttleDuration));

  $(dom.collectionFilters).on('click', event => {
    const $target = $(event.target);
    const attr = $target.attr(dom.collectionFiltersTitleAttr);

    if (typeof attr !== typeof undefined && attr !== false) {
      const $targetElement = $target.next(dom.collectionFiltersContainer);

      $targetElement.is(expandedEl) ? shrink() : expand($targetElement);
    }
  });

  $(dom.collectionFilterToggle).on('click', event => {
    $(dom.collectionFilters).toggleClass('is-expanded');
  });
};

export const init = () => bindUIActions();