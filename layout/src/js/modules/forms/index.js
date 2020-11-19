import Validator from '../form-validator';
import isMobilePhone from 'validator/lib/isMobilePhone';
import formSubmit from './formSubmit';

const rules = {
    name: {
        required: true
    },
    phone: {
        required: true,
        phone: true
    }
}

const messages = {
    name: {
        required: 'Введите имя'
    },
    phone: {
        required: 'Введите номер',
        phone: 'Введите корректный номер'
    }
}

Validator.setValidationType('phone', (str) => isMobilePhone(str, 'uk-UA'));

export default (selector) => {
    new Validator({
        selector,
        rules,
        messages,
        onSubmit: (form) => formSubmit(form)
    });
}