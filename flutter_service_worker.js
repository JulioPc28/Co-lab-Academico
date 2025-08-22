'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f950886ce0ce766d9f539d22998845b0",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c3c469f8ae4e52982d48a823de41e2d6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "026d30cbd292f4de62d2467f200d2128",
".git/logs/refs/heads/main": "026d30cbd292f4de62d2467f200d2128",
".git/objects/04/4de634729e459fa1a030210af5f018fc1eef1e": "c4a1999b3f8e59f815b554f703ef9532",
".git/objects/0e/245261589870dd5c3cd9deff422894b6d9249e": "0698d2bf80dadef119d82e89f0d65c52",
".git/objects/10/78cda765d979b3beedc95a97c39fe0e7f77ed6": "d2cc6a3b861e5dc4b3d92f80704f77a8",
".git/objects/21/4215a03b2343798e31d9cbcc9d8029380a11ad": "b0486f433d29368a047e2605d1a4d154",
".git/objects/28/d7d83dcf338d722c843e0dd90cdf4c718e8eab": "b9a527d1351fb436d133aa2202350a39",
".git/objects/29/08bb479993775cfceec14611ced99d024fd2ed": "0cd71a9a2c9ac8ab1cdcefa96a081568",
".git/objects/2f/5cc8a5666866cabe32f29ca881cb0d62bf49bd": "efc2c4346f61190dfbaa3b3cf7556de8",
".git/objects/31/edfe0161ac7c9117968bc771793148e630f501": "fcc5d3924928b9eb3261fa4aeafc0a80",
".git/objects/3b/dd02f56182c7659adceb5a524f6a184b519dd8": "6275598c929f9421e4af016dcab12f8d",
".git/objects/3d/b4ca2771940688ea2152c05a098782d1f91584": "5f649875947dfe75c0670fc2f5d3d54b",
".git/objects/3e/b91e4b3b45f03bd86477d139029ec37b0dde55": "1d900b54269c1d0bd621edaee5669865",
".git/objects/42/82c33508626b7fd38a38c69198b977af287afc": "652af0181052d0701653f3ce7bed7eb1",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/07b29b64206092877e8e546da0b6bbdd509f41": "e33bd1b7155a0283226cb9da12931ddd",
".git/objects/48/37533a8ffb636e111644446b8b5254d152a146": "54ab11d80a5332cf91fd2999264849ea",
".git/objects/4c/7ad51d68f9272d6941d5eda698c64233973c5c": "8a29556661cc05a3d73374ce15d784f0",
".git/objects/58/31840272dc1c691085a1cda9eff0467b035365": "adfbc6c173c4e9b037c82eb43ea9b9d0",
".git/objects/5c/b0732e9f7a65c4ccf56e503e4ec78d5d214c6f": "8fdd68bff9de4241e66129ba112a69b9",
".git/objects/60/14776562cc690ba2073a35bee7f062981757a5": "f0a70c85ba6e1511d3e490a4b590a474",
".git/objects/70/029d8c78d7e7cbac3333a57cfe9ee81b325be3": "453ade9740cd9447d73d65d9897e9173",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/76/c8cee2a18da3439e8f805e5ac21d801ebea80a": "1526880f70def82be02963248fbcc5fe",
".git/objects/7c/c276d1aa84ffade6b2476e164dcd4f86ea213e": "4a73a1d0327805c3d36f2c41fdec1198",
".git/objects/80/265c2f60262db1105076805a7acead5d3d9790": "8655ad4ebfbeb7483f87831979213c98",
".git/objects/89/c501bd12d18a34ba1732a1b759daf81445ea8e": "fc2d6ad1940ff72972a07992ef69f062",
".git/objects/8e/b8f4e57cb31504d2fe52112bdcdbf2f188e74e": "c7102c83e616b37aada2e6b3cd4f5cc3",
".git/objects/98/d0ba5308beb18de58f72479185cf9d608a766b": "5e1b27b9a328be59db8125557a11c57b",
".git/objects/9a/54a12e07518d774d1aec7f8994c2ac75cc147f": "62e5b19dc0e38064163a0f5de7638115",
".git/objects/9a/f5f5dfd9ab5dc06b796bb18d0b8840b2a346bd": "b0aceb37599a6e165ed73b688c5f0620",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a2/71f94037c011c1abea2795af5dfd986ac8ec95": "c181918bb3099b6f44e32cdeb401153c",
".git/objects/a4/a00a87cdb32e274f2b9e5e6ad43035ad3721d9": "47ccd79afeb7a90c463cb595e9175f69",
".git/objects/a8/6f703084d17020859a78f48b1175cc0d672a94": "efb2d3f99c30fff1f13ae08e6c33b7a5",
".git/objects/ab/7c11fc6f83a07c6948598acf58d91906412de2": "e097fda1cd23e4511db30921a2dfded4",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c1/e248e2214bb981707c89c40994d9dc83c717ac": "736cd0e7e6e6139263ebeeac04e03d09",
".git/objects/c2/de2acec1324290949b2241c8c14a01b1913091": "5b0c52a514133f5d5dd0063460f063a0",
".git/objects/cb/39b2b5303bf2aab3b672f84ef53ba6544f82ad": "c7d460430a6e02164fd86198247b4fcd",
".git/objects/d3/633c79f5b03222439d849b75b6ea0e88a8d8bd": "dc6dace4c3a72cd4eb098c31132dabea",
".git/objects/d3/a50a3db2546f068fe2f71d6ebfd63bce290178": "9e22736e074f0357ea59f7a2706235aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/a0fecdb2e6d73e9e754c3d585138827b96a202": "2d2f5c62eab1cdb50f24abd7ac5f7b5a",
".git/objects/db/46eae4f2faa22576b109c7e869fcc78f6f3c3f": "493055e31a74c7985aa87e0c7da2ffb4",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e4/fd53f12e19b8d859b5f66be79e72bb2abf699b": "a428c27319c2d6629de11dd5cebc0bd6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/566c686b2a8f14ebbd4a165ac52cdf8df97a7a": "0b47bd27f5b016221696c4254a8fea28",
".git/objects/f4/f04bddcdf024ac2a143c853d29776ea3bec932": "4aa1aaee245e34a9975d682d1139a438",
".git/objects/fc/670d19e6e092a6aaa54a55eee38b010849b592": "db30ba7b07ab1aaa8d98491333de54a7",
".git/objects/fd/d1baef73cafc5a5a3dca76ab163ebadd3a2c92": "1580639f941d7b3d35755630d7fa6287",
".git/refs/heads/main": "9d8f0ebe1830dffa9781db7c58d120fb",
"assets/AssetManifest.bin": "00ffa8a6388042cfde40a153067c6c4c",
"assets/AssetManifest.bin.json": "d068cea483e1771830272c1fa3d854ec",
"assets/AssetManifest.json": "20aa50400af1027599bcc176fb25ee44",
"assets/assets/images/estudiando.jpg": "b92ee25d8e8218dc15af7e4879dd9dba",
"assets/assets/images/logo.png": "c65994073a49f878671ef62a48d70dd6",
"assets/assets/images/logoSf.png": "4dde8b702a35278e551d425ebf47d1fd",
"assets/assets/images/logoSinLetras.png": "e3aca74fd54d036e392ef4eed2c06105",
"assets/assets/images/one.svg": "cc75d6cbe815fd28a52636eacee1d8b4",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c6dc8891b7bf44aa7d1f231adfe97ccc",
"assets/NOTICES": "053f05a1744acb24b28317c448ca9195",
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
"flutter_bootstrap.js": "4fe5ea9289cd29d9ab8a18d13bc0a704",
"icons/apple-touch-icon.png": "f8ff4c9ea1cb5d97ef8f8c3b22ba910b",
"icons/favicon.ico": "506cc3555f7d5fb73b6e89e7d4ae0826",
"icons/icon-192.png": "1befd1170c199a5aa3f45c973b818b9e",
"icons/icon-512.png": "0eb22e8f4b75814634a83747452bd563",
"icons/Icon-maskable-192.png": "7a11c5bb1334deea6d1c94b9d56e3c05",
"icons/Icon-maskable-512.png": "72d2bfc939454093979401e00737cb31",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"index.html": "3633275a7587d9e9b31dfd72122fc4a9",
"/": "3633275a7587d9e9b31dfd72122fc4a9",
"main.dart.js": "b93ab005a909959eeda2b6c515861359",
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
