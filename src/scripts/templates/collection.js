import 'styles/templates/collection/index.scss';
import { init as initFilters } from '../components/filters';
import { init as initFiltersToggle } from '../components/filters-toggle';

document.addEventListener('DOMContentLoaded', () => {
  initFiltersToggle();
  initFilters();
});

window.addEventListener('load', () => {});
