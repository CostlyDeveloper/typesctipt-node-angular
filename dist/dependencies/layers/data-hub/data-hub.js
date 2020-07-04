"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerDataHub = void 0;
var messaging_1 = require("../messaging/messaging");
var LayerDataHub;
(function (LayerDataHub) {
    var Response = /** @class */ (function () {
        function Response() {
            this.Response = null;
            this.Message = new messaging_1.Messaging();
        }
        Response.prototype.setResponse = function (_Response) {
            this.Response = _Response;
        };
        return Response;
    }()); // class Response
    LayerDataHub.Response = Response;
})(LayerDataHub = exports.LayerDataHub || (exports.LayerDataHub = {})); // namespace LayerDataHub
