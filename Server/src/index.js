'use strict';

var Hapi = require('hapi');

var serverConfig = {
    host: '0.0.0.0',
    port: 3001,
    app: {
        routePrefix: '/api',
        hello: 'world'
    }
};

const server = new Hapi.Server();
server.connection(serverConfig);

server.route({
    method: 'GET',
    path: `${serverConfig.app.routePrefix}/hello`,
    handler: function (request, reply) {
        reply(`Hello, ${request.connection.settings.app.hello}!`);
    }
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});