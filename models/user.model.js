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
exports.UserModel = void 0;
var app_utility_1 = require("@trinix/app-utility");
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uuid = "";
        _this.nom = "";
        _this.matricule = "";
        _this.service = "";
        _this.token = "";
        _this.username = "";
        _this.fonction = "";
        return _this;
    }
    UserModel.prototype.copy = function () {
        throw new Error("Method not implemented.");
    };
    UserModel.fromEntity = function (snapshot) {
        var obj = new UserModel();
        if (snapshot.uuid)
            obj.uuid = snapshot.uuid;
        if (snapshot.nom)
            obj.nom = snapshot.nom;
        if (snapshot.matricule)
            obj.matricule = snapshot.matricule;
        if (snapshot.service)
            obj.service = snapshot.service;
        if (snapshot.token)
            obj.token = snapshot.token;
        if (snapshot.fonction)
            obj.fonction = snapshot.fonction;
        if (snapshot.username)
            obj.username = snapshot.username;
        return obj;
    };
    UserModel.prototype.toEntity = function () {
        throw new Error("Method not implemented.");
    };
    return UserModel;
}(app_utility_1.ModelEntity));
exports.UserModel = UserModel;
