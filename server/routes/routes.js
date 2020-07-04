"use strict";
exports.__esModule = true;
var Routes         = /** @class */ (function () {
    function BackendApi() {
    }
    BackendApi.prototype.test = function (req, res) {
        res.json('Hello World');
    };
    return BackendApi;
}());
exports.BackendApi = Routes;
