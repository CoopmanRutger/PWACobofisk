// "use strict";

// const cacheName1 = "cacheName1";
// const urlsToCache = ['/', '/index.html', 'general.html', 'products.html', 'employees.html', 'orderForms.html', '/assets/js/index.js', 
//                         '/assets/js/all.js','/assets/js/employees.js','/assets/js/expectedProducts.js','/assets/js/fetchcalls.js',
//                         '/assets/js/main.js','/assets/js/index.js', '/assets/js/productDetails.js', '/assets/js/products.js',
//                         '/assets/css/screen.css', '/assets/css/reset.css', '/assets/css/bootstrap.min.css', '/manifest.webmanifest'
//                     ];


// self.addEventListener("install", function(e) {
//     e.waitUntil(
//         caches.open(cacheName1).then(Promise.all(urlsToCache)
//         ));
//     console.log("Performing service worker install ...");
//     //  self.skipWaiting();
// });


// self.addEventListener("fetch", function(e) {
//     e.respondWith(caches.match(e.request).then(function(res) {
//         if(res) {
//             return res;
//         } else {
//             return fetch(e.request);
//         }
//     }))
// });


// self.addEventListener("activate", function(e) {
//     let cacheWhiteList = [cacheName1, "lol", "test"];

//     e.waitUntil(caches.keys().then(function(cacheNames) {
//         Promise.all(cacheNames.map(function(cacheName) {
//             if (cacheWhiteList.indexOf(cacheName) === -1) {
//                 return caches.delete(cacheName);
//             }
//         }))
//     }))
// })