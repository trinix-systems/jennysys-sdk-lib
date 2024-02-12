"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.AuthentificationController = void 0;
var common_1 = require("@nestjs/common");
var app_utility_1 = require("@trinix/app-utility");
var app_error_const_1 = require("../app.error.const");
var jennysys_sdk_service_1 = require("../jennysys-sdk.service");
var AuthentificationController = /** @class */ (function () {
    function AuthentificationController() {
    }
    AuthentificationController_1 = AuthentificationController;
    AuthentificationController.prototype.authentification = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, ex_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("JennySysSdk authentification : " + JSON.stringify(payload));
                        response = new app_utility_1.HttpDataResponse();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = response;
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().authentification(payload.username, payload.password)];
                    case 2:
                        _a.response = _b.sent();
                        response.error.errorCode = jennysys_sdk_service_1.JennysysSdk.instance().error().errorCode;
                        response.error.errorDescription = jennysys_sdk_service_1.JennysysSdk.instance().error().errorDescription;
                        console.log("authentification : " + JSON.stringify(response));
                        return [3 /*break*/, 4];
                    case 3:
                        ex_1 = _b.sent();
                        response.error.errorCode = app_utility_1.ErrorResponseStatus.KO;
                        if (ex_1 instanceof app_utility_1.ValueDataException) {
                            response.error.errorDescription = ex_1.message;
                        }
                        else {
                            console.log(ex_1);
                            response.error.errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("authentification [" + response.error.errorCode + "] : " + response.error.errorDescription);
                        return [2 /*return*/, response];
                }
            });
        });
    };
    AuthentificationController.prototype.verifyToken = function (authRequest) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, ex_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log("ePort verifyToken : " + JSON.stringify(authRequest));
                        response = new app_utility_1.HttpDataResponse();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = response;
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().verifyToken(authRequest.username, authRequest.token)];
                    case 2:
                        _a.response = _b.sent();
                        response.error.errorCode = jennysys_sdk_service_1.JennysysSdk.instance().error().errorCode;
                        response.error.errorDescription = jennysys_sdk_service_1.JennysysSdk.instance().error().errorDescription;
                        console.log("verifyToken : " + JSON.stringify(response));
                        return [3 /*break*/, 4];
                    case 3:
                        ex_2 = _b.sent();
                        response.error.errorCode = app_utility_1.ErrorResponseStatus.KO;
                        if (ex_2 instanceof app_utility_1.ValueDataException) {
                            response.error.errorDescription = ex_2.message;
                        }
                        else {
                            common_1.Logger.log(AuthentificationController_1.TAG, ex_2);
                            console.log(ex_2);
                            response.error.errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                        }
                        return [3 /*break*/, 4];
                    case 4:
                        console.log("verifyToken [" + response.error.errorCode + "] : " + response.error.errorDescription);
                        return [2 /*return*/, response];
                }
            });
        });
    };
    AuthentificationController.prototype.resetPassword = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("JennySysSdk resetPassword : " + JSON.stringify(payload));
                        response = new app_utility_1.HttpDataResponse();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().verifyToken(payload.username, payload.token)];
                    case 2:
                        result = _a.sent();
                        response.error = jennysys_sdk_service_1.JennysysSdk.instance().error();
                        if (response.error.errorCode == app_utility_1.ErrorResponseStatus.KO) {
                            throw new app_utility_1.ValueDataException(jennysys_sdk_service_1.JennysysSdk.instance().error().errorDescription);
                        }
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().recoveryPassword(payload.email, payload.login)];
                    case 3:
                        result = _a.sent(); //await JennysysSdk.instance().authentification(authRequest.username, authRequest.password);
                        response.error = jennysys_sdk_service_1.JennysysSdk.instance().error();
                        if (response.error.errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            response.response = result;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        ex_3 = _a.sent();
                        response.error.errorCode = app_utility_1.ErrorResponseStatus.KO;
                        if (ex_3 instanceof app_utility_1.ValueDataException) {
                            response.error.errorDescription = ex_3.message;
                        }
                        else {
                            common_1.Logger.log(AuthentificationController_1.TAG, ex_3);
                            response.error.errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, response];
                }
            });
        });
    };
    AuthentificationController.prototype.changePassword = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, ex_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("JennySysSdk changePassword : " + JSON.stringify(payload));
                        response = new app_utility_1.HttpDataResponse();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().verifyToken(payload.username, payload.token)];
                    case 2:
                        result = _a.sent();
                        response.error = jennysys_sdk_service_1.JennysysSdk.instance().error();
                        if (response.error.errorCode == app_utility_1.ErrorResponseStatus.KO) {
                            throw new app_utility_1.ValueDataException(jennysys_sdk_service_1.JennysysSdk.instance().error().errorDescription);
                        }
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().changePassword(payload.username, payload.actualPassword, payload.newPassword, payload.confirm, payload.token)];
                    case 3:
                        result = _a.sent(); //await JennysysSdk.instance().authentification(authRequest.username, authRequest.password);
                        response.error = jennysys_sdk_service_1.JennysysSdk.instance().error();
                        if (response.error.errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            response.response = result;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        ex_4 = _a.sent();
                        response.error.errorCode = app_utility_1.ErrorResponseStatus.KO;
                        if (ex_4 instanceof app_utility_1.ValueDataException) {
                            response.error.errorDescription = ex_4.message;
                        }
                        else {
                            common_1.Logger.log(AuthentificationController_1.TAG, ex_4);
                            response.error.errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, response];
                }
            });
        });
    };
    AuthentificationController.prototype.changePIN = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, ex_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("JennySysSdk changePIN : " + JSON.stringify(params));
                        response = new app_utility_1.HttpDataResponse();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().verifyToken(params.username, params.token)];
                    case 2:
                        result = _a.sent();
                        response.error = jennysys_sdk_service_1.JennysysSdk.instance().error();
                        if (response.error.errorCode == app_utility_1.ErrorResponseStatus.KO) {
                            throw jennysys_sdk_service_1.JennysysSdk.instance().error().errorDescription;
                        }
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().changePin(params.username, params.token, params["new"], params.pinActual)];
                    case 3:
                        result = _a.sent();
                        response.error = jennysys_sdk_service_1.JennysysSdk.instance().error();
                        if (response.error.errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            response.response = result;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        ex_5 = _a.sent();
                        response.error.errorCode = app_utility_1.ErrorResponseStatus.KO;
                        if (ex_5 instanceof app_utility_1.ValueDataException) {
                            response.error.errorDescription = ex_5.message;
                        }
                        else {
                            console.log(ex_5);
                            common_1.Logger.log(AuthentificationController_1.TAG, ex_5);
                            response.error.errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, response];
                }
            });
        });
    };
    AuthentificationController.prototype.signUp = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response, result, ex_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("JennySysSdk signUp : " + JSON.stringify(payload));
                        response = new app_utility_1.HttpDataResponse();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().verifyToken(payload.username, payload.token)];
                    case 2:
                        result = _a.sent();
                        response.error = jennysys_sdk_service_1.JennysysSdk.instance().error();
                        if (response.error.errorCode == app_utility_1.ErrorResponseStatus.KO) {
                            throw jennysys_sdk_service_1.JennysysSdk.instance().error().errorDescription;
                        }
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().signUp(payload.nom, payload.phone, payload.email, payload.login, payload.expirationDate, payload.role, payload.fonction, payload.centre, payload.profilAccess, payload.adresse, payload.token, result.id)];
                    case 3:
                        /*
                        if(params.accessClient){
                            await this.ctrl.getSociete(params.fkSociete);
                            if(this.ctrl.getError().errorCode==ErrorResponseStatus.KO) throw new ValueDataException(this.ctrl.getError().errorDescription);
                        }
                        */
                        result = _a.sent();
                        response.error = jennysys_sdk_service_1.JennysysSdk.instance().error();
                        if (response.error.errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            response.response = result;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        ex_6 = _a.sent();
                        response.error.errorCode = app_utility_1.ErrorResponseStatus.KO;
                        if (ex_6 instanceof app_utility_1.ValueDataException) {
                            response.error.errorDescription = ex_6.message;
                        }
                        else {
                            console.log(ex_6);
                            common_1.Logger.log(AuthentificationController_1.TAG, ex_6);
                            response.error.errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/, response];
                }
            });
        });
    };
    AuthentificationController.prototype.verifyOTP = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response, country, result, ex_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("verifyOTP : " + JSON.stringify(payload));
                        response = new app_utility_1.HttpDataResponse();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        if (!payload) {
                            throw new app_utility_1.ValueDataException("Aucun paramètre n'a été reçu");
                        }
                        app_utility_1.AppUtilityControl.controlValueString(payload.phone, "Renseignez votre numéro de téléphone");
                        app_utility_1.AppUtilityControl.controlValueString(payload.name, "Renseignez votre nom");
                        payload.phone = payload.phone.replace("+", "");
                        country = "243";
                        if (!payload.phone.trim().startsWith(country)) {
                            throw new app_utility_1.ValueDataException("Ce pays n'est pas pris en charge");
                        }
                        payload.phone = payload.phone.replace(country, "");
                        return [4 /*yield*/, jennysys_sdk_service_1.JennysysSdk.instance().verificationOTP(payload.name, country, payload.phone)];
                    case 2:
                        result = _a.sent();
                        console.log(result);
                        response.error.errorCode = jennysys_sdk_service_1.JennysysSdk.instance().error().errorCode;
                        response.error.errorDescription = jennysys_sdk_service_1.JennysysSdk.instance().error().errorDescription;
                        if (response.error.errorCode == app_utility_1.ErrorResponseStatus.OK) {
                            response.response = result;
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        ex_7 = _a.sent();
                        response.error.errorCode = app_utility_1.ErrorResponseStatus.KO;
                        if (ex_7 instanceof app_utility_1.ValueDataException) {
                            response.error.errorDescription = ex_7.message;
                        }
                        else {
                            console.log(ex_7);
                            common_1.Logger.log(AuthentificationController_1.TAG, ex_7);
                            response.error.errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, response];
                }
            });
        });
    };
    AuthentificationController.prototype.getCode = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                console.log("code : " + JSON.stringify(payload));
                response = new app_utility_1.HttpDataResponse();
                try {
                    response.response = app_utility_1.AppEncryption.instance().setKey(process.env.JS_SESSION_SECRET_KEY).encryptText(payload.text);
                    response.error.errorCode = app_utility_1.ErrorResponseStatus.OK;
                    response.error.errorDescription = "Encrypted";
                }
                catch (ex) {
                    response.error.errorCode = app_utility_1.ErrorResponseStatus.KO;
                    if (ex instanceof app_utility_1.ValueDataException) {
                        response.error.errorDescription = ex.message;
                    }
                    else {
                        console.log(ex);
                        common_1.Logger.log(AuthentificationController_1.TAG, ex);
                        response.error.errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                    }
                }
                return [2 /*return*/, response];
            });
        });
    };
    AuthentificationController.prototype.getDeCode = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                console.log("decode : " + JSON.stringify(payload));
                response = new app_utility_1.HttpDataResponse();
                try {
                    response.response = app_utility_1.AppEncryption.instance().setKey(process.env.JS_SESSION_SECRET_KEY).decryptText(payload.text);
                    response.error.errorCode = app_utility_1.ErrorResponseStatus.OK;
                    response.error.errorDescription = "Encrypted";
                }
                catch (ex) {
                    response.error.errorCode = app_utility_1.ErrorResponseStatus.KO;
                    if (ex instanceof app_utility_1.ValueDataException) {
                        response.error.errorDescription = ex.message;
                    }
                    else {
                        console.log(ex);
                        common_1.Logger.log(AuthentificationController_1.TAG, ex);
                        response.error.errorDescription = app_error_const_1.AppErrorConst.ERR_UNKNOW;
                    }
                }
                return [2 /*return*/, response];
            });
        });
    };
    var AuthentificationController_1;
    AuthentificationController.TAG = "AuthentificationController";
    __decorate([
        (0, common_1.Post)("/"),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthentificationController.prototype, "authentification");
    __decorate([
        (0, common_1.Post)("/verify-token"),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthentificationController.prototype, "verifyToken");
    __decorate([
        (0, common_1.Post)("/reset-password"),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthentificationController.prototype, "resetPassword");
    __decorate([
        (0, common_1.Post)("/change-password"),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthentificationController.prototype, "changePassword");
    __decorate([
        (0, common_1.Post)("/change-pin"),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthentificationController.prototype, "changePIN");
    __decorate([
        (0, common_1.Post)("/signUp"),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthentificationController.prototype, "signUp");
    __decorate([
        (0, common_1.Post)("/otp/verification"),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthentificationController.prototype, "verifyOTP");
    __decorate([
        (0, common_1.Post)("/code"),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthentificationController.prototype, "getCode");
    __decorate([
        (0, common_1.Post)("/decode"),
        (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthentificationController.prototype, "getDeCode");
    AuthentificationController = AuthentificationController_1 = __decorate([
        (0, common_1.Controller)('authentification')
    ], AuthentificationController);
    return AuthentificationController;
}());
exports.AuthentificationController = AuthentificationController;
