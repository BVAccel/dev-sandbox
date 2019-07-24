import 'styles/templates/cart/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  const quantityInputs = document.querySelectorAll('[data-quantity-input]');
  const quantitySubmitButton = document.querySelector('[data-quantity-submit]');

  quantityInputs.forEach((input) => {
    input.addEventListener('change', (event) => {
        quantitySubmitButton.click();
    });
  });
});

window.addEventListener('load', () => {});
