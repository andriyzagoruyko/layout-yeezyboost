
export default function updateModalData(productId, productSize, productData) {
    const popupTitle = document.querySelector('.popup__title'),
        popupInfo = document.querySelector('.popup__info'),
        popupSize = document.querySelector('.popup__size'),
        popupSlider = document.querySelector('.popup__slider').swiper;

    function updateProps(props) {
        popupInfo.innerHTML = '';
        
        props.forEach(prop => {
            const el = document.createElement('div');
            el.innerHTML = `${prop.name} <strong>${prop.value}</strong>`;
            popupInfo.appendChild(el);
        });
    }

    function updateSlider(images) {
        let slides = new Array();

        images.forEach(image => {
            slides.push(
                `<div class="swiper-slide">
                    <a href="${image.full}"><img src="${image.thumb}" alt=""></a>
                </div>`);
        });

        popupSlider.removeAllSlides();
        popupSlider.update();
        popupSlider.appendSlide(slides);
        popupSlider.update();
        popupSlider.slideToLoop(0, 0);
    }

    function updateSize(index) {
        const elemCurrentSize = popupSize.querySelector('.change-size__current');
        const elemCurrentSizeInfo = popupSize.querySelector('.change-size__additional span');
        elemCurrentSize.textContent = productData.sizes[index].size;
        elemCurrentSizeInfo.textContent = productData.sizes[index].info;
    }

    function updateAttributes(id, size) {
        modal.setAttribute('data-id', id);
        modal.setAttribute('data-size', size);
    }

    history.pushState(null, null, `#product-${productId}`);
    popupTitle.textContent = productData.name;

    updateProps(productData.props);
    updateSlider(productData.images);
    updateSize(productSize);
    updateAttributes(productId, productSize);
}