import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}>;
export interface Etudiant {
    nom: string;
    prenoms: string;
    email: string;
    niveau_semestre: string;
    niveau_date: string;
    niveau_note: string;
    niveau_lien_frais: string;
    niveau_status_frais: string;
    contact_etudiant: string;
    contact_parent: string;
    status_etudiant: string;
    alternance_entreprise: string;
    alternance_date_debut: string;
    alternance_date_fin: string;
    alternance_convention: string;
    sanctions_date: string;
    sanctions_motifs: string;
    sanctions_punishments: string;
    retard_date: string;
    retard_motifs: string;
    retard_duree: string;
    abscence_date_debut: string;
    abscence_date_fin: string;
    abscence_motifs: string;
}
