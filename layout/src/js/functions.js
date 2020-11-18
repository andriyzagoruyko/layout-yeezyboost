
function scrollToElem($elem) {
    $('html, body').animate({
        scrollTop: $elem.offset().top - ($elem.hasClass("header") ? 0 : $(".top-panel__wrapper").height())
    }, 600);
}

function setUrlHash(hash) {
    if (history.pushState) {
        history.pushState(null, null, hash);
    }
    else {
        location.hash = hash;
    }
}

Math.clip = function (number, min, max) {
    return Math.max(min, Math.min(number, max));
}

$.fn.setCursorPosition = function (pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
};