import dom from "../common/Dom";

const toggleNavList = () => $(dom.headerNavListContainer).toggleClass('is-expanded');
const bindActions = () => $(dom.headerHamburger).on('click', toggleNavList);

export const init = () => bindActions();
