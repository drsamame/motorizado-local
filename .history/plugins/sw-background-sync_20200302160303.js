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
}