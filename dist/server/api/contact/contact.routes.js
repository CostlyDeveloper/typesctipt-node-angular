"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
var contact_controller_1 = require("./contact.controller");
var ContactRoutes = /** @class */ (function () {
    function ContactRoutes() {
    }
    ContactRoutes.prototype.routes = function (_App, _Router) {
        var contactController = new contact_controller_1.ContactController();
        _App.use('/', contactController.sendMail.bind(contactController.sendMail));
    };
    return ContactRoutes;
}());
exports.ContactRoutes = ContactRoutes;
