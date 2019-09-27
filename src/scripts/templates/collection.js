import 'styles/templates/collection/index.scss';
import { init as initFilters } from '../components/filters';
import { init as initSort } from '../components/sort';

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
  initSort();
});

window.addEventListener('load', () => {});
