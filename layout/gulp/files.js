const del = require('del');

const source_folder = "src",
    dist_folder = ["dist", "H:/web/ospanel/domains/dist"];

path = {
    src: {
        html: [source_folder + "/html/*.html", "!" + source_folder + "/_*.html"],
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        assets: source_folder + "/assets/**/*.*",
        img: source_folder + "/assets/img/**/*.+(png|jpg|gif|ico|svg|webp)",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        assets: source_folder + "/assets/**/*.*",
        img: source_folder + "/assets/img/**/*.+(png|jpg|gif|ico|svg|webp)",
    },
    build: { html: [], css: [], js: [], assets: [], img: [] }
}

dist_folder.forEach((dist, i) => {
    path.build.html[i] = dist + "/";
    path.build.css[i] = dist + "/assets/css/";
    path.build.js[i] = dist + "/assets/js/";
    path.build.assets[i] = dist + "/assets/";
    path.build.img[i] = dist + "/assets/img/";
});

function clean(cb) {
	del.sync(dist_folder[0]);
    cb();
}

module.exports = {clean, path};