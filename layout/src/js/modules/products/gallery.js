import Swiper, { Navigation, Pagination }  from 'swiper';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

export default (selectors) => {
    function parseSlides(swiper) {
        const original = swiper.slides.filter(slide => !slide.matches('.swiper-slide-duplicate'));

        return original.map(slide => {
            return {
                src: slide.querySelector('a').getAttribute('href'),
                w: 1280,
                h: 960
            }
        });
    }
    
    function openPhotoSwipe(items, index = 0) {
        const pswp = document.querySelector('.pswp');

        new PhotoSwipe(pswp, PhotoSwipeUI_Default, items, {
            index,
            history: false,
        })
        .init();
    }

    Swiper.use(Navigation);
    Swiper.use(Pagination);

    new Swiper(selectors, {
        loop: true,
        threshold: 5,
        navigation: {
            nextEl: '.slider__btn-next',
            prevEl: '.slider__btn-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        on: {
            click: (swiper, e) => {
                if (!e.target.matches('button') &&
                    !e.target.classList.contains('swiper-pagination-bullet')) {
                    openPhotoSwipe(parseSlides(swiper), swiper.realIndex);
                }
            }
        }
    });

    document.addEventListener('click', (e) => e.target.closest('.swiper-slide') && e.preventDefault());
}

