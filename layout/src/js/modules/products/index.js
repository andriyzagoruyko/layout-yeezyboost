import changeSize from './changeSize';
import gallery from './gallery';
import modal from './modal';

export default () => {
    changeSize('[data-change]');
    gallery('.product__img, .popup__slider');
    modal('.modal__popup', ['[data-open-popup]'], ['.popup__close', '.top-panel a']);
}