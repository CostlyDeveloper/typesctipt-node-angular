"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactController = void 0;
var information_class_1 = require("../../../dependencies/models/INFORMATION/information.class");
var data_hub_1 = require("../../../dependencies/layers/data-hub/data-hub");
var ContactController = /** @class */ (function () {
    function ContactController() {
    }
    ContactController.prototype.sendMail = function (_Req, _Res) {
        var EmailModel = new information_class_1.INFORMATIONClass.Email();
        var DataHubResponse = new data_hub_1.LayerDataHub.Response();
        EmailModel.valueSetter(_Req.body.Request);
        // _Res.setHeader('Content-Type', 'application/json');
        if (!EmailModel.isValid()) {
            var errorList = [];
            if (EmailModel.getInvalidFields().includes('Email')) {
                errorList.push('Invalid Email.');
            }
            if (EmailModel.getInvalidFields().includes('Message')) {
                errorList.push('Invalid message, the message must be longer than 30 characters.');
            }
            DataHubResponse.Message.Title = 'Error';
            DataHubResponse.Message.Description = errorList.join('\n');
            DataHubResponse.Message.Message = 'Validation Error';
            DataHubResponse.Message.Code = 422;
            _Res.status(DataHubResponse.Message.Code).json(DataHubResponse.Message);
        }
        else {
            DataHubResponse.setResponse(_Req.body.Request);
            DataHubResponse.Message.Title = 'Success';
            DataHubResponse.Message.Message = 'Your message has been sent!';
            DataHubResponse.Message.Code = 200;
            _Res.send(DataHubResponse);
        }
    };
    return ContactController;
}());
exports.ContactController = ContactController;
