'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "64e0c1bdd850086d5cdf46e15c597aef",
".git/config": "d132b2d5cff5bcab8bd164abc97acd2e",
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
".git/index": "3dfa7b864b46ee16f2c0bf5b2f6e7f81",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1aace9dc33c819e1daa498091b09e146",
".git/logs/refs/heads/main": "1aace9dc33c819e1daa498091b09e146",
".git/logs/refs/remotes/origin/main": "9f82139e5cd95cce815611c47575c633",
".git/objects/00/d4a19a4e32d1e0f3daee83ce9dd7a052b04bd6": "4ca1ca2e3624031959892865f4219688",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0c/35f6b92fdc79d2c0d18a81f43c2af87d4b1f85": "b219969824c6251419ba3915e5c6b4dc",
".git/objects/0d/0caf627f3a47b503e78f551a6da2b84b2b8f1e": "5328d392d79d061908081b6816a2b34a",
".git/objects/0e/f076fdaa9842cf00ce270784b85702f37d66af": "cafe85c907a8cb9f171be84f844d9682",
".git/objects/13/c2fcc9dded2d9b1f18848c88afd3bd6bce3457": "be96f0bd8f61552360538bee8dc55348",
".git/objects/14/35a1e5a5c7348e56baae8f102499bc6d7a981c": "c4477b7e2b5e18850e187310bda27cfd",
".git/objects/1a/dc76f3ce6f0211f6e443739e0c3d7dfb5b50a5": "c120dd9cbb541ed59a15e4255311d128",
".git/objects/1b/0f57fd293aa2edeb199346183a50e7a1b47d20": "beb17159aebac7dc45ebfe5d41236ed8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/3e6c10e776229b70056d634d6dc6d2122f705c": "635b10d602093e7c7c67eff0a069e7c9",
".git/objects/20/41c999d98df03522172b2c4054f569ac95f8d8": "05c5ded5704e22c0e9c005fac95a3f52",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/1dab4594f632bf06bec6696c4d165fad4ec648": "e6398dc05a62c924948984e4b3a1d213",
".git/objects/34/30a4c7dfe3a36fe676263c6815b7389bb096fd": "d68b4dc353997c47d37698fd4d29cf2d",
".git/objects/37/42457900d51ae5c34ed53657ed8a72f17f19c6": "14c972e5155e5aa3bf2db2ef8589e81a",
".git/objects/40/e271c74f522e9a047da528a8893fcc93e24fb5": "76c697fda352d71d7e1c1478660f725d",
".git/objects/42/3c4f0e1f398c1944052dbc9af3d6c4cc83a3d2": "39dffc8fc95dfde7721c6f3ce10b5a71",
".git/objects/42/ac75e8a210c328a32c0a4a7f5f40426185c1dd": "4dcec41ed4cbb91f31e489157c3474dc",
".git/objects/43/26f171a38ea89f0f5efae01355c66bf748487f": "a746e418d7f728b969ba745821f8aa21",
".git/objects/43/2a73bf1edd0e0f2074152f88bea22ccf73cf81": "d6f1d3f5e95475f437e875a37cf34da0",
".git/objects/53/0c9e11ba35de8402dd192222b4e73f9169ac30": "4a4d788b66761dab4b79ca06534826b4",
".git/objects/55/285f52ff23493a21a9d19d8eafe6e477499c00": "e29bb64680d551779e98d23b3b741d49",
".git/objects/59/86452ca0a84d99d5c2d6d49e22577011a4e9c8": "428068343df6fd59bbf47d6e147a5905",
".git/objects/5f/3baf7ff825b028fb982639db802ff74a03f59b": "76361d75e001af958a19bd708e2e3825",
".git/objects/60/26a0f12c574722b42ddfe69f64275eef67eb38": "d1e644c9b8468ae3e0f82b2ced36316c",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/84f1462b07b4bb38381ba53c79ba61404b61e1": "b47696bb48e406f3985e0864106d4940",
".git/objects/6d/3976060c69547b7fd4e7001f46139d64d6ef7e": "6e9ddb7f7c616ed2b1a226fc500b85f5",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/78/e7138431b3200e762c5b7a21db9730548c2a75": "26e17238380e0a991023915dc2a06ac6",
".git/objects/7b/819b0e4370fe159db2a2d27d716bba5724f4f8": "04715c33c9a0c12cf0f15e445c04e7bd",
".git/objects/7c/86fbe43bf479d9a78ac529b1e2b8aaafb8e620": "7a2d167877c7c5d62f5f6fc821ded1d5",
".git/objects/7e/924c1782648811d4a0aa2523b6fbd41f5eda8c": "eff471a92e0872af1b4372929490d461",
".git/objects/83/103f30238a57604caf746048b6b47bb9b11f07": "cb03fa9a0a39b0adfbeb1667ded36b89",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/d062ecaf549277d0c9cee36ecc9b7b907acda3": "e9c78557907c5b838aa42642b8ea60fe",
".git/objects/86/8c9ceef4d0df8a4a61ef65d2bdede7ea97e13e": "0b5a4203af439cc738d5c4361d60610a",
".git/objects/88/189051a159dba6060c7be67040682ecca39be9": "cb8205c8b6f30c67887eb9dbb740b57d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2312c769ce983ebd0bf13132abc94aa32ebd42": "13e0b50c1af93b5cedfcd0110cdef7ff",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/cd90949576004f17647501297f3f42e80d07fb": "92c7158c63d3fce02c53760e1ae7e578",
".git/objects/92/b448d487a5ce9c0c6333adb4f7d3c23dd629c5": "01949926dba628b85b3370a3867ed7c4",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/cb0e60a3a605f15fe562489bfba2fee5873827": "48bc1381ab539c560a50f062ca33d176",
".git/objects/9c/7d3884de7343a7160205be768136d054643be6": "91df7f19dcd8f13a14b3365888e32c2f",
".git/objects/9d/3ae596ad1ea90a8300a623f9b60943093709e2": "76e58c159950c4252610657470494468",
".git/objects/9d/e59b6f9d4bd0347bf000e52ee1900ca172a93e": "72cd56c3e4ddcc6f62d24371eb9e8333",
".git/objects/a0/e24cf359448b68ec925507261c5919e375cf2a": "2d8ab3274d63c0c11f95e26142bc6fc5",
".git/objects/a2/8d91563c06ad2cd057bf1905525b70a958e234": "972bf1887a75975941c166ef198fa308",
".git/objects/a7/861612f552ca61844e134b9969bac7da1669b8": "041f0cf8dce39273d4add691a968dd96",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/34b575c852fe2e50e3fbd738473a7286094887": "199fc9f57c1431b9e2ac983f88705863",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/eac9b7c6501631dbf081c3a9db300a2f9b117b": "5e2d7bb09110350431b00b70e644a0d5",
".git/objects/b4/10fd255a367a0d6b0873ec96e78b621f47ba42": "5047ae1c3d09ae2fa7ff41db4a7674d3",
".git/objects/b5/80366dab2430d4894d45488e2e0c5cfa3c6c46": "3405cd4412c0427d71412e1e51f48dc9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/50a821e739c507459a79c2a0dae6dc0be391a8": "dcef80b4860bb9f636a363cb705c18de",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/44dbcb011499b94cfd55e46cce3d73db8cf27e": "5b1571d018366945c9890cdf7e521676",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/e3dee002bc3318c4b6945b0f40399cf595d87b": "15b622e64cd32dc7844ed676220b9a91",
".git/objects/c8/37a0e1dd3faf764412d98ae0426acd0b905e39": "80f17597abaa091bf5916c5d93186932",
".git/objects/c9/181a714a7c774a654d43a990a8db610a1dfe0e": "106e13d5a809f925d677740886e95445",
".git/objects/c9/fef18603d88b972f5eb8cbfd30da84e4e799ec": "6e891c06361ddd31654fde61e70e1ba2",
".git/objects/d0/64abbcdc6e81b282a8072fcb186e2ee12ee275": "0998cabce2a85fe855fa2f4b738d8dd2",
".git/objects/d3/2b298944f6b844986b56e3382743eb15ba15ae": "27c07a877eda66ef87904fcc5418ddfc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/33e78b439536f33b115e5b64edd40b8dca1130": "0a3d10f5aa3274b6419bcaf3d23f2595",
".git/objects/df/c817f36dc6cb765ac6903e72e23fa3ad171f31": "c72cd6b7adb3e1d04b00b1cfdad4c2f9",
".git/objects/e9/b369e562ee6d68dbd17bc85dc2dce7bce6adfc": "6620f945853fb713b2338d77019276ee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/6eb3c78fe9059bf17359674167848d3fa05a93": "bd0de390ca765ac20c307695d1e33ad1",
".git/objects/ef/8ac34ff8b19ab4a60d1f27e8e63aed1adf2f9b": "f1143eb0aea06aaced9329cae7ec2a85",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/8ac4e56678f4c8860440b2427a3b19cfcc3ba2": "a0dc1ca68a6b8066c7ac92661ba79fdd",
".git/objects/fc/7b5c42089df277e22c224978c99ff3eb64be50": "51ac32d585efd6e7ebd9695cd91068b0",
".git/refs/heads/main": "e94eb845f90650b2bec8e919eea41718",
".git/refs/remotes/origin/main": "e94eb845f90650b2bec8e919eea41718",
"assets/AssetManifest.bin": "3cbdf7b6ca580ad5e72dab23b1900dc3",
"assets/AssetManifest.bin.json": "37ae3d679d0bb2cad665f04a3ba19175",
"assets/AssetManifest.json": "6d2eb6bc761fbc97f5f2affcc875b461",
"assets/assets/fonts/Lora-Bold.ttf": "3487bb1d17bf46e79cb03d5d98b962a9",
"assets/assets/fonts/Lora-Regular.ttf": "29149bc88d3600b6a10d0b23790da014",
"assets/assets/fonts/PlayfairDisplay-Bold.ttf": "d27b6b12d96d9cf68f493c78113ce390",
"assets/assets/fonts/PlayfairDisplay-Regular.ttf": "b3721ba3bde34e5b38b0e1523cccfd7f",
"assets/assets/fonts/Roboto-Bold.ttf": "9ece5b48963bbc96309220952cda38aa",
"assets/assets/images/cover.png": "ac3c3b252b7039caae4c8792d3a3662c",
"assets/assets/images/cover1.jpg": "1d0cb4f968c17806df0c2fdc130d0992",
"assets/assets/images/cover2.jpg": "88df7f46df20a0cf0cf168d06549c478",
"assets/assets/images/image1.jpg": "e494845a61e5ccecc7b386449014c2c2",
"assets/assets/images/image2.jpg": "ec35128cf7ae8f9d98c3b90b2136fe2d",
"assets/assets/images/image3.jpg": "72d83a0785f4a2e8aae679e0487c9656",
"assets/assets/images/image4.jpg": "a904091722106014da0580b812de7649",
"assets/assets/images/quote.png": "3fa28aabb366cc91c32adf1583207693",
"assets/FontManifest.json": "32da7b8560df41d3ea3d07298085056c",
"assets/fonts/MaterialIcons-Regular.otf": "bcbc4e4579da31bdb4e1ae092613035b",
"assets/NOTICES": "ad094616dbd0a29f2ad8b248e79dcec4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "6e864bea12d33a1090d93ebc83e3e1bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d58aaf5d2dc04eafd6b8e63ff9e79ca",
"/": "7d58aaf5d2dc04eafd6b8e63ff9e79ca",
"main.dart.js": "a55054d2afbbf6c8b14a67fd9ab6a14f",
"manifest.json": "035a1976e2d33c6c7616b336c8a35369",
"version.json": "8ee545af71d81ffa3cba474612302a06"};
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
