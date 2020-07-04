"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INFORMATIONClass = void 0;
var validation_1 = require("../../layers/validation/validation");
var INFORMATIONClass;
(function (INFORMATIONClass) {
    var Email = /** @class */ (function () {
        function Email() {
            // region *** Properties ***
            this.Email = null;
            this.Message = null;
            // endregion // Properties //
            // region *** Layers ***
            this.validationField = new validation_1.LayerValidation.Field();
            this.validationObject = new validation_1.LayerValidation.ObjectValidation();
        }
        // endregion // Layers //
        Email.prototype.isValid = function () {
            return this.validationObject.invalidMembersFinder(this, this.Email, this.Message).length === 0;
        };
        Email.prototype.getInvalidFields = function () {
            return this.validationObject.invalidMembersFinder(this, this.Email, this.Message);
        };
        Email.prototype.valueSetter = function (_Data) {
            this.Email = this.validationField.emailValidation(_Data.Email) ? _Data.Email : this.Email;
            this.Message = this.validationField.messageValidation(_Data.Message) ? _Data.Message : this.Message;
            return this;
        };
        return Email;
    }()); // IEmail
    INFORMATIONClass.Email = Email;
})(INFORMATIONClass = exports.INFORMATIONClass || (exports.INFORMATIONClass = {}));
