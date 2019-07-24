import 'styles/templates/product/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const placeholder = document.getElementById('product-option-value-placeholder');
  const option = document.getElementById('product-option-value');

  option.addEventListener('change', (event) => {
    placeholder.innerHTML = event.target.options[event.target.selectedIndex].text;
  });
});

window.addEventListener('load', () => {});
