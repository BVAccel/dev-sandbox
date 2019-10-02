import dom from "../common/Dom";

/**
 * @description Toggle Navigation List
 * @example
 *
 *     toggleNavList()
 */
const toggleNavList = () => $(dom.headerNavListContainer).toggleClass('is-expanded');

/**
 * @description Bind UI actions to the component
 * @example
 *
 *     bindUIActions()
 */
const bindActions = () => $(dom.headerHamburger).on('click', toggleNavList);

/**
 * @description Init functions is used to initialize component at template level imports.
 * @example
 *
 *     init()
 */
export const init = () => bindActions();
