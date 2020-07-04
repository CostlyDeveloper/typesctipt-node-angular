"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var http = require("http");
var cors = require("cors");
var bodyParser = require("body-parser");
var routes_1 = require("./routes/routes");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        // Parsers for POST data
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // Point static path to dist
        this.app.use(express.static(path.join(__dirname, 'public')));
        /**
         * Get port from environment and store in Express.
         */
        var port = process.env.PORT || '3000';
        this.app.set('port', port);
        /**
         * Create HTTP server.
         */
        var server = http.createServer(this.app);
        /**
         * Listen on provided port, on all network interfaces.
         */
        server.listen(port, function () { return console.log("API RUNNING ON LOCALHOST: " + port); });
    };
    Server.prototype.routes = function () {
        // get router
        var router;
        router = express.Router();
        // create routes
        var backendRouter = new routes_1.BackendRouter();
        backendRouter.initRoutes(this.app, router);
        this.app.use(router);
        // Catch all other routes and return the index file
        this.app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, 'public/index.html'));
        });
    };
    return Server;
}());
Server.bootstrap();
