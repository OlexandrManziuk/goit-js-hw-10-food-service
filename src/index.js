import './styles.css';
import data from './menu';
import template from './tpl/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const markup = template(data);
const body = document.querySelector('body');
const menu = document.querySelector('.js-menu');
const input = document.querySelector('input.js-switch-input');
const currentTheme = localStorage.getItem('theme');

menu.insertAdjacentHTML('afterbegin', markup);

const classSwitcher = (add, remove) => {
  document.body.classList.remove(remove);
  document.body.classList.add(add);
};

if (currentTheme !== Theme.DARK) {
  input.checked = false;
  body.classList.add(Theme.LIGHT);
} else {
  input.checked = true;
  body.classList.add(Theme.DARK);
}

input.addEventListener('change', e => {
  if (!e.target.checked) {
    classSwitcher('light-theme', 'dark-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  } else {
    classSwitcher('dark-theme', 'light-theme');
    localStorage.setItem('theme', Theme.DARK);
  }
});
