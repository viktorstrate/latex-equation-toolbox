"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/latex-equation-toolbox/05ef711c15d33d84d9abe15194092a4a.svg","05ef711c15d33d84d9abe15194092a4a"],["/latex-equation-toolbox/09b88e812f026f9b96defc10d4f272cd.svg","09b88e812f026f9b96defc10d4f272cd"],["/latex-equation-toolbox/0be0d409624f4abb08718bf12f6eb9dc.svg","0be0d409624f4abb08718bf12f6eb9dc"],["/latex-equation-toolbox/154c7fa1e95a6bdd77cc0e9a93bf6861.svg","154c7fa1e95a6bdd77cc0e9a93bf6861"],["/latex-equation-toolbox/18c1a5163d590aeaaba9224d69706cc5.woff2","18c1a5163d590aeaaba9224d69706cc5"],["/latex-equation-toolbox/19eec210b8ed1294d492081d77536eb3.svg","19eec210b8ed1294d492081d77536eb3"],["/latex-equation-toolbox/1ed0efce1942a14e404b04c7a5321e49.eot","1ed0efce1942a14e404b04c7a5321e49"],["/latex-equation-toolbox/22ce44bc8978062e7b666c4b3bb88ad0.svg","22ce44bc8978062e7b666c4b3bb88ad0"],["/latex-equation-toolbox/29fcde2b95b3c472c4a3f7dfbc9c70f2.svg","29fcde2b95b3c472c4a3f7dfbc9c70f2"],["/latex-equation-toolbox/2ce6def2783d3dd561154be3fa456f39.svg","2ce6def2783d3dd561154be3fa456f39"],["/latex-equation-toolbox/32b67c7c0028b7f51a05a69d8979cab8.svg","32b67c7c0028b7f51a05a69d8979cab8"],["/latex-equation-toolbox/43eb455b5502ecea16ad1ee6ef492d74.svg","43eb455b5502ecea16ad1ee6ef492d74"],["/latex-equation-toolbox/5e417a373f9595287e27440a70553f12.svg","5e417a373f9595287e27440a70553f12"],["/latex-equation-toolbox/61f196e9809bed1300ad4ec848a94f64.svg","61f196e9809bed1300ad4ec848a94f64"],["/latex-equation-toolbox/6282ebb3f288d51f5468fda61a09ea2f.svg","6282ebb3f288d51f5468fda61a09ea2f"],["/latex-equation-toolbox/6816815f280652718792a54f92adf251.svg","6816815f280652718792a54f92adf251"],["/latex-equation-toolbox/6b74879a03ce2831e7012ef8d8efd5d9.svg","6b74879a03ce2831e7012ef8d8efd5d9"],["/latex-equation-toolbox/706624877574029f654393d7c67e727f.svg","706624877574029f654393d7c67e727f"],["/latex-equation-toolbox/76b7f5b7949e1f1449601b0d2b6fcdb9.svg","76b7f5b7949e1f1449601b0d2b6fcdb9"],["/latex-equation-toolbox/8182222cb36a944d872f6d6bc5c3626a.woff","8182222cb36a944d872f6d6bc5c3626a"],["/latex-equation-toolbox/88f57daa3fa431bccfc778a21bb7b106.svg","88f57daa3fa431bccfc778a21bb7b106"],["/latex-equation-toolbox/8f1c1e31c81a77d11377fa301d7e843f.svg","8f1c1e31c81a77d11377fa301d7e843f"],["/latex-equation-toolbox/916ab54e19577717a2af2b7e23e2aaaa.svg","916ab54e19577717a2af2b7e23e2aaaa"],["/latex-equation-toolbox/966792a136f0abc74e3ed36d625b68f2.svg","966792a136f0abc74e3ed36d625b68f2"],["/latex-equation-toolbox/973a989edf5e2a689e862524a431d78d.svg","973a989edf5e2a689e862524a431d78d"],["/latex-equation-toolbox/9a8444f0a41dfc653fa5b23b0495cb36.svg","9a8444f0a41dfc653fa5b23b0495cb36"],["/latex-equation-toolbox/9af5d0735c77c0b6c1ba1758766792db.svg","9af5d0735c77c0b6c1ba1758766792db"],["/latex-equation-toolbox/9d16b6f8808591a1d696cffe69fd4582.svg","9d16b6f8808591a1d696cffe69fd4582"],["/latex-equation-toolbox/a29a1095f38606dd13e4de25701f31af.svg","a29a1095f38606dd13e4de25701f31af"],["/latex-equation-toolbox/a78766da327cb4b0002449cd35af8c80.svg","a78766da327cb4b0002449cd35af8c80"],["/latex-equation-toolbox/afa75e3e0b9fbfb912f9e5f80569215b.svg","afa75e3e0b9fbfb912f9e5f80569215b"],["/latex-equation-toolbox/assets/favicon.ico","7fcdbb195b93b8d37de74446f8fcf1f1"],["/latex-equation-toolbox/assets/icons/android-chrome-192x192.png","cab88aeb46d6b13fb3451cfe1a5949e1"],["/latex-equation-toolbox/assets/icons/android-chrome-512x512.png","24adb0a6eca6fbb865be7bb6a8fcc10c"],["/latex-equation-toolbox/assets/icons/apple-touch-icon.png","5edf9d9630a69f7513707c9d8d67f58f"],["/latex-equation-toolbox/assets/icons/favicon-16x16.png","fafff0a451c766418c1b55220dbdc6b6"],["/latex-equation-toolbox/assets/icons/favicon-32x32.png","473ee9d6c065d0a79767b9bdfd309632"],["/latex-equation-toolbox/bd28f791bf1c29f06fc17e4388522b73.svg","bd28f791bf1c29f06fc17e4388522b73"],["/latex-equation-toolbox/bd6edb6eecf21ecfd561df25d7a69392.svg","bd6edb6eecf21ecfd561df25d7a69392"],["/latex-equation-toolbox/bf4aec38b0bbc3cea0ae5bb8d7ad0c04.svg","bf4aec38b0bbc3cea0ae5bb8d7ad0c04"],["/latex-equation-toolbox/bundle.63d2f.js","537a488b27a0f4d78656aad2a3a64ea2"],["/latex-equation-toolbox/c89c0ef8a955892859d1ccca6a4a5329.ttf","c89c0ef8a955892859d1ccca6a4a5329"],["/latex-equation-toolbox/cbc9998c3c2277f55774c2444837d0df.svg","cbc9998c3c2277f55774c2444837d0df"],["/latex-equation-toolbox/ccba023be7202c5d0f689d07a6b8b3d5.svg","ccba023be7202c5d0f689d07a6b8b3d5"],["/latex-equation-toolbox/ccfce2e8cd512c607169686013ed973b.svg","ccfce2e8cd512c607169686013ed973b"],["/latex-equation-toolbox/cd966ef735f8bb1e747ff08470959283.svg","cd966ef735f8bb1e747ff08470959283"],["/latex-equation-toolbox/cfacf5575e47068f86a61c950f0bff76.svg","cfacf5575e47068f86a61c950f0bff76"],["/latex-equation-toolbox/d05df7ea21cb6252bdd3864d6759f4a3.svg","d05df7ea21cb6252bdd3864d6759f4a3"],["/latex-equation-toolbox/d677243680cc5958973d75e7ed67a083.svg","d677243680cc5958973d75e7ed67a083"],["/latex-equation-toolbox/dd72214c938f238b171fb5f95044e2d4.svg","dd72214c938f238b171fb5f95044e2d4"],["/latex-equation-toolbox/df60e24249f3a86fcb811c1d3b4cb024.svg","df60e24249f3a86fcb811c1d3b4cb024"],["/latex-equation-toolbox/df9f38a1d24d9fcc9b33a7b43db0a250.svg","df9f38a1d24d9fcc9b33a7b43db0a250"],["/latex-equation-toolbox/eec2a84848b0ff2343a7a7fb7d38490b.svg","eec2a84848b0ff2343a7a7fb7d38490b"],["/latex-equation-toolbox/favicon.ico","7fcdbb195b93b8d37de74446f8fcf1f1"],["/latex-equation-toolbox/fd54e88dfca410b9a933a424448998c0.svg","fd54e88dfca410b9a933a424448998c0"],["/latex-equation-toolbox/fonts/Symbola.eot","e4ae9ff7ac2476ae421fc4278e5d3806"],["/latex-equation-toolbox/fonts/Symbola.otf","4621fcfd9def63c694914f7ec5add610"],["/latex-equation-toolbox/fonts/Symbola.ttf","52a6aac18ae26b6ecbd4f3a0d9579c9f"],["/latex-equation-toolbox/fonts/Symbola.woff","b1445a46ceac48f13cec0860ab1acf5f"],["/latex-equation-toolbox/fonts/Symbola.woff2","cb8d804a242b86175fdd6cb8e11b1a35"],["/latex-equation-toolbox/index.html","dd93082642324dbeaf821121a928fea2"],["/latex-equation-toolbox/manifest.json","9a2594e13897eebd746a0c42addb66dd"],["/latex-equation-toolbox/style.57d83.css","ba9cad24bc90f53e465d3734b544e833"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,o){var c=new URL(e);return o&&c.pathname.match(o)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],o=new URL(a,self.location),c=createCacheKey(o,hashParamName,t,!1);return[o.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var o=new Request(t,{credentials:"same-origin"});return fetch(o).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),o="index.html";(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,o),a=urlsToCacheKeys.has(t));var c="index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(c,self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});