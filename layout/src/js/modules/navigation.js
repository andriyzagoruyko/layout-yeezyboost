import scrollLock from './helpers/scrolLock'

export default (selectors, activeClass) => {
    const elements = selectors.map(item => document.querySelector(item));
    let menuEnabled = false;

    function toggleNav(enable) {
        menuEnabled = enable;
        elements.forEach(item => item.classList.toggle(activeClass, menuEnabled));
        scrollLock(menuEnabled);
    }

    document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.matches(selectors[0]) || target.closest(selectors[0])) {
            toggleNav(!menuEnabled);
            return;
        }

        if (menuEnabled && (target.matches('a') || target.closest('a'))) {
            toggleNav(false);
        }
    });
};