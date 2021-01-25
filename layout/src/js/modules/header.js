
import browser from './helpers/browser'
import mathClip from './helpers/mathClip'

export default () => {
    let windowScrollTop = 0,
        headerOpacity;

    const headerPanel = document.querySelector(".top-panel__wrapper"),
            headerGradient = document.querySelector(".header__gradient-bg");

    function headerBackgroudColor() {
        windowScrollTop = window.pageYOffset || window.scrollY;
        headerPanel.style.backgroundColor = `rgba(0, 0, 0, ${windowScrollTop / 400})`;

        if (!browser.isMobile()) {
            headerGradient.style.opacity = mathClip(headerOpacity + windowScrollTop / 800, headerOpacity, 1.0);
        }
    }

    window.addEventListener('scroll', headerBackgroudColor);
    window.addEventListener('load', () => {
        headerOpacity = +getComputedStyle(headerGradient).opacity;
        headerBackgroudColor();
    });
}
