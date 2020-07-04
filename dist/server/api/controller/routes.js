"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteController = void 0;
var data_hub_1 = require("../../../dependencies/layers/data-hub/data-hub");
var RouteController = (function () {
    function RouteController() {
    }
    RouteController.prototype.initRoutes = function (_App, _Router) {
        _App.use('/API/contact', this.novaFunkcija3);
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
