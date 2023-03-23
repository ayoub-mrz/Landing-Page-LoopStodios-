const self = this;
const CACHE_NAME = 'static_cache'
const STATIC_ASSETS = [
    '/',
    './index.html'
]

self.addEventListener('install', e => {
    self.skipWaiting();
    e.waitUntil(preCach())
})

self.addEventListener('activate', e => {
    e.waitUntil(cleanCache())
})

self.addEventListener('fetch', e => {
    e.respondWith(fetchAssets(e))
})

async function preCach() {
    const cache = await caches.open(CACHE_NAME)
    return cache.addAll(STATIC_ASSETS)
}

async function fetchAssets(e) {
    try {
        const response = await fetch(e.request)
        return response
    } catch (err) {
        const cache = await caches.open(CACHE_NAME)
        return cache.match(e.request)
    }
}

async function cleanCache() {
    const keys = await caches.keys()
    const keysToDelete = keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key)
    })

    return Promise.all(keysToDelete)

}