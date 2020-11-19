import makeRequest from '../helpers/makeRequest'

function sendData(formData) {
    return makeRequest('assets/send.php', {
        method: 'POST',
        body: formData
    });
}

function showMessage(formBlock, result) {
    const response = formBlock.querySelector('.order-form__responce');

    response.classList.add(result.status);
    response.innerHTML = result.message;
    response.style.display = 'block';
}

export default async function formSubmit(form) {
    const formData = new FormData(form),
        popup = form.closest('.popup'),
        formBlock = form.closest('.order-form');

    if (popup) {
        const productId = popup.getAttribute('data-id'),
            sizeId = popup.getAttribute('data-size'),
            product = JSON.parse(productsData.textContent)[productId];

        formData.append('product', `ID-${productId} ${product.name} Размер: ${product.sizes[sizeId].size}`);
    }

    formBlock.classList.add("processing");
    
    const result = await sendData(formData).finally(() => formBlock.classList.remove("processing"));

    form.style.display = 'none';
    showMessage(formBlock, result);
};



