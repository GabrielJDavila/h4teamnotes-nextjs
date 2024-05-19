"use client";

import { useEffect } from "react";

const ServiceWorkerWrapper = () => {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js")
                .then((registration: ServiceWorkerRegistration) => {
                    console.log("Service worker registered with scope:", registration.scope);
                })
                .catch((error: Error) => {
                    console.error("Service worker registration failed:", error);
                });
        }
    }, []);

    return null;
};

export default ServiceWorkerWrapper;

// export default function useServiceWorker() {
//     useEffect(() => {
//         window.addEventListener("load", () => {
//             if("serviceWorker" in navigator) {
//                 navigator.serviceWorker.register("/sw.js")
//                     .then(registration => {
//                         console.log("service worker registered with scope:", registration.scope)
//                     })
//                     .catch(error => {
//                         console.error("service worker registration failed: ", error)
//                     })
//             }
//         })
//     }, [])
// }


// export default function useServiceWorker() {
//     useEffect(() => {
//         if("serviceWorker" in navigator) {
//             navigator.serviceWorker.register("/sw.js")
//                 .then((registration: ServiceWorkerRegistration) => {
//                     console.log("service worker registered with scope:", registration.scope)
//                 })
//                 .catch((error: Error) => {
//                     console.error("service worker registration failed: ", error)
//                 })
//         }
//     }, [])
// }

// async function registerServiceWorker() {
//     if("serviceWorker" in navigator) {
//         try {
//             const registration = await navigator.serviceWorker.register("/sw.js")
//             console.log("service worker registered with scope: ", registration.scope)
//         } catch(error) {
//             console.error("service worker registration failed: ", error)
//         }
//     }
// }

// export default function ServiceWorkerRegistrar() {
//     useEffect(() => {
//         registerServiceWorker
//     }, [])
//     return null
// }