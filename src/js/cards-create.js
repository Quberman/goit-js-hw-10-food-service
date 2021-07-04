import cardsTemplate from '../templates/cards.hbs';

import menu from '../menu.json'

const markup = cardsTemplate(menu);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);