<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>iTudiant</title>
	<link rel="shortcut icon" href="../../assets/images/logo_2.ico" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="../../assets/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../../assets/css/css_additionnels.css">
	<script type="text/javascript" src="../../assets/js/jquery.js"></script>
	<script type="text/javascript" src="../../assets/js/popper.js"></script>
	<script type="text/javascript">
		$(document).ready(function()
		{
			var donnees = [];
			$.get('http://localhost:3000/lahatra', function(data)
				{
					var donnees = data;
					console.log(donnees);
				});
			
		});
	</script>
</head>
<body>
	<header class="pt-5">
	    <div class="rounded entete fixed-top">
	        <div class="container">
	            <div class="row">
	                <nav class="col navbar navbar-expand-md navbar-dark">
	                    <a href="../../index.php" class="navbar-brand">
	                        <img class="shadow" src="../../assets/images/logo.jpg" alt="" width="57" height="57">
	                        <span class="ml-3 font-weight-bold titre h2">iTudiant</span> 
	                    </a>
	                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
   						<span class="navbar-toggler-icon"></span>
						</button>
						<div id="navbarContent" class="collapse navbar-collapse">
							<ul class="navbar-nav">
								<li class="nav-item active mr-md-5 ml-md-3">
									<a href="../../index.php" class="nav-link h3-md h4 mr-md-5 accueil_index">Accueil</a>
								</li>
								<li class="nav-item active mr-md-5 ml-md-3">
									<a href="inserer.php" class="nav-link h3-md h4 mr-md-5 accueil_index">Inserer</a>
								</li>	
								<div class="container">
									<div class="row">
										<div class="col-12">
											<button id="se_deconnecter" class="btn btn-warning ml-md-5 font-weight-bold connecter" class="nav-link">Se déconnecter</button>
										</div>
									</div>
								</div>						
							</ul>
						</div>
	                </nav>
	            </div>
	        </div>
	    </div>
	</header>
	<section>
		<div class="container pt-5">
			<div class="row">
				<table class="table shadow rounded">
				  <thead class="thead-dark">
				    <tr>
				      <th scope="col"></th>
				      <th scope="col">Nom</th>
				      <th scope="col">Prenom(s)</th>
				      <th scope="col">Email</th>
				      <th scope="col">Niveau</th>
				      <th scope="col">Contact d'étudiants</th>
				      <th scope="col">Constrat des parents</th>
				      <th scope="col">Notes</th>
				    </tr>
				  </thead>
				  <!-- <tbody>
				    <tr>
				      <th scope="row">1</th>
				      <td>Mark</td>
				      <td>Otto</td>
				      <td>@mdo</td>
				    </tr>
				  </tbody> -->
				  <?php 
				  	$i = 1;
				  	/*echo $_GET['students'];*/
				  	foreach($_GET['donnees'] as $data)
				  	{?>
					  	<th scope="row"><?php echo $i;?></th>
					    <td><?php echo $data['nom'];?></td>
					    <td><?php echo $data['prenoms'];?></td>
					    <td><?php echo $data['email'];?></td>
					    <td><?php echo $data['niveau_semestre'];?></td>
					    <td><?php echo $data['contact_etudiant'];?></td>
					    <td><?php echo $data['contact_parent'];?></td>
					    <td><?php echo $data['niveau_note'];?></td>
				  	<?php 
				  		$i++;
				  	}
				  ?>
				</table>
			</div>
		</div>
	</section>
<script type="text/javascript" src="../../assets/js/jquery.js"></script>
<script type="text/javascript" src="../../assets/js/popper.js"></script>
<script type="text/javascript" src="../../assets/js/bootstrap.js"></script>
<script type="text/javascript" src="../../assets/js/js_admin.js"></script>
</body>
</html>
