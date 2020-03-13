importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// -- Start of workboxExtensions --
if (workbox) {
    console.log(`Yay! 'background_sync.js' is loaded 🎉`);

    const bgSyncPlugin = new workbox.backgroundSync.Plugin('register-visit-queue', {
        maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
    });

    workbox.routing.registerRoute(
        'https:\/\/private-6ef058-motorizado.apiary-mock.com\/background',
        new workbox.strategies.NetworkOnly({
            plugins: [bgSyncPlugin]
        }),
        'POST'
    );
} else {
    console.log(`Boo! 'background_sync.js' didn't load 😬`);
}// -- End of workboxExtensions --

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('https://fonts.googleapis.com/.*'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/_nuxt/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst ({}), 'GET')
