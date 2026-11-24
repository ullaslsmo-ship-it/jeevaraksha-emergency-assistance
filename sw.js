const CACHE_NAME = "jeevaraksha-v13-1-3-static-shell";
const STATIC_SHELL_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./privacy-policy.html",
  "./offline.html",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_SHELL_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const reqUrl = new URL(event.request.url);
  // PRIVACY RULE (v13.1.3): Cache only same-origin static shell files; never cache query URLs or user data.
  if (reqUrl.origin !== self.location.origin || reqUrl.search) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => caches.match("./index.html").then((r) => r || caches.match("./offline.html")));
    })
  );
});
