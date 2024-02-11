import { HttpService } from '@nestjs/axios';
import { IService } from '@trinix/app-utility';
import { AxiosResponse } from 'axios';
export declare class JennysysSdk extends IService {
    private static _instance;
    private htpUtility;
    constructor();
    static instance(): JennysysSdk;
    init(httpService: HttpService): void;
    authentification(username: string, password: string): Promise<any>;
    authentificationByEmail(email: string, password: string): Promise<AxiosResponse<any>>;
    authentificationByPhone(phone: string, password: string): Promise<AxiosResponse<any>>;
    verifyToken(username: string, token: string): Promise<AxiosResponse<any>>;
    recoveryPassword(email: string, username: string): Promise<any>;
    changePassword(username: string, actualPassword: string, newPassword: string, confirm: string, token: string): Promise<any>;
    verificationOTP(name: string, country: string, phone: string): Promise<any>;
    signUpByOTP(otp: string, password: string, email: string, adresse: string, profilAccess: number, centre: string, entreprise: string): Promise<any>;
    changePin(username: string, token: string, newPin: string, oldPin: string): Promise<any>;
    signUp(nom: string, phone: string, email: string, login: string, expirationDate: string, role: string, fonction: string, centre: string, profilAccess: number, adresse: string, token: string, userId: number): Promise<any>;
    modifyUser(uuid: string, nom: string, phone: string, email: string, login: string, expirationDate: string, role: string, fonction: string, centre: string, profilAccess: number, adresse: string, token: string, entreprise: string, password: string, userId: number): Promise<any>;
    verifyCodePIN(token: string, pin: string, username: string): Promise<any>;
    getTokenByEmailAndUsername(email: string, username: string): Promise<any>;
}
export declare enum URLS {
    CONST_VERY_TOKEN = "/JennySys/api/authentification/verifyToken",
    CONST_VERY_PIN = "/JennySys/api/authentification/pin/verification",
    CONST_CONNEXION = "/JennySys/api/authentification",
    CONST_RENEW_PWD = "/JennySys/api/authentification/password/reinitialize",
    CONST_EDIT_USER = "/JennySys/api/setting/users/edit",
    CONST_EDIT_PROFIL_ACCESS = "/JennySys/api/profil-access/edit",
    CONST_GET_OTP = "/JennySys/api/authentification/otp/verification",
    CONST_SIGNUP_OTP = "/JennySys/api/authentification/signup/otp",
    CONST_SIGNUP_STANDARD = "/JennySys/api/authentification/signup",
    CONST_CHANGE_PIN = "/JennySys/api/authentification/pin/change",
    CONST_CHANGE_PWD = "/JennySys/api/authentification/password/change",
    CONST_CONNEXION_BY_EMAIL = "JennySys/api/authentification/email",
    CONST_CONNEXION_BY_PHONE = "JennySys/api/authentification/phone"
}
