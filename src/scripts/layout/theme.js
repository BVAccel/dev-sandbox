import { focusHash, bindInPageLinks } from '@shopify/theme-a11y';
import { init as initHeader } from "../components/Header";
import { init as initHeroSlider } from "../components/HeroSlider";

import 'styles/theme.scss';
import 'styles/theme.scss.liquid';

// Common a11y fixes
focusHash();
bindInPageLinks();

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroSlider();
});

window.addEventListener('load', () => {});

// HMR
if (module.hot) {
  module.hot.accept();
}

if (module.hot) {
  module.hot.dispose(() => {
    // reset/undo the behavior/side effect that as possibly enabled/enacted
  });
}
