import { HttpDataResponse } from '@trinix/app-utility';
export declare class AuthentificationController {
    static TAG: string;
    authentification(payload: any): Promise<HttpDataResponse<any>>;
    verifyToken(authRequest: any): Promise<HttpDataResponse<any>>;
    resetPassword(payload: any): Promise<HttpDataResponse<any>>;
    changePassword(payload: any): Promise<HttpDataResponse<any>>;
    changePIN(params: any): Promise<HttpDataResponse<any>>;
    signUp(payload: any): Promise<HttpDataResponse<any>>;
    verifyOTP(payload: any): Promise<HttpDataResponse<any>>;
    getCode(payload: any): Promise<HttpDataResponse<any>>;
    getDeCode(payload: any): Promise<HttpDataResponse<any>>;
}
