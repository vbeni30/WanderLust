// This file will be used to register a service worker for caching assets

export function registerServiceWorker() {
  if (typeof window !== "undefined" && "serviceWorker" in navigator && process.env.NODE_ENV === "production") {
    window.addEventListener("load", () => {
      const swUrl = "/sw.js"

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log("ServiceWorker registration successful with scope: ", registration.scope)
        })
        .catch((error) => {
          console.log("ServiceWorker registration failed: ", error)
        })
    })
  }
}

