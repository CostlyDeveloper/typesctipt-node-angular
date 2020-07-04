"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APILogger = void 0;
var APILogger = (function () {
    function APILogger() {
    }
    APILogger.prototype.logging = function (_Req, _Res, _Next) {
        console.log('loging...');
        _Next();
    };
    return APILogger;
}());
exports.APILogger = APILogger;
