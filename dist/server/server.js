"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var http = require("http");
var cors = require("cors");
var bodyParser = require("body-parser");
var routes_1 = require("./api/controller/routes");
var logger_1 = require("./api/controller/logger");
var authentication_1 = require("./api/controller/authentication");
var Server = (function () {
    function Server() {
        this.app = express();
        this.config();
        this.routes();
        this.tmpTest();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.config = function () {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(path.join(__dirname, 'public')));
        var port = process.env.PORT || '3000';
        this.app.set('port', port);
        var server = http.createServer(this.app);
        server.listen(port, function () { return console.log("API RUNNING ON LOCALHOST: " + port); });
    };
    Server.prototype.routes = function () {
        var router = express.Router();
        var authentication = new authentication_1.APIAuthentication();
        var routeController = new routes_1.RouteController();
        if (this.app.get('env') === 'development') {
            var logger = new logger_1.APILogger();
            this.app.use(logger.logging);
            console.log('Logger enabled...');
        }
        this.app.use(authentication.authenticating);
        routeController.initRoutes(this.app, router);
        this.app.use(router);
        this.app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, 'public/index.html'));
        });
    };
    Server.prototype.tmpTest = function () {
        console.log(process.env.NODE_ENV);
        console.log(this.app.get('env'));
    };
    return Server;
}());
Server.bootstrap();
