'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01dfcd9be3caa805494b3ed11cab6a31",
".git/config": "d41a5af2be82eff8cf2985d7cbcb1ae2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "81ff7af17df914df52e877f7b1443bed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b3f070dfa648fd9596b9bdbda1c2e49c",
".git/logs/refs/heads/main": "c2506db85f1ed21ad284b62d30140d5b",
".git/logs/refs/remotes/origin/main": "e52c5573e11252b17e8be688b93939d3",
".git/objects/00/4a7cb67a4b1849f47cbd176619b01e15702794": "53c3be348975b66489dbaa8df01d15d2",
".git/objects/00/bf655344464e2daa9ee7c43ea5df2292d737f4": "bdd84a0037bb68b32963aa87ddd4de7c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/81a56ebfc694b51f945550c1e373367e2cc18d": "ee4ab9f79fdd3ccb0a10ac9821284a65",
".git/objects/0a/0a748922a1d92c8eb8a57fd695bcc47c0fcf2f": "aa5067f395e428571aacc778263bb28a",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/16/bc77147e93e4b4be92c79bc76fde8d99f0cbb6": "a8e93554281c70536e104012dd36c3eb",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/2cfdd5000d3f38e244e8cf98b07ea9421b2494": "18f445e16ea3e2c85032d0bcd3b5242b",
".git/objects/29/6ac6779a7a369646be9f795ee2e387870bf183": "5ae8a7bb3719f4d13c3ec6ec8c304e57",
".git/objects/2a/c7550dc0c50f489d18ab27df2db36f06ef8ff8": "f7740bcb657b7c967f4147082d4021f7",
".git/objects/3f/668610222349f74924f95d5ddf6a29d2858f06": "5d2abdfd19afd8cdeb5d1e27dd39b9b4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/4841ea85e37a90043a91c6db9295246e646fa5": "cbdae80d99b5096e665388ada74a3b1c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/53/843c821014fdbfe917fc1f6cae8abe080dc7fa": "9afe81a6b9141b71267de80557121a78",
".git/objects/57/48bf90264549014c9261346acfd171f1878c79": "ba4133121ea5448656899095d695b504",
".git/objects/57/bf4fd309ec9ee2c34d1818a8ec25b75ecb8d51": "594579c842c6c2d927b875ad3c296412",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/e1892cb54375385fdc411667e6e33bf9aeb475": "6e49de57eb2b6afdfcf83913f794a2b9",
".git/objects/6b/2078a54b5399f8608dee10604c97c0c0cbef9b": "8e0cadffef1a09c5bd3db1f43aa0605c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/0209fea2d63369fd466cecedc764e727412019": "3ca3b4aedcf499e810c4237460896060",
".git/objects/7e/4679f4ebba84c394540fd7237ba90b63ed8c2a": "78972fad01b60d5fccf040350cc37b92",
".git/objects/80/42b0584ecd7eb67bb158f418c54614c23416a5": "dfb9d9c6596fb76c2d970a9df4332f4d",
".git/objects/85/03d17425beb4b9f3dbcfff926228a5666919da": "baad30ba523c2d3bb0bac2b4fd9c39df",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2df0a4343080ee689a2286d8563c5ce057a359": "89497be399edeecea10fcb3b7a091b1e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/98bc4eddb2524b08884c94120b84aa363a6f0e": "b7d28f138a9780c995f576b5d12e1968",
".git/objects/9e/9f1eb67364f53a5bf0ab76216bfa13fa8826d1": "6845feefc964f107b7ff3eaa2fbe3d2b",
".git/objects/a3/3d28c802c4837041810ab8e8898d72e7c5e67d": "7e5e64b8cb4ce806710bb438c6d56b95",
".git/objects/a4/e99a460244a471544a250cfa9e94055bbad431": "c58eca0aa5a52a47267f93e8a8555fba",
".git/objects/b0/29bccaef21635dd8586b252bf82baaca1fa53b": "10216342870687cfa06b37e27715b3e4",
".git/objects/b0/796f63fd9d99ee0b70ceb2533997f7fce566ba": "0d89db8eafa64aa48ac7ee937e017391",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/af0c5586fbb3ed9df12b96128b1b94eb1b28ca": "8906af642272574317061cd97dda6528",
".git/objects/b7/2d029648a9cfe3c0cea917be7e2af80c6a4ef8": "ee3538e4e76adf6ec7f43c25d1e936a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c7/c658e4e5a6039dceb3b1a59d3554836c4a2ebc": "bd4624116353ea1a3f559e6f98efcf8a",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/698ba5e282ddba79789f950ba537d8d4df0ffa": "9eb01f9e8aafed1876d2e370ea157d7d",
".git/objects/cb/c0076d90bd192230beee49d6c9eace4559ed4f": "a34e38eb6fe8ed977bb0b2746a612836",
".git/objects/cc/1c4a7709dc7be4b6a15fcab8cc6510d372c364": "d584d80a03de169994778966c3eed32a",
".git/objects/d0/324e450f106ac14652da733d10ccdce6be33bd": "337718281f00db7142f1bef93ff3197d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/fe5461f44cfc2fae6eea1e9412ec269b21c59b": "8e66bc49bdcd08d8e4894e59d61d1633",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/56267d5e565beff29af718ef5e6002d1f95f02": "2aa4ad6986672866cef52e7b63cb3718",
".git/objects/f6/8aaa786c22b6c6b673ae9e0e2c488011bbb06e": "366beed319e8b76edf6c357237cc0a3e",
".git/objects/f7/8aa6925b5a3af14a92735b6bf9da74157fc284": "96184f7513151093c80eda26923f9e9d",
".git/objects/f9/a3899eea52de5fb0d4ed36a7505c80950b683a": "482761b2c052ff7026c185175a93aa7b",
".git/objects/fc/95a69560c38d86ab7821a93032fae16b0ec826": "9d2cd5ab74b76ed26744280ddf41f2a2",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/ff/7f9f929d2fb3b7938c982cfc471ddc7f2077f7": "34be4e1f359eeba6e41497f2c13b7643",
".git/refs/heads/main": "17e0f3b239d3d3873f82986013b0408f",
".git/refs/remotes/origin/main": "17e0f3b239d3d3873f82986013b0408f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1e5fbdaed1028c4975637294d988f68c",
"assets/NOTICES": "61ec3d537f7914d247f7beb7e3aebc18",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "922f9270ac68f9c8d0eb09659f21f9ac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e5468531014be01870006af154f64cd3",
"/": "e5468531014be01870006af154f64cd3",
"main.dart.js": "82ceddb8c95645d7f515083694914817",
"manifest.json": "2b9441006f5c9683772207eee461cdd3",
"version.json": "3c90984cd5be636cdace6d652645eb85"};
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
