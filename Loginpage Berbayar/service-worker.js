// -----------------------------------------------------------------
// Service Worker:
// Template Name: Suha - Multipurpose Ecommerce Mobile HTML Template
// Template Author: Designing World
// Template Author URL: https://themeforest.net/user/designing-world
// -----------------------------------------------------------------

const staticCacheName = 'pre-cache-v1.2';
const dynamicCacheName = 'runtime-cache-v1.2';

// Pre Caching Assets
const precacheAssets = [
    '/',
    'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2',
    'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2',
    'css/default/lineicons.min.css',
    'css/animate.css',
    'css/bootstrap.min.css',
    'css/font-awesome.min.css',
    'css/owl.carousel.min.css',
    'fonts/fontawesome-webfont.eot',
    'fonts/fontawesome-webfont.svg',
    'fonts/fontawesome-webfont.ttf',
    'fonts/fontawesome-webfont.woff',
    'fonts/fontawesome-webfont.woff2',
    'fonts/FontAwesome.otf',
    'fonts/LineIcons.eot',
    'fonts/LineIcons.svg',
    'fonts/LineIcons.ttf',
    'fonts/LineIcons.woff',
    'fonts/LineIcons.woff2',
    'img/core-img/curve.png',
    'img/core-img/curve2.png',
    'img/core-img/dot-blue.png',
    'img/core-img/dot.png',
    'img/core-img/logo-small.png',
    'img/core-img/logo-white.png',
    'img/bg-img/no-internet.png',
    'img/icons/icon-128x128.png',
    'img/icons/icon-144x144.png',
    'img/icons/icon-152x152.png',
    'img/icons/icon-167x167.png',
    'img/icons/icon-180x180.png',
    'img/icons/icon-192x192.png',
    'img/icons/icon-384x384.png',
    'img/icons/icon-512x512.png',
    'img/icons/icon-72x72.png',
    'img/icons/icon-96x96.png',
    'js/default/active.js',
    'js/default/dark-mode-switch.js',
    'js/default/jquery.passwordstrength.js',
    'js/default/otp-timer.js',
    'js/bootstrap.bundle.min.js',
    'js/jquery.countdown.min.js',
    'js/jquery.counterup.min.js',
    'js/jquery.easing.min.js',
    'js/jquery.min.js',
    'js/owl.carousel.min.js',
    'js/pwa.js',
    'js/waypoints.min.js',
    'home.html',
    'intro.html',
    'login.html',
    'manifest.json',
    'offline.html',
    'message.html',
    'cart.html',
    'pages.html',
    'settings.html',
    'style.css'
];

// INSTALL Event
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(staticCacheName).then(function (cache) {
            return cache.addAll(precacheAssets);
        })
    );
});

// ACTIVATE Event
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            );
        })
    );
});

// FETCH Event
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(cacheRes => {
            return cacheRes || fetch(event.request).then(response => {
                return caches.open(dynamicCacheName).then(function (cache) {
                    cache.put(event.request, response.clone());
                    return response;
                })
            });
        }).catch(function() {
            // Fallback Page, When No Internet Connection
            return caches.match('offline.html');
          })
    );
});