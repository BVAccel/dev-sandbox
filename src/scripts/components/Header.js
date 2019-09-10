import dom from "../common/Dom";

const bindActions = () => {
  $(dom.headerHamburger).on('click', () => {
    $(dom.headerNavListContainer).toggleClass('is-expanded');
  });
}

export const init = () => {
  bindActions();
}