import gallery from './gallery';
import modal from './modal';
import changeSize from './changeSize';

export default () => {
    gallery('.product__img, .popup__slider');
    modal('.modal__popup', ['[data-open-popup]'], ['.popup__close', '.top-panel a']);
    changeSize('[data-change]');
}