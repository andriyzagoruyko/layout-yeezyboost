@@include('vendors.js');
@@include('service.js');
@@include('functions.js');
@@include('data.js');
@@include('header.js');
@@include('timer.js');
@@include('forms.js');
@@include('modal.js');

let $scrolable;

$(function() {
    $scrolable = $('.menu, .popup').get()

    new Swiper('.product__img , .popup__slider', {
        loop: true,
        navigation: {
            nextEl: '.slider__btn-next',
            prevEl: '.slider__btn-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

//image gallery
$(function() {
    $(document).on("click", ".product__img, .popup__slider", function (e) {
        e.preventDefault();

        if (!$(e.target).is("img")) {
            return;
        }

        const $slider = $(this);
        const swiper = this.swiper;
        const $slides = $(swiper.slides).not('.swiper-slide-duplicate');

        let items = [];

        $slides.each(function () {
            items.push({
                src: $(this).find('a').attr('href'),
            });
        });

        $slider.lightGallery({
            dynamic: true,
            dynamicEl: items,
            download: false,
            speed: 200
        });

        $slider.one('onAfterOpen.lg', function () {
            $slider.data('lightGallery').slide(swiper.realIndex);
        });
    });
});

//change size
$(function () {
    $(document).on("click", "[data-change]", function () {
        const $button = $(this);
        let $item = $button.closest(".product");

        $item = $item.length ? $item : $button.closest(".popup");

        const productID = +$item.attr('data-id') - 1;
        const productSizes = products[productID].sizes;
        let size = +$item.attr('data-size');
        
        size += $button.attr('data-change') == 'minus' ? -1 : 1;

        if (size >= productSizes.length) {
            size = 0;
        }

        if (size < 0) {
            size = productSizes.length - 1;
        }

        const newSize = productSizes[size];
        
        $item.attr("data-size", size);
        $item.find(".change-size__current").text(newSize[0]);

        let $info = $item.find(".change-size__additional");
        
        $info.html($info.html().replace(/[0-9]+\.[0-9]+/, newSize[1]));
    });
})





