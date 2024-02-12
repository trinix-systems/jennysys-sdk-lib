import { ModelEntity } from "@trinix/app-utility";
import { AccessModel } from "./access.model";
export declare class DetailsProfilAccessModel extends ModelEntity {
    id: number;
    fkProfilAccess: number;
    fkAccess: string;
    status: boolean;
    allow: boolean;
    access: AccessModel | null;
    static fromEntity(snapshot: any): DetailsProfilAccessModel;
    toEntity(): any;
    copy(): DetailsProfilAccessModel;
}
