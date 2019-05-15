const cacheName1 = "cacheName1";
const urlsToCache = [
  "/",
  "/index.html",
  "general.html",
  "products.html",
  "employees.html",
  "orderForms.html",
  "makeOrderForms.html",

  "/assets/js/index.js",
  "/assets/js/all.js",
  "/assets/js/employees.js",
  "/assets/js/expectedProducts.js",
  "/assets/js/fetchcalls.js",
  "/assets/js/general.js",
  "/assets/js/index.js",
  "/assets/js/makeOrderForm.js",
  "/assets/js/productDetails.js",
  "/assets/js/products.js",

  "/assets/css/screen.css",
  "/assets/css/reset.css",
  "/assets/css/bootstrap.min.css",
  "/manifest.webmanifest"
];

self.addEventListener("install", function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(cacheName1)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }

      return fetch(event.request).then(function(response) {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // clone the response
        var responseToCache = response.clone();

        caches.open(cacheName1).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});

self.addEventListener("activate", function(e) {
  let cacheWhiteList = [cacheName1, "lol", "test"];

  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhiteList.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
