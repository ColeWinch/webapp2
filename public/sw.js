// //self.importScripts('')

// //files to cache
// var cacheName = ('web-v1');
// var appShellFiles = [
//     'css/styles.css'
// ]

// // installing Service Worker
// self.addEventListener('install', function (e) {
//     console.log('[Service Worker] Install');
//     e.waitUntil(
//         caches.open(cacheName).then(function (cache) {
//             console.log('[Service Worker] Caching all: app shell and content');
//             return cache.addAll(appShellFiles);
//         })
//     );
// });

// // fetching content using service worker
// self.addEventListener('fetch', function(e) {
//     e.respondWith(
//         caches.match(e.request).then(function(r) {
//             console.log('[Service Worker] Fetching resource: ' + e.request.url);
//             return r || fetch(e.request).then(function(reponse) {
//                 return caches.open(cacheName).then(function(cache) {
//                     console.log('[Service Worker] Caching new resource: ' + e.request.url);
//                     cache.put(e.request, response.clone());
//                     return response;
//                 });
//             });
//         })
//     );
// });

// // activating service worker
// self.addEventListener('activate', (e) => {
//     e.waitUntil(
//         caches.keys().then((keyList) => {
//             return Promise.all(keyList.map((key) => {
//                 if (cacheName.indexOf(key)=== -1) {
//                     return caches.delete(key);
//                 }
//             }));
//         })
//     );
// });