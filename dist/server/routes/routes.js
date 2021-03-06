"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteController = void 0;
var data_hub_1 = require("../../dependencies/layers/data-hub/data-hub");
var RouteController = /** @class */ (function () {
    function RouteController() {
    }
    // modules
    // contact: ContactRoutes = new ContactRoutes();
    RouteController.prototype.initRoutes = function (_App, _Router) {
        _App.use(this.logging);
        _App.use(this.authenticating);
        _App.use('/API/contact', this.novaFunkcija3);
    };
    RouteController.prototype.logging = function (_Req, _Res, _Next) {
        console.log('loging...', _Req);
        _Next();
    };
    RouteController.prototype.authenticating = function (_Req, _Res, _Next) {
        console.log('authenticating..', _Req);
        _Next();
    };
    RouteController.prototype.novaFunkcija3 = function (_Req, _Res, _Next) {
        console.log('treća...');
        var DataHubResponse = new data_hub_1.LayerDataHub.Response();
        _Next();
        _Res.send(DataHubResponse);
    };
    return RouteController;
}());
exports.RouteController = RouteController;
