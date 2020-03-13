console.log("backsync called")
workbox.routing.registerRoute(
    'https:\/\/example.com\/api\/Survey\/post.*',
    new workbox.strategies.NetworkOnly({
        plugins: [
            new workbox.backgroundSync.Plugin('myQueueName', {
                maxRetentionTime: 24 * 60
            })
        ]
    }),
    'POST'
);