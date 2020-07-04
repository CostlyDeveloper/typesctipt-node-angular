"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIAuthentication = void 0;
var APIAuthentication = (function () {
    function APIAuthentication() {
    }
    APIAuthentication.prototype.authenticating = function (_Req, _Res, _Next) {
        console.log('authenticating...');
        _Next();
    };
    return APIAuthentication;
}());
exports.APIAuthentication = APIAuthentication;
