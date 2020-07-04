"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerValidation = void 0;
var LayerValidation;
(function (LayerValidation) {
    var Field = /** @class */ (function () {
        function Field() {
            this.EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.PasswordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
            this.LettersRegexp = /^[A-Za-z]+$/;
            this.NumberRegexp = /^[0-9]+$/;
            this.PercentageRegexp = /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/;
        }
        Field.prototype.passwordValidation = function (_Input) {
            return this.PasswordRegexp.test(_Input);
        };
        Field.prototype.lettersValidation = function (_Input) {
            return this.LettersRegexp.test(_Input);
        };
        Field.prototype.numbersValidation = function (_Input) {
            return this.LettersRegexp.test(String(_Input));
        };
        Field.prototype.percentageValidation = function (_Input) {
            return this.PercentageRegexp.test(String(_Input));
        };
        Field.prototype.emailValidation = function (_Input) {
            return this.EmailRegex.test(String(_Input));
        };
        Field.prototype.messageValidation = function (_Input) {
            var lassie = false;
            if (typeof _Input === 'string') {
                lassie = _Input.length > 30;
            }
            return lassie;
        };
        return Field;
    }()); // class Field
    LayerValidation.Field = Field;
    var ObjectValidation = /** @class */ (function () {
        function ObjectValidation() {
        }
        ObjectValidation.prototype.invalidMembersFinder = function (_Object) {
            var _PropertiesForValidation = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                _PropertiesForValidation[_i - 1] = arguments[_i];
            }
            var invalidPropertyList = [];
            Object.keys(_Object).forEach(function (key) {
                if (_Object[key] === null) {
                    if (_PropertiesForValidation.includes(_Object[key])) {
                        invalidPropertyList.push(key);
                    }
                }
            });
            return invalidPropertyList;
        };
        return ObjectValidation;
    }()); // class Object
    LayerValidation.ObjectValidation = ObjectValidation;
})(LayerValidation = exports.LayerValidation || (exports.LayerValidation = {}));
