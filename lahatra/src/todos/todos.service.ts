import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { Etudiant } from './interfaces/todos.interface';

@Injectable()
export class ProductsService {
	constructor(@InjectModel('Product') private readonly productModul: Model<Etudiant>,) {}

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

			retard_date : "",
		    retard_motifs : "",
		    retard_duree : "",
		    

	    	abscence_date_debut : "",
		    abscence_date_fin : "",
		    abscence_motifs : ""

		});

		const result = await newProduct.save();
		return result;
	}

	async getStudents() {
		const etudiants = await this.productModul.find().exec();
		return etudiants;
	}
}
