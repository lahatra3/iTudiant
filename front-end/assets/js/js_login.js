$(document).ready(function()
	{
		$("#login").hide();
		$("#erreur").hide();	
		$("#login").show(1000);
		
		$("#connecter").click(function()
			{
				if($('#identifiant').val().trim().length === 0)
				{
					alert("Veuillez remplir votre identifiant !");
				}

				else if($('#password').val().trim().length === 0)
				{
					alert("Veuillez remplir votre mot de passe !");
				}

				else
				{
					let donnees = {
						identifiant: $('#identifiant').val(),
						password: $('#password').val()
					};

					$.post('../controllers/controllers.php', donnees, function(data, status)
						{
							if(data == '1')
							{
								window.location.replace('admin/students.php');
							}

							else
							{
								alert("identifiant et/ou mot de passe invalide !");
								$('#erreur').show();
							}
						});
				}
			});

		$('#inscrire').click(function()
			{
				window.location.href = 'inscription.php';
			});
	});
