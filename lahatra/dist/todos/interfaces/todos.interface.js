"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const mongoose = require("mongoose");
exports.ProductSchema = new mongoose.Schema({
    nom: String,
    prenoms: String,
    email: String,
    niveau_semestre: String,
    niveau_date: String,
    niveau_note: String,
    niveau_lien_frais: String,
    niveau_status_frais: String,
    contact_etudiant: String,
    contact_parent: String,
    status_etudiant: String,
    alternance_entreprise: String,
    alternance_date_debut: String,
    alternance_date_fin: String,
    alternance_convention: String,
    sanctions_date: String,
    sanctions_motifs: String,
    sanctions_punishments: String,
    retard_date: String,
    retard_motifs: String,
    retard_duree: String,
    abscence_date_debut: String,
    abscence_date_fin: String,
    abscence_motifs: String
});
//# sourceMappingURL=todos.interface.js.map