function toggleModal($product) {
    const $popup =  $(".popup");

    if ($product) {
        setUrlHash('#product-' + $product.attr("data-id"));

        const productId =  $product.attr("data-id");
        const productData = products[productId - 1];

        $(".popup__title").text(productData.name);
        $product.find(".change-size").clone().appendTo(".popup__size");

        updateModalProps(productData.props);
        updateModalSlider(productData.images);

        $popup
            .attr("data-size", $product.attr("data-size"))
            .attr("data-id", $product.attr("data-id"))
            .addClass("active");

        $("body").addClass("modal-opened");

        scrollLock.disablePageScroll($scrolable);
    }
    else {
        if ($popup.is(".active")) {
            setUrlHash("#");

            $popup.removeClass("active");
            $("body").removeClass("modal-opened");

            $(".popup__info").empty();
            $(".popup__size").empty();

            scrollLock.enablePageScroll($scrolable);
        }
    }
}

function updateModalProps(props) {
    props.forEach(prop => {
        $("<div>" + prop.name + '<strong>' + prop.value + "</strong></div>").appendTo(".popup__info");
    });
}

function updateModalSlider(images) {
    let popupSlider = document.querySelector('.popup__slider').swiper
    
    let slides = new Array();

    images.forEach(image => {
        slides.push(
            '<div class="swiper-slide">' +
            '<a href="' + image.full + '" data-index="0">' +
            '<img src="' + image.thumb + '" alt="" >' +
            '</a></div>'
        )
    });

    popupSlider.removeAllSlides();
    popupSlider.update();
    popupSlider.appendSlide(slides);
    popupSlider.update();
    popupSlider.slideToLoop(0, 0);
}

function toggleMenu(state = -1) {
    const $menu = $(".menu")

    state = state == -1 ? !$menu.is(".active") : state;

    $menu.toggleClass("active", state);
    $(".top-panel__burger").toggleClass("active", state);

    if (!$('.popup').hasClass("active")) {
        if (state) {
            scrollLock.disablePageScroll($scrolable);
        }
        else {
            scrollLock.enablePageScroll($scrolable);
        }
    }
}

$(function () {
    $("[data-open-popup]").on("click", function (e) {
        e.preventDefault();
        toggleModal($(this).closest(".product"));
    });

    $(".popup__overlay, .popup__close, .menu__item").on("click", function () {
        toggleModal(false);
    });

    $(document).on("mousedown", ".modal-opened", function (e) {
        if ($(e.target).is(".popup")) {
            toggleModal(false);
        }
    });

    $(".top-panel__burger").on("click", function () {
        toggleMenu();
    });

    $(document).on('ready', function(){
        var url = window.location.hash;

        if (url.indexOf('#product') != -1) {
            const productId = url.split("-")[1];
    
            if (productId) {
                const $product = $('.product[data-id=' + productId + ']');
    
                if ($product.length) {
                    scrollToElem($product);
                    toggleModal($product);
                }
            }
        }
    })

    $("a").on("click", function (e) {
        let hash = this.hash;

        if (this.hash.length) {
            e.preventDefault(e);
            setUrlHash(hash);

            let $scrollTo = $(hash);

            if ($scrollTo.length) {
                toggleModal(false);
                toggleMenu(false);
                scrollToElem($scrollTo);
            }
        }
    });
});
