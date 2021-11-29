import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
	nom: String,
	prenoms: String,
	email: String,
	niveau_semestre:String,
	niveau_date: String,
	niveau_note: String,		
	niveau_lien_frais: String,
	niveau_status_frais: String,
	contact_etudiant: String,
	contact_parent: String,
	status_etudiant: String,

	alternance_entreprise: String,
	alternance_date_debut:String,
	alternance_date_fin: String,
	alternance_convention: String,

	sanctions_date: String,
	sanctions_motifs: String,
	sanctions_punishments: String,

	retard_date : String,
    retard_motifs : String,
    retard_duree : String,
    

	abscence_date_debut : String,
    abscence_date_fin : String,
    abscence_motifs : String
});

export interface Etudiant {
	/*id: string;
	title: string;
	description: string;
	price: number;*/

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

	retard_date : string;
    retard_motifs : string;
    retard_duree : string;
    
	abscence_date_debut : string;
    abscence_date_fin : string;
    abscence_motifs : string;


}

// export interface Todo {
// 	id: number;
// 	title: string;
// 	description?: string;
// 	done: boolean;
// }

/*{
	"nom" : "RAVELONARIVO",
    "prenoms" : "Lahatra Anjara",
    "niveau" : [ 
        {
            "semestre" : "S1",
            "date" : "2021",
            "note" : "",
            "lien_frais" : "/home/jitiy/Bureau",
            "status_frais" : 1
        }],

    "contact_etudiant" : "0349570401",
    "contact_parent" : "0349570401",
    "status_etudiant" : 1,
    "alternance" : [ 
        {
            "entreprise" : "",
            "date_debut" : "",
            "date_fin" : "",
            "convention_PJ" : ""
        }
    ],
    "sanctions" : [ 
        {
            "date" : "",
            "motifs" : "",
            "punishments" : ""
        }
    ],
    "retard" : [ 
        {
            "date" : "",
            "motifs" : "",
            "duree" : ""
        }
    ],
    "abscence" : [ 
        {
            "date_debut" : "",
            "date_fin" : "",
            "motifs" : ""
        }
    ]
}
*/
