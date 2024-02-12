import { ModelEntity } from "@trinix/app-utility";
export declare class UserModel extends ModelEntity {
    copy(): void;
    uuid: string;
    nom: string;
    matricule: string;
    service: string;
    token: string;
    username: string;
    fonction: string;
    static fromEntity(snapshot: any): UserModel;
    toEntity(): void;
}
