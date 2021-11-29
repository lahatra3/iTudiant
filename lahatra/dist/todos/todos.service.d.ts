import { Model } from 'mongoose';
import { Etudiant } from './interfaces/todos.interface';
export declare class ProductsService {
    private readonly productModul;
    constructor(productModul: Model<Etudiant>);
    insertStudents(donnees: any): Promise<import("mongoose").Document<any, any, Etudiant> & Etudiant & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getStudents(): Promise<(import("mongoose").Document<any, any, Etudiant> & Etudiant & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
