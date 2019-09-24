import { focusHash, bindInPageLinks } from '@shopify/theme-a11y';
import { init as initHeader } from '../components/header';
import { init as initInstagram } from '../components/instagram';
import { init as initInlineCart } from '../components/inline-cart';

import 'styles/theme.scss';
import 'styles/theme.scss.liquid';

// Common a11y fixes
focusHash();
bindInPageLinks();

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initInstagram();
  initInlineCart();
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
