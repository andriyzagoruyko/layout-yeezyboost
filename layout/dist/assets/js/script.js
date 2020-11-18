/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*let $scrolable;\r\n\r\n$(function() {\r\n    $scrolable = $('.menu, .popup').get()\r\n\r\n    new Swiper('.product__img , .popup__slider', {\r\n        loop: true,\r\n        navigation: {\r\n            nextEl: '.slider__btn-next',\r\n            prevEl: '.slider__btn-prev',\r\n        },\r\n        pagination: {\r\n            el: '.swiper-pagination',\r\n            clickable: true,\r\n        },\r\n    });\r\n});\r\n\r\n//image gallery\r\n$(function() {\r\n    $(document).on(\"click\", \".product__img, .popup__slider\", function (e) {\r\n        e.preventDefault();\r\n\r\n        if (!$(e.target).is(\"img\")) {\r\n            return;\r\n        }\r\n\r\n        const $slider = $(this);\r\n        const swiper = this.swiper;\r\n        const $slides = $(swiper.slides).not('.swiper-slide-duplicate');\r\n\r\n        let items = [];\r\n\r\n        $slides.each(function () {\r\n            items.push({\r\n                src: $(this).find('a').attr('href'),\r\n            });\r\n        });\r\n\r\n        $slider.lightGallery({\r\n            dynamic: true,\r\n            dynamicEl: items,\r\n            download: false,\r\n            speed: 200\r\n        });\r\n\r\n        $slider.one('onAfterOpen.lg', function () {\r\n            $slider.data('lightGallery').slide(swiper.realIndex);\r\n        });\r\n    });\r\n});\r\n\r\n//change size\r\n$(function () {\r\n    $(document).on(\"click\", \"[data-change]\", function () {\r\n        const $button = $(this);\r\n        let $item = $button.closest(\".product\");\r\n\r\n        $item = $item.length ? $item : $button.closest(\".popup\");\r\n\r\n        const productID = +$item.attr('data-id') - 1;\r\n        const productSizes = products[productID].sizes;\r\n        let size = +$item.attr('data-size');\r\n        \r\n        size += $button.attr('data-change') == 'minus' ? -1 : 1;\r\n\r\n        if (size >= productSizes.length) {\r\n            size = 0;\r\n        }\r\n\r\n        if (size < 0) {\r\n            size = productSizes.length - 1;\r\n        }\r\n\r\n        const newSize = productSizes[size];\r\n        \r\n        $item.attr(\"data-size\", size);\r\n        $item.find(\".change-size__current\").text(newSize[0]);\r\n\r\n        let $info = $item.find(\".change-size__additional\");\r\n        \r\n        $info.html($info.html().replace(/[0-9]+\\.[0-9]+/, newSize[1]));\r\n    });\r\n})\r\n*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKmxldCAkc2Nyb2xhYmxlO1xyXG5cclxuJChmdW5jdGlvbigpIHtcclxuICAgICRzY3JvbGFibGUgPSAkKCcubWVudSwgLnBvcHVwJykuZ2V0KClcclxuXHJcbiAgICBuZXcgU3dpcGVyKCcucHJvZHVjdF9faW1nICwgLnBvcHVwX19zbGlkZXInLCB7XHJcbiAgICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgIG5leHRFbDogJy5zbGlkZXJfX2J0bi1uZXh0JyxcclxuICAgICAgICAgICAgcHJldkVsOiAnLnNsaWRlcl9fYnRuLXByZXYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy9pbWFnZSBnYWxsZXJ5XHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLnByb2R1Y3RfX2ltZywgLnBvcHVwX19zbGlkZXJcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghJChlLnRhcmdldCkuaXMoXCJpbWdcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgJHNsaWRlciA9ICQodGhpcyk7XHJcbiAgICAgICAgY29uc3Qgc3dpcGVyID0gdGhpcy5zd2lwZXI7XHJcbiAgICAgICAgY29uc3QgJHNsaWRlcyA9ICQoc3dpcGVyLnNsaWRlcykubm90KCcuc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZScpO1xyXG5cclxuICAgICAgICBsZXQgaXRlbXMgPSBbXTtcclxuXHJcbiAgICAgICAgJHNsaWRlcy5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaXRlbXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBzcmM6ICQodGhpcykuZmluZCgnYScpLmF0dHIoJ2hyZWYnKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRzbGlkZXIubGlnaHRHYWxsZXJ5KHtcclxuICAgICAgICAgICAgZHluYW1pYzogdHJ1ZSxcclxuICAgICAgICAgICAgZHluYW1pY0VsOiBpdGVtcyxcclxuICAgICAgICAgICAgZG93bmxvYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBzcGVlZDogMjAwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRzbGlkZXIub25lKCdvbkFmdGVyT3Blbi5sZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNsaWRlci5kYXRhKCdsaWdodEdhbGxlcnknKS5zbGlkZShzd2lwZXIucmVhbEluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vY2hhbmdlIHNpemVcclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiW2RhdGEtY2hhbmdlXVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQodGhpcyk7XHJcbiAgICAgICAgbGV0ICRpdGVtID0gJGJ1dHRvbi5jbG9zZXN0KFwiLnByb2R1Y3RcIik7XHJcblxyXG4gICAgICAgICRpdGVtID0gJGl0ZW0ubGVuZ3RoID8gJGl0ZW0gOiAkYnV0dG9uLmNsb3Nlc3QoXCIucG9wdXBcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJRCA9ICskaXRlbS5hdHRyKCdkYXRhLWlkJykgLSAxO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RTaXplcyA9IHByb2R1Y3RzW3Byb2R1Y3RJRF0uc2l6ZXM7XHJcbiAgICAgICAgbGV0IHNpemUgPSArJGl0ZW0uYXR0cignZGF0YS1zaXplJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2l6ZSArPSAkYnV0dG9uLmF0dHIoJ2RhdGEtY2hhbmdlJykgPT0gJ21pbnVzJyA/IC0xIDogMTtcclxuXHJcbiAgICAgICAgaWYgKHNpemUgPj0gcHJvZHVjdFNpemVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzaXplID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzaXplIDwgMCkge1xyXG4gICAgICAgICAgICBzaXplID0gcHJvZHVjdFNpemVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBuZXdTaXplID0gcHJvZHVjdFNpemVzW3NpemVdO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRpdGVtLmF0dHIoXCJkYXRhLXNpemVcIiwgc2l6ZSk7XHJcbiAgICAgICAgJGl0ZW0uZmluZChcIi5jaGFuZ2Utc2l6ZV9fY3VycmVudFwiKS50ZXh0KG5ld1NpemVbMF0pO1xyXG5cclxuICAgICAgICBsZXQgJGluZm8gPSAkaXRlbS5maW5kKFwiLmNoYW5nZS1zaXplX19hZGRpdGlvbmFsXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICRpbmZvLmh0bWwoJGluZm8uaHRtbCgpLnJlcGxhY2UoL1swLTldK1xcLlswLTldKy8sIG5ld1NpemVbMV0pKTtcclxuICAgIH0pO1xyXG59KVxyXG4qL1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ })

/******/ });