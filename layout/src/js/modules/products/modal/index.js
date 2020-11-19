import scrollLock from '../../helpers/scrolLock';
import updateModalData from './update.js';

export default (popupSelector, openPopupSelectors, closePopupSelectors) => {
    const modal = document.querySelector(popupSelector);

    function activateModal(active) {
        scrollLock(active);

        modal.classList.toggle('active', active);
        document.body.classList.toggle('modal-opened', active);

        !active && history.pushState(null, null, `#`);
    }
    
    function toggleModal(productElem) {
        if (productElem) {
            const productId = +productElem.getAttribute('data-id'),
                productSize = productElem.getAttribute('data-size'),
                productData = JSON.parse(productsData.textContent)[productId];
    
            updateModalData(productId, productSize, productData);
            activateModal(true);
        } 
        else {
            modal.matches('.active') && activateModal(false);
        }
    }

    function bindModal(openPopupSelectors, closePopupSelectors) {
        const openPopup = document.querySelectorAll(openPopupSelectors),
        closePopup = document.querySelectorAll(closePopupSelectors);

        openPopup.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                toggleModal(item.closest('.product'));
            });
        });
    
        closePopup.forEach(btn => {
            btn.addEventListener('click', () => toggleModal(false));
        });
    }

    bindModal(openPopupSelectors, closePopupSelectors);
}