let headerOpacity;
const $header_panel = document.querySelector(".top-panel__wrapper");
const $header_gradient = document.querySelector(".header__gradient-bg");

window.onload = headerBackgroudColor;
window.onscroll = headerBackgroudColor;

function headerBackgroudColor() {
    let windowScrollTop = window.scrollY || window.scrollTop;

    !windowScrollTop && (windowScrollTop = 0);

    $header_panel.style.backgroundColor = "rgba(0, 0, 0," + windowScrollTop / 400 + ")";

    if (!isMobile) {
        $header_gradient.style.opacity = Math.clip(headerOpacity + windowScrollTop / 800, headerOpacity, 1.0);
    }
}

$(function(){
    headerOpacity = +$(".header__gradient-bg").css("opacity");
})