import { ModelEntity } from "@trinix/app-utility/models/model";
import { DetailsProfilAccessModel } from "./detailsProfilAccess.model";
export declare class ProfilAccess extends ModelEntity {
    id: number;
    fkProfilApplication: string;
    description: string;
    fkAccessParDefaut: string;
    status: boolean;
    userCount: number;
    accessCount: number;
    details: DetailsProfilAccessModel[];
    copy(): ProfilAccess;
    static fromEntity(snapshot: any): ProfilAccess;
    toEntity(): {
        id: number;
        fkProfilApplication: string;
        description: string;
        status: boolean;
    };
}
