import { ModelEntity } from "@trinix/app-utility";
export declare class AccessModel extends ModelEntity {
    code: string;
    fkApplication: string;
    fkCategoryAccess: number;
    description: string;
    status: boolean;
    system: boolean;
    checked: boolean;
    static fromEntity(snapshot: any): AccessModel;
    toEntity(): any;
    copy(): AccessModel;
}
