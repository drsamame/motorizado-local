if (workbox) {
    console.log(`Yay! 'background_sync.js' is loaded 🎉`);

    const bgSyncPlugin = new workbox.backgroundSync.Plugin('myQueueName', {
        maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
    });

    workbox.routing.registerRoute(
        /\/api\/.*/,
        new workbox.strategies.NetworkOnly({
            plugins: [bgSyncPlugin]
        }),
        'GET'
    );

} else {
    console.log(`Boo! 'background_sync.js' didn't load 😬`); 
}