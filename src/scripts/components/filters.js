import dom from '../common/Dom';
import { throttle } from '../common/Helpers';

const throttleDuration = 250;
const transitionDuration = 250;
const breakpoint = 993;
const $filterContainers = $(dom.collectionFiltersContainer);

/**
 * @description Add `is-expanded` class to filterContainers
 * @param {action} string - `add` or `remove` action
 *
 * @example
 *
 *     setClassAction('add')
 */
const setClassAction = (action, $elements = $filterContainers) => {
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
  setClassAction('remove');
  setTimeout(() => {
    $element.addClass('is-expanded');
  }, transitionDuration);
}

/**
 * @description Handle shrink action
 * @param {element} $element - jQuery element/elements
 *
 * @example
 *
 *     shrink()
 */
const shrink = () => setClassAction('remove');

/**
 * @description Check mobile viewport
 * @return {boolean}
 * @example
 *
 *     isMobile()
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

  $(dom.collectionFilters).on('click', dom.collectionFiltersTitle, event => {
    const $this = $(event.currentTarget);
    const $container = $this.next();

    if ($container.hasClass('is-expanded')) {
      shrink();
    } else {
      expand($container);
    }
  });

  $(dom.collectionFilterToggle).on('click', event => $(dom.collectionFilters).toggleClass('is-expanded'));
};

/**
 * @description Init functions is used to initialize component at template level imports.
 * @example
 *
 *     init()
 */
export const init = () => bindUIActions();