$(document).ready(function()
	{
		$('#identites').hide();
		$('#identites').show(1000);

		$('#envoyer').click(function()
			{
				if($('#nom').val().trim().length === 0)
				{
					alert("Veuillez remplir votre nom !");
				}

				else if($('#prenoms').val().trim().length === 0)
				{
					alert("Veuillez remplir vos prenoms !");
				}

				else if($('#email').val().trim().length === 0)
				{
					alert("Veuillez remplir votre adresse email !");
				}

				else if($('#password').val().trim().length === 0)
				{
					alert("Veuillez remplir votre mot de passe !");
				}

				else
				{
					let donnees = {
						nom: $('#nom').val(),
						prenoms: $('#prenoms').val(),
						email: $('#email').val(),
						password: $('#password').val()
					};

					$.post('../controllers/controllers.php', donnees, function(data, status)
						{
							if(data == '1')
							{
								alert("Vos informations sont enregistrées avec succès !")
								window.location.replace('login.php');
							}
							else
							{
								alert(data);
							}
						});
				}
			});
	});