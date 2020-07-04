"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendRouter = void 0;
var contact_routes_1 = require("../api/contact/contact.routes");
var data_hub_1 = require("../../dependencies/layers/data-hub/data-hub");
var BackendRouter = /** @class */ (function () {
    function BackendRouter() {
        // modules
        this.contact = new contact_routes_1.ContactRoutes();
    }
    BackendRouter.prototype.initRoutes = function (_App, _Router) {
        var DataHubResponse = new data_hub_1.LayerDataHub.Response();
        _App.use('/API/contact', function (_Req, _Res) {
            _Res.send(DataHubResponse);
        });
    };
    return BackendRouter;
}());
exports.BackendRouter = BackendRouter;
