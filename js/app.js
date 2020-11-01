const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');

document.addEventListener('submit', () => {
  alert('Checkout successful');
  inputs.forEach((input) => {
    input.value = '';
  });
  select.value = '';
});
