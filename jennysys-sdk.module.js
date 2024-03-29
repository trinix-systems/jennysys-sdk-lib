"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.JennysysSdkModule = void 0;
var axios_1 = require("@nestjs/axios");
var common_1 = require("@nestjs/common");
var http_utility_1 = require("./http.utility");
var jennysys_sdk_service_1 = require("./jennysys-sdk.service");
var JennysysSdkModule = /** @class */ (function () {
    function JennysysSdkModule() {
    }
    JennysysSdkModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule],
            providers: [jennysys_sdk_service_1.JennysysSdk, http_utility_1.HttpUtility],
            exports: [jennysys_sdk_service_1.JennysysSdk]
        })
    ], JennysysSdkModule);
    return JennysysSdkModule;
}());
exports.JennysysSdkModule = JennysysSdkModule;
