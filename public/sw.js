self.addEventListener("install", () => {
    console.log("service worker installed")
})

self.addEventListener("activate", () => {
    console.log("service worker activated")
})

self.addEventListener("push", function(event) {
    const data = event.data.json()
    const options = {
        body: data.body,
        icon: data.icon
    }
    event.waitUntil(
        self.ServiceWorkerRegistration.showNotification(data.title, options)
    )
})

self.addEventListener("notificationclick", function(event) {
    event.notification.close()
    event.waitUntil(
        clients.openWindow("http://localhost:3000/dashboard")
    )
})

const cacheName = 'v1'

const cacheClone = async (e) => {
  const res = await fetch(e.request);
  const resClone = res.clone();

  const cache = await caches.open(cacheName);
  await cache.put(e.request, resClone);
  return res;
};

const fetchEvent = () => {
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      cacheClone(e)
        .catch(() => caches.match(e.request))
        .then((res) => res)
    );
  });
};

fetchEvent();