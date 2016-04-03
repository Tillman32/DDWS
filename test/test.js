var app       = require('../server.js');
var request = require('supertest')(app);
var should    = require('should');

// Let the tests begin!

/* -- Declarations -- */
describe("GET /health", serviceTest);
describe("GET /file", fileTest);
describe("GET /file/key/value", fileKeyValueTest);

/* -- Test functions -- */
function serviceTest() {
    it("Health check", function(done){
        // Request the health endpoint
        request
            .get('/api/health')
            // Expect a 200
            .expect(200, done);        
    });
};

function fileTest() {
    it("List file", function(done){
        // Request the health endpoint
        request
            .get('/api/test')
            // Expect a valid JSON array
            .expect(isValidArrayResponse)
            .end(done);        
    });
};

function fileKeyValueTest() {
    it("List object from file", function(done){
        // Request the health endpoint
        request
            .get('/api/test/first_name/George')
            // Expect a valid JSON array of a single object
            .expect(isValidArrayOfObject)
            .end(done);        
    });
};

function isValidArrayResponse(response) {
    response.body.should.be.instanceof(Array);
};

function isValidArrayOfObject(response) {
    response.body.should.be.instanceof(Array);
};