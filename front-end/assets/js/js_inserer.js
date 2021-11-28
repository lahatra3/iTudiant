$(document).ready(function()
	{
		$('#membre').hide();
		$('#membre').show(1000);

		$('#enregistrer').click(function()
			{
				if($('#nom').val().trim().length === 0)
				{
					alert("Veuillez saisir le nom !");
				}

				else if($('#prenoms').val().trim().length === 0)
				{
					alert("Veuillez saisir le(s) prénom(s) !")
				}

				else if($('#niveau').val().trim().length === 0)
				{
					alert("Veuillez saisir le niveau !")
				}

				else if($('#date_debut').val().trim().length === 0)
				{
					alert("Veuillez saisir la date !")
				}

				else if($('#domicile').val().trim().length === 0)
				{
					alert("Veuillez saisir le domicile !")
				}

				else if($('#email').val().trim().length === 0)
				{
					alert("Veuillez saisir l'adresse email !' !")
				}

				else if($('#lien_cv').val().trim().length === 0)
				{
					alert("Veuillez saisir le lien du cv !")
				}

				else if($('#telephone_etudiant').val().trim().length === 0)
				{
					alert("Veuillez saisir le téléphone !")
				}

				else
				{
						let donnees = {
						nom: $('#nom').val(),
						prenoms: $('#prenoms').val(),
						niveau: $('#niveau').val(),
						date: $('#date_debut').val(),
						domicile: $('#domicile').val(),
						email: $('#email').val(),
						cv: $('#lien_cv').val(),
						phone_etudiant: $('#telephone_etudiant').val(),
						phone_parent: $('#telephone_parent').val()
					};
					$.post('http://localhost:3000/lahatra', donnees, function(data, status)
						{
							if(status == 'success')
							{
								alert("Informations bien enregistrer...!");
							}
							else
							{
								alert(data);
							}
						});
				}
				
			});
	});
