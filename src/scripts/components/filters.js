import dom from '../common/Dom';
import { throttle } from '../common/Helpers';

const throttleDuration = 250;
const transitionDuration = 250;
const breakpoint = 993;
let expandedEl = null;

const $elements = $(dom.collectionFiltersContainer);

/**
 * @description Add `is-expanded` class to elements
 * @param {action} string - `add` or `remove` action
 *
 * @example
 *
 *     setExpandedClass('add')
 */
const setExpandedClass = action => {
  if (action === 'add') {
    $elements.addClass('is-expanded');
  } else if (action === 'remove') {
    $elements.removeClass('is-expanded');
  }
}


/**
 * @description Handle expand action
 * @param {object} $element - jQuery element
 *
 * @example
 *
 *     expand($('[data-selector]'))
 */
const expand = $element => {
  setExpandedClass('remove');
  setTimeout(() => {
    $element.addClass('is-expanded');
  }, transitionDuration);

  expandedEl = $element;
}


/**
 * @description Handle shrink action
 * @param {element} $element - jQuery element
 *
 * @example
 *
 *     shrink()
 */
const shrink = () => {
  setExpandedClass('remove');
  expandedEl = null;
}

/**
 * @description Check mobile viewport
 * @return {boolean}
 * @example
 *
 *     shrink()
 */
const isMobile = () => window.innerWidth < breakpoint;

/**
 * @description Handle window resize
 * @example
 *
 *     windowResize()
 */
const windowResize = () => {
  if (!isMobile()) {
    $(dom.collectionFilters).removeClass('is-expanded');
  }
}

/**
 * @description Bind UI actions to the component
 * @example
 *
 *     bindUIActions()
 */
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

/**
 * @description Init functions is used to initialize component at template level imports.
 * @example
 *
 *     init()
 */
export const init = () => bindUIActions();