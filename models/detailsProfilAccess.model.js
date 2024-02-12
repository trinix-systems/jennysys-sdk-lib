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
exports.DetailsProfilAccessModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var access_model_1 = require("./access.model");
var DetailsProfilAccessModel = /** @class */ (function (_super) {
    __extends(DetailsProfilAccessModel, _super);
    function DetailsProfilAccessModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        _this.fkProfilAccess = 0;
        _this.fkAccess = "";
        _this.status = false;
        _this.allow = false;
        _this.access = null;
        return _this;
    }
    DetailsProfilAccessModel.fromEntity = function (snapshot) {
        var obj = new DetailsProfilAccessModel();
        if (snapshot.id)
            obj.id = snapshot.id;
        if (snapshot.fkProfilAccess)
            obj.fkProfilAccess = snapshot.fkProfilAccess;
        if (snapshot.fkAccess)
            obj.fkAccess = snapshot.fkAccess;
        if (snapshot.allow)
            obj.allow = snapshot.allow instanceof Boolean ? snapshot.allow : snapshot.allow > 0;
        if (snapshot.status)
            obj.status = snapshot.status instanceof Boolean ? snapshot.status : snapshot.status > 0;
        if (snapshot.access) {
            obj.access = access_model_1.AccessModel.fromEntity(snapshot.access);
        }
        return obj;
    };
    DetailsProfilAccessModel.prototype.toEntity = function () {
        return {
            id: this.id,
            fkProfilAccess: this.fkProfilAccess,
            fkAccess: this.fkAccess,
            status: this.status,
            allow: this.allow
        };
    };
    DetailsProfilAccessModel.prototype.copy = function () {
        var obj = new DetailsProfilAccessModel();
        obj.id = this.id;
        obj.fkAccess = this.fkAccess;
        obj.fkProfilAccess = this.fkProfilAccess;
        obj.status = this.status;
        obj.allow = this.allow;
        return obj;
    };
    return DetailsProfilAccessModel;
}(app_utility_1.ModelEntity));
exports.DetailsProfilAccessModel = DetailsProfilAccessModel;
