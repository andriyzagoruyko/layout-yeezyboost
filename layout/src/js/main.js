'use strict';

import header from './modules/header'
import products from './modules/products';
import forms from './modules/forms';
import anchors from './modules/anchors';
import navigation from './modules/navigation';
import touchMouse from './modules/touchMouse';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    header();
    touchMouse();
    anchors();
    products();
    forms('.order-form .form');
    navigation(['.top-panel__burger', '.menu'], 'active');
    timer('.timer');
});



