export default (buttonSelector) => {
    const changeButtons = document.querySelectorAll(buttonSelector);

    function updateSize(parent, sizes, sizeId) {
        const sizeElem = parent.querySelector('.change-size__current');
        const sizeInfoElem = parent.querySelector('.change-size__additional');

        parent.setAttribute('data-size', sizeId);

        sizeElem.textContent = sizes[sizeId].size;
        sizeInfoElem.innerHTML = sizeInfoElem.innerHTML.replace(/[0-9]+\.[0-9]+/, sizes[sizeId].info);
    }

    function clampSize(sizeId, max) {
        sizeId = sizeId > max ? 0 : sizeId;
        sizeId = sizeId < 0 ? max : sizeId;

        return sizeId;
    }

    function onClick(button) {
        const parent = button.closest(".product") || button.closest(".popup"),
            operation = button.getAttribute('data-change'),
            productId = +parent.getAttribute('data-id'),
            currentSizeId = +parent.getAttribute('data-size'),
            sizes = JSON.parse(productsData.textContent)[productId].sizes;
            
        const newSizeId = clampSize(currentSizeId + (operation == 'minus' ? -1 : 1), sizes.length - 1);

        updateSize(parent, sizes, newSizeId);
    }

    changeButtons.forEach(item => item.addEventListener('click', () => onClick(item)));
}