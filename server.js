// A Simple API
var rootDir = __dirname,
    path    = require('path'),
    fs      = require('fs'),
    express = require('express')
    config  = require('./config.json');

var app = express();
var serverPort = config.server.port;

// Export the app for Mocha unit testing
module.exports = app;

// Heartbeat
app.get('/api/health', function(request, response){
    return response.sendStatus(200).end(); 
});

// GET /api/filename
app.get('/api/:file', function(request, response){
    readFile(request.params.file, function(err, data){
        if(err) return response.send(err);
        return response.send(data);
    });
});

// GET /api/filename/keyname/value
app.get('/api/:file/:key/:value?', function(request, response){
    readFile(request.params.file, function(err, data){
        if(err) return response.send(err);
        return response.send(filterData(data, request.params.key, request.params.value));
    });
});

// Start server
app.listen(serverPort);
console.log('Listening on port %s ...', serverPort);
console.log('Press (CTRL+C) top stop the server');


// Filters the json data
function filterData(json, key, value) {
    // Function to filter JSON by matching Id 
    function findById(obj) {
        // Logic to determine what data to filter
        
        // If value was passed
        if(value) {
            // Return objects where the key equals the value
            if(obj[key] == value) {
                return obj;
            } 
        // If no value was passed
        } else if(!value) {
            // Return objects where that key exists
            if(obj[key]) {
                return obj;
            }
        }

    };
    // Return filtered data
    return json.filter(findById);
};

function readFile(fileName, callback) {
    // TODO: Fix pathing for other OS's
    fs.readFile(rootDir + config.server.data + '\\' + fileName + '.json', 'utf8', function(err, data){
       if(err) return callback(err)
       callback(null, JSON.parse(data));
    });
}