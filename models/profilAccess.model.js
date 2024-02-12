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
exports.ProfilAccess = void 0;
var model_1 = require("@trinix/app-utility/models/model");
var detailsProfilAccess_model_1 = require("./detailsProfilAccess.model");
var ProfilAccess = /** @class */ (function (_super) {
    __extends(ProfilAccess, _super);
    function ProfilAccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        _this.fkProfilApplication = "";
        _this.description = "";
        _this.fkAccessParDefaut = "";
        _this.status = false;
        _this.userCount = 0;
        _this.accessCount = 0;
        _this.details = [];
        return _this;
    }
    ProfilAccess.prototype.copy = function () {
        var obj = new ProfilAccess();
        obj.fkProfilApplication = this.fkProfilApplication;
        obj.description = this.description;
        obj.fkAccessParDefaut = this.fkAccessParDefaut;
        obj.status = this.status;
        if (this.details.length > 0) {
            for (var _i = 0, _a = this.details; _i < _a.length; _i++) {
                var detail = _a[_i];
                detail.fkProfilAccess = 0;
                obj.details.push(detail);
            }
        }
        return obj;
    };
    ProfilAccess.fromEntity = function (snapshot) {
        var obj = new ProfilAccess();
        if (snapshot.id)
            obj.id = snapshot.id;
        if (snapshot.fkAccessParDefaut)
            obj.fkAccessParDefaut = snapshot.fkAccessParDefaut;
        if (snapshot.fkProfilApplication)
            obj.fkProfilApplication = snapshot.fkProfilApplication;
        if (snapshot.description)
            obj.description = snapshot.description;
        if (snapshot.userCount)
            obj.userCount = snapshot.userCount;
        if (snapshot.accessCount)
            obj.accessCount = snapshot.accessCount;
        if (snapshot.status)
            obj.status = snapshot.status instanceof Boolean ? snapshot.status : snapshot.status > 0;
        if (snapshot.details) {
            for (var _i = 0, _a = snapshot.details; _i < _a.length; _i++) {
                var detail = _a[_i];
                obj.details.push(detailsProfilAccess_model_1.DetailsProfilAccessModel.fromEntity(detail));
            }
        }
        return obj;
    };
    ProfilAccess.prototype.toEntity = function () {
        return {
            id: this.id,
            fkProfilApplication: this.fkProfilApplication,
            description: this.description,
            status: this.status
        };
    };
    return ProfilAccess;
}(model_1.ModelEntity));
exports.ProfilAccess = ProfilAccess;
