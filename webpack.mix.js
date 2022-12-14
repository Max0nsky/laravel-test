const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles(
    [
        "resources/assets/admin/plugins/fontawesome-free/css/all.css",
        "resources/assets/admin/css/adminlte.css",
    ],
    "public/assets/admin/css/admin.css"
);

mix.scripts(
    [
        "resources/assets/admin/plugins/jquery/jquery.js",
        "resources/assets/admin/plugins/bootstrap/js/bootstrap.bundle.js",
        "resources/assets/admin/js/adminlte.js",
        "resources/assets/admin/js/demo.js",
    ],
    "public/assets/admin/js/admin.js"
);

mix.copyDirectory(
    "resources/assets/admin/plugins/fontawesome-free/webfonts",
    "public/assets/admin/webfonts"
);

mix.copyDirectory(
    "resources/assets/admin/img",
    "public/assets/admin/img"
);

mix.copy(
    "resources/assets/admin/css/adminlte.css.map",
    "public/assets/admin/css/admin.css.map"
);
