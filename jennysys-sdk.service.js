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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.URLS = exports.JennysysSdk = void 0;
var common_1 = require("@nestjs/common");
var app_utility_1 = require("@trinix/app-utility");
var app_error_const_1 = require("./app.error.const");
var http_utility_1 = require("./http.utility");
var JennysysSdk = /** @class */ (function (_super) {
    __extends(JennysysSdk, _super);
    function JennysysSdk() {
        var _this = _super.call(this) || this;
        if (!_this.htpUtility) {
            _this.htpUtility = new http_utility_1.HttpUtility();
            console.log('HttpService injected:', _this.htpUtility.httpService);
        }
        return _this;
    }
    JennysysSdk_1 = JennysysSdk;
    JennysysSdk.instance = function () {
        if (JennysysSdk_1._instance == null)
            JennysysSdk_1._instance = new JennysysSdk_1();
        return JennysysSdk_1._instance;
    };
    JennysysSdk.prototype.authentification = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        params = {
                            login: username,
                            password: password
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_CONNEXION, params)];
                    case 2:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result.response];
                    case 3:
                        ex_1 = _a.sent();
                        this.error().errorCode = app_utility_1.ErrorResponseStatus.KO;
                        this.error().errorDescription = app_error_const_1.AppErrorConst.ERR_HTTP_UNKNOW;
                        console.log(ex_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, null];
                }
            });
        });
    };
    JennysysSdk.prototype.authentificationByEmail = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        params = {
                            email: email,
                            password: password
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_CONNEXION_BY_EMAIL, params)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result.response];
                }
            });
        });
    };
    JennysysSdk.prototype.authentificationByPhone = function (phone, password) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error();
                        params = {
                            phone: phone,
                            password: password
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_CONNEXION_BY_PHONE, params)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result.response];
                }
            });
        });
    };
    JennysysSdk.prototype.verifyToken = function (username, token) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        if (username == null || (username != null && username.trim().length <= 0)) {
                        }
                        params = {
                            login: username,
                            token: token
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_VERY_TOKEN, params)];
                    case 1:
                        result = _a.sent();
                        //console.log(result);
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result.response];
                }
            });
        });
    };
    JennysysSdk.prototype.recoveryPassword = function (email, username) {
        return __awaiter(this, void 0, void 0, function () {
            var token, params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        if (username == null || (username != null && username.trim().length <= 0)) {
                        }
                        token = this.getTokenByEmailAndUsername(email, username);
                        if (token.error.errorCode == "KO") {
                            this.error().errorDescription = token.error.errorDescription;
                            return [2 /*return*/];
                        }
                        params = {
                            username: username,
                            token: token.response
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_RENEW_PWD, params)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result.response];
                }
            });
        });
    };
    JennysysSdk.prototype.changePassword = function (username, actualPassword, newPassword, confirm, token) {
        return __awaiter(this, void 0, void 0, function () {
            var result, params, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.error().clear();
                        app_utility_1.AppUtilityControl.controlValueString(username, "Renseignez le nom d'utilisateur");
                        app_utility_1.AppUtilityControl.controlValueString(actualPassword, "Renseignez l'actuel mot de passe");
                        app_utility_1.AppUtilityControl.controlValueString(newPassword, "Renseignez votre nouveau mot de passe");
                        app_utility_1.AppUtilityControl.controlValueString(confirm, "Confirmez votre nouveau mot de passe");
                        if (newPassword != confirm) {
                            throw new app_utility_1.ValueDataException("Votre nouveau mot de passe est différent de sa confirmation");
                        }
                        params = {
                            token: token,
                            password: actualPassword,
                            passwordNew: newPassword,
                            username: username
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_CHANGE_PWD, params)];
                    case 2:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_2 = _a.sent();
                        this.error().clear();
                        if (ex_2 instanceof app_utility_1.ValueDataException) {
                            this.error().errorDescription = ex_2.message;
                        }
                        else {
                            this.error().errorDescription = app_error_const_1.AppErrorConst.ERR_HTTP_UNKNOW;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, result.response];
                }
            });
        });
    };
    JennysysSdk.prototype.verificationOTP = function (name, country, phone) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        params = {
                            name: name,
                            phone: phone,
                            country: country
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_GET_OTP, params)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result.response()];
                }
            });
        });
    };
    JennysysSdk.prototype.signUpByOTP = function (otp, password, email, adresse, profilAccess, centre, entreprise) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        params = {
                            adresse: adresse,
                            otp: otp,
                            email: email,
                            entreprise: entreprise,
                            password: password,
                            profilAccess: profilAccess,
                            centre: centre
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_SIGNUP_OTP, params)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result.response];
                }
            });
        });
    };
    JennysysSdk.prototype.changePin = function (username, token, newPin, oldPin) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        params = {
                            username: username,
                            token: token,
                            pinNew: newPin,
                            pin: oldPin
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_CHANGE_PIN, params)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result.response];
                }
            });
        });
    };
    JennysysSdk.prototype.signUp = function (nom, phone, email, login, expirationDate, role, fonction, centre, profilAccess, adresse, token, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        params = {
                            profilAccess: profilAccess,
                            profilApplication: 1,
                            categorie: 1,
                            nom: nom,
                            email: email,
                            adresse: adresse,
                            phone: phone,
                            centre: centre,
                            username: login,
                            token: token
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_SIGNUP_STANDARD, params)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result.response];
                }
            });
        });
    };
    JennysysSdk.prototype.modifyUser = function (uuid, nom, phone, email, login, expirationDate, role, fonction, centre, profilAccess, adresse, token, entreprise, password, userId) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        params = {
                            uuid: uuid,
                            entreprise: entreprise,
                            expirationDate: expirationDate,
                            role: role,
                            fonction: fonction,
                            password: password,
                            profilAccess: profilAccess,
                            profilApplication: 1,
                            categorie: 1,
                            nom: nom,
                            email: email,
                            adresse: adresse,
                            phone: phone,
                            centre: centre,
                            username: login,
                            token: token
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_EDIT_USER, params)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        else {
                            this.error().errorCode = app_utility_1.ErrorResponseStatus.KO;
                            this.error().errorDescription = "Nous éprouvons des difficulés à contactez JennySys";
                            console.log(result);
                        }
                        return [2 /*return*/, result.response];
                }
            });
        });
    };
    JennysysSdk.prototype.verifyCodePIN = function (token, pin, username) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        params = {
                            username: username,
                            token: token,
                            pin: pin
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_VERY_PIN, params)];
                    case 1:
                        result = _a.sent();
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    JennysysSdk.prototype.getTokenByEmailAndUsername = function (email, username) {
        throw new Error("Method deprecated");
    };
    JennysysSdk.prototype.getUserByUuid = function (username, token, fkEntreprise, uuid) {
        return __awaiter(this, void 0, void 0, function () {
            var params, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.error().clear();
                        if (username == null || (username != null && username.trim().length <= 0)) {
                        }
                        params = {
                            login: username,
                            token: token,
                            fkEntreprise: fkEntreprise,
                            code: uuid
                        };
                        return [4 /*yield*/, this.htpUtility.doPost(URLS.CONST_GET_USER_BY_UUID, params)];
                    case 1:
                        result = _a.sent();
                        //console.log(result);
                        if (result != null) {
                            this.error().errorCode = result.error.errorCode;
                            this.error().errorDescription = result.error.errorDescription;
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    var JennysysSdk_1;
    JennysysSdk._instance = null;
    JennysysSdk = JennysysSdk_1 = __decorate([
        (0, common_1.Injectable)()
    ], JennysysSdk);
    return JennysysSdk;
}(app_utility_1.IService));
exports.JennysysSdk = JennysysSdk;
var URLS;
(function (URLS) {
    URLS["CONST_VERY_TOKEN"] = "/JennySys/api/authentification/verifyToken";
    URLS["CONST_VERY_PIN"] = "/JennySys/api/authentification/pin/verification";
    URLS["CONST_CONNEXION"] = "/JennySys/api/authentification";
    URLS["CONST_RENEW_PWD"] = "/JennySys/api/authentification/password/reinitialize";
    URLS["CONST_EDIT_USER"] = "/JennySys/api/setting/users/edit";
    URLS["CONST_EDIT_PROFIL_ACCESS"] = "/JennySys/api/profil-access/edit";
    URLS["CONST_GET_OTP"] = "/JennySys/api/authentification/otp/verification";
    URLS["CONST_SIGNUP_OTP"] = "/JennySys/api/authentification/signup/otp";
    URLS["CONST_SIGNUP_STANDARD"] = "/JennySys/api/authentification/signup";
    URLS["CONST_CHANGE_PIN"] = "/JennySys/api/authentification/pin/change";
    URLS["CONST_CHANGE_PWD"] = "/JennySys/api/authentification/password/change";
    URLS["CONST_CONNEXION_BY_EMAIL"] = "JennySys/api/authentification/email";
    URLS["CONST_CONNEXION_BY_PHONE"] = "JennySys/api/authentification/phone";
    URLS["CONST_GET_USER_BY_UUID"] = "/JennySys/api/setting/users/get";
})(URLS = exports.URLS || (exports.URLS = {}));
