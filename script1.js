'use strict';

const show = document.getElementById('show');
const main = document.getElementById('main');

show.addEventListener('click', function () {
    main.className = main.className === 'menu-open' ? '' : 'menu-open';
});