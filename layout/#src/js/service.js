const browser = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	isMobile: function() {return (browser.Android() || browser.BlackBerry() || browser.iOS() || browser.Opera() || browser.Windows());}
};

const isMobile = browser.isMobile();

//double tab zoom fix
let lastTouchEnd = 10;
document.addEventListener('touchend', function (e) {
    var now = (new Date()).getTime();

    if (now - lastTouchEnd <= 300 && !$(e.target).is("img") && !$(e.target).is("button")) {
        e.preventDefault();
    }
    lastTouchEnd = now;
    
}, false);