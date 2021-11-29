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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductsService = class ProductsService {
    constructor(productModul) {
        this.productModul = productModul;
    }
    async insertStudents(donnees) {
        console.log(donnees);
        const newProduct = new this.productModul({
            nom: donnees.nom,
            prenoms: donnees.prenoms,
            email: donnees.email,
            niveau_semestre: donnees.niveau,
            niveau_date: donnees.data,
            niveau_note: "",
            niveau_lien_frais: "",
            niveau_status_frais: 1,
            contact_etudiant: donnees.phone_etudiant,
            contact_parent: donnees.phone_parent,
            status_etudiant: 1,
            alternance_entreprise: "",
            alternance_date_debut: "",
            alternance_date_fin: "",
            alternance_convention: "",
            sanctions_date: "",
            sanctions_motifs: "",
            sanctions_punishments: "",
            retard_date: "",
            retard_motifs: "",
            retard_duree: "",
            abscence_date_debut: "",
            abscence_date_fin: "",
            abscence_motifs: ""
        });
        const result = await newProduct.save();
        return result;
    }
    async getStudents() {
        const etudiants = await this.productModul.find().exec();
        return etudiants;
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Product')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=todos.service.js.map