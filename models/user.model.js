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
var profilAccess_model_1 = require("./profilAccess.model");
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        _this.fkProfilAccess = 0;
        _this.fkProfilApplication = 0;
        _this.fkUserCategory = 0;
        _this.nom = "";
        _this.username = "";
        _this.pwd = "";
        _this.pin = "";
        _this.token = "";
        _this.email = "";
        _this.phone = "";
        _this.adresse = "";
        _this.fkCentre = "";
        _this.fkEntreprise = "";
        _this.fonction = "";
        _this.service = "";
        _this.matricule = "";
        _this.lastConnexion = null;
        _this.role = "";
        _this.uuid = "";
        _this.fkApplication = "";
        _this.status = false;
        _this.access = [];
        _this.centre = null;
        _this.profilAcess = null;
        return _this;
    }
    UserModel.fromEntity = function (snapshot) {
        var obj = new UserModel();
        try {
            if (snapshot.id)
                obj.id = snapshot.id;
            if (snapshot.fkProfilAccess)
                obj.fkProfilAccess = snapshot.fkProfilAccess;
            if (snapshot.matricule)
                obj.matricule = snapshot.matricule;
            if (snapshot.fkProfilApplication)
                obj.fkProfilApplication = snapshot.fkProfilApplication;
            if (snapshot.fkUserCategory)
                obj.fkUserCategory = snapshot.fkUserCategory;
            if (snapshot.nom)
                obj.nom = snapshot.nom;
            if (snapshot.lastConnexion)
                obj.lastConnexion = snapshot.lastConnexion;
            if (snapshot.username)
                obj.username = snapshot.username;
            if (snapshot.token)
                obj.token = snapshot.token;
            if (snapshot.email)
                obj.email = snapshot.email;
            if (snapshot.phone)
                obj.phone = snapshot.phone;
            if (snapshot.service)
                obj.service = snapshot.service;
            if (snapshot.fonction)
                obj.fonction = snapshot.fonction;
            if (snapshot.adresse)
                obj.adresse = snapshot.adresse;
            if (snapshot.fkCentre)
                obj.fkCentre = snapshot.fkCentre;
            if (snapshot.fkEntreprise)
                obj.fkEntreprise = snapshot.fkEntreprise;
            if (snapshot.uuid)
                obj.uuid = snapshot.uuid;
            if (snapshot.fkApplication)
                obj.fkApplication = snapshot.fkApplication;
            if (snapshot.status)
                obj.status = snapshot.status instanceof Boolean ? snapshot.status : snapshot.status > 0;
            if (snapshot.pin)
                obj.pin = snapshot.pin;
            if (snapshot.profilAcess)
                obj.profilAcess = profilAccess_model_1.ProfilAccess.fromEntity(snapshot.profilAcess);
            if (snapshot.access) {
                for (var _i = 0, _a = snapshot.access; _i < _a.length; _i++) {
                    var detail = _a[_i];
                    obj.access.push(detail);
                }
            }
            if (snapshot.centre) {
                obj.centre = snapshot.centre;
            }
        }
        catch (ex) {
            console.log("user converting error : ");
            console.log(ex);
        }
        return obj;
    };
    UserModel.prototype.toEntity = function () {
        return {
            fkProfilAccess: this.fkProfilAccess,
            fkProfilApplication: this.fkProfilApplication,
            fkUserCategory: this.fkUserCategory,
            uuid: this.uuid,
            fkApplication: this.fkApplication,
            status: this.status
        };
    };
    UserModel.prototype.copy = function () {
        var data = new UserModel();
        data.id = this.id;
        data.nom = this.nom;
        data.access = this.access;
        data.adresse = this.adresse;
        data.centre = this.centre;
        data.email = this.email;
        data.fkApplication = this.fkApplication;
        data.fkCentre = this.fkCentre;
        data.fkEntreprise = this.fkEntreprise;
        data.phone = this.phone;
        data.fkProfilAccess = this.fkProfilAccess;
        data.service = this.service;
        data.fkProfilApplication = this.fkProfilApplication;
        data.fkUserCategory = this.fkUserCategory;
        data.fonction = this.fonction;
        data.matricule = this.matricule;
        data.profilAcess = this.profilAcess;
        data.username = this.username;
        data.uuid = this.uuid;
        data.status = this.status;
        return data;
    };
    UserModel.prototype.permitted = function (access) {
        return this.access.filter(function (obj) { return obj == access; }).length > 0;
    };
    return UserModel;
}(app_utility_1.ModelEntity));
exports.UserModel = UserModel;
