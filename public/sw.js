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