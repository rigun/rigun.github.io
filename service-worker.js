"use strict";var precacheConfig=[["index.html","df383d2a64eb423738da517fbf2ac49a"],["service-worker.js","af1f09b26be0de69466fae9598c5c473"],["static/css/app.949e3b84fd35283d530e25a971fa5b9b.css","b372561197743664b1a63cd043024782"],["static/js/0.e3a78faef54f7377f1d7.js","93e9107a09b488de5c1fe258c7a4dc95"],["static/js/1.7a7f6755d27ceac75083.js","69f7791e0000cb093abd40208a9e6583"],["static/js/2.b9a14d248c36c41ad32c.js","f73af73ecabf5b34cdbfd48b69a2fa61"],["static/js/3.d6912734f36d1746bf78.js","15c7b7b9daaa6b8986ba6cdbf4019365"],["static/js/4.918af907c7dfe4fbe969.js","9ff99ff51d7d9c1fe739fa5b085358c2"],["static/js/5.c83d6984e9a03e333d05.js","047d5ff8690f009a198d2007462b2faf"],["static/js/6.16497e1ae83641d9f978.js","ecebebcca38377d3acf6c44143911b3e"],["static/js/7.6484a5bcbb446e8f2173.js","4192830680d737f3a198e9ab50bdb797"],["static/js/app.ada84c84190b0b9aca2b.js","a39c52b5592f73194b9d1b4f9a01adb0"],["static/js/manifest.46b9d170c59562e17c66.js","d19be429bd815460a16ac1894a84c1a3"],["static/js/vendor.ead27dbb07a3d8da5b82.js","a64353bc6328ec7df13331b1755f995e"]],cacheName="sw-precache-v3-mypage-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,!1);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});