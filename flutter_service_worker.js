'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bf1c2e4f1d70e1efef62fc7e716df837",
"assets/AssetManifest.bin.json": "cc035d0fd3e8c8166c4615ce1560c586",
"assets/AssetManifest.json": "fda9f1f82583781686c365585bdbaf58",
"assets/assets/images/anime.png": "0c113b3fc5d1b493e95f1a522752dc19",
"assets/assets/images/anime2.png": "9568975c7f0327b1d64c8e7166d6fc6e",
"assets/assets/images/desktop.ini": "40c1257ff6dee66027fe35ca6cde8238",
"assets/assets/images/estudiando.jpg": "b92ee25d8e8218dc15af7e4879dd9dba",
"assets/assets/images/estudiantes.png": "2b2f15297ddc7d2670d7d147b5486178",
"assets/assets/images/five.svg": "10f9af1c7523a0eaae3e43df12465b39",
"assets/assets/images/four.svg": "acdf8a8ae963aeac67ee57aa54f28432",
"assets/assets/images/logo.png": "c65994073a49f878671ef62a48d70dd6",
"assets/assets/images/logoDeco.png": "311262e4cfcc999b81b7f89e334a2b48",
"assets/assets/images/logoSf.png": "4dde8b702a35278e551d425ebf47d1fd",
"assets/assets/images/logoSinLetras.png": "e3aca74fd54d036e392ef4eed2c06105",
"assets/assets/images/mail.svg": "e253752936152c409bdb19ba6b1732f9",
"assets/assets/images/mail2.svg": "f514cb4c3e409c2bc7d09b6b80dd74ad",
"assets/assets/images/one.svg": "cc75d6cbe815fd28a52636eacee1d8b4",
"assets/assets/images/six.svg": "de1793f4f4187eddba5163694e19329b",
"assets/assets/images/three.svg": "91bf8afde5ad1ccf9b80f0f3815353cb",
"assets/assets/images/two.svg": "a3c1d2f4908a19ed18045f8f812bb47b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d04b09b197631044bfe348ddf34df7b6",
"assets/NOTICES": "593d4666a746a3680bfcbc283d0c5bbe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "0eb22e8f4b75814634a83747452bd563",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "fc3ec698f8b13af358d39eefbb5d4cba",
"icons/apple-touch-icon.png": "f8ff4c9ea1cb5d97ef8f8c3b22ba910b",
"icons/favicon.ico": "506cc3555f7d5fb73b6e89e7d4ae0826",
"icons/icon-192.png": "1befd1170c199a5aa3f45c973b818b9e",
"icons/icon-512.png": "0eb22e8f4b75814634a83747452bd563",
"icons/Icon-maskable-192.png": "7a11c5bb1334deea6d1c94b9d56e3c05",
"icons/Icon-maskable-512.png": "72d2bfc939454093979401e00737cb31",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"index.html": "3633275a7587d9e9b31dfd72122fc4a9",
"/": "3633275a7587d9e9b31dfd72122fc4a9",
"main.dart.js": "1068ca54ff52df580f94661e1e4a5526",
"manifest.json": "dea1113bf4075bd33c8d0ec04ca67c64",
"version.json": "cf49b4adec6b6ab61beff2ba402b2499"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
