var _ = require('underscore'),
    eve = require('eve');

/**
  Instructs Steelmesh that this client is ready for requests
 **/
exports.ready = function(port, data) {
    process.send(_.extend(data || {}, {operation: 'steelmesh.client.up', port: port}));
}