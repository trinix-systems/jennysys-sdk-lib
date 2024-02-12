"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AccessModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var AccessModel = /** @class */ (function (_super) {
    __extends(AccessModel, _super);
    function AccessModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.code = "";
        _this.fkApplication = "";
        _this.fkCategoryAccess = 0;
        _this.description = "";
        _this.status = true;
        _this.system = false;
        _this.checked = false;
        return _this;
    }
    AccessModel.fromEntity = function (snapshot) {
        var obj = new AccessModel();
        if (snapshot.code)
            obj.code = snapshot.code;
        if (snapshot.fkApplication)
            obj.fkApplication = snapshot.fkApplication;
        if (snapshot.fkCategoryAccess)
            obj.fkCategoryAccess = snapshot.fkCategoryAccess;
        if (snapshot.description)
            obj.description = snapshot.description;
        if (snapshot.status)
            obj.status = snapshot.status instanceof Boolean ? snapshot.status : snapshot.status > 0;
        if (snapshot.system)
            obj.system = snapshot.system instanceof Boolean ? snapshot.system : snapshot.system > 0;
        return obj;
    };
    AccessModel.prototype.toEntity = function () {
        return {
            code: this.code,
            fkApplication: this.fkApplication,
            fkCategoryAccess: this.fkCategoryAccess,
            description: Buffer.from(this.description, 'utf8'),
            status: this.status,
            system: this.system
        };
    };
    AccessModel.prototype.copy = function () {
        var obj = new AccessModel();
        obj.code = this.code;
        obj.fkApplication = this.fkApplication;
        obj.fkCategoryAccess = this.fkCategoryAccess;
        obj.description = this.description;
        obj.status = this.status;
        obj.system = this.system;
        return obj;
    };
    return AccessModel;
}(app_utility_1.ModelEntity));
exports.AccessModel = AccessModel;
