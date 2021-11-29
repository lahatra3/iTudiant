import { ProductsService } from './todos.service';
import { Etudiant } from './interfaces/todos.interface';
export declare class SaveData {
    private readonly saveData;
    constructor(saveData: ProductsService);
    getData(): Promise<Etudiant[]>;
    insertData(newData: any): void;
}
