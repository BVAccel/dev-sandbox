import slick from 'slick-carousel';

/**
 * @description Bind UI actions to the component
 * @param {string} element - HTML element
 * @param {ibject} config - Slider configuration
 * @example
 *
 *     bindUIActions('h2', { a: 1, b: 2})
 */
const bindActions = (element, config) => $(element).slick(config);

/**
 * @description Init functions is used to initialize component at template level imports.
 * @example
 *
 *     init()
 */
export const init = (element, config) => bindActions(element, config);