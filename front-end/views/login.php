<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>iTudiant</title>
	<link rel="shortcut icon" href="../assets/images/logo_2.ico" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/css_additionnels.css">
</head>
<body>
	<header class="pt-5">
	    <div class="rounded entete fixed-top">
	        <div class="container">
	            <div class="row">
	                <nav class="col navbar navbar-expand-md navbar-dark">
	                    <a href="#" class="navbar-brand">
	                        <img class="shadow" src="../assets/images/logo.jpg" alt="" width="57" height="57">
	                        <span class="ml-3 font-weight-bold titre h2">iTudiant</span> 
	                    </a>
	                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
   						<span class="navbar-toggler-icon"></span>
						</button>
						<div id="navbarContent" class="collapse navbar-collapse">
							<ul class="navbar-nav">
								<li class="nav-item active mr-md-5 ml-md-3">
									<a href="../index.php" class="nav-link h3-md h4 mr-md-5 accueil_index">Accueil</a>
								</li>
								<li class="nav-item active">
	                                <a href="inscription.php" class="nav-link h3-md h4 mr-md-5 accueil_index">S'inscrire</a>
	                            </li>				
							</ul>
						</div>
	                </nav>
	            </div>
	        </div>
	    </div>
	</header>

	<section>
	<div class="container mt-5" id="login">
		<div class="row form-group">
			<div class="col-12 col-md-3"></div>
			<div class=" tab col-12 col-md-6 border rounded shadow bg-light p-3 m-md-1">
				<label for="identifiant" class="form-label font-weight-bold ml-3 font-italic">Identifiant:</label>
				<input type="email" id="identifiant" 
					placeholder="Votre email... ***" class="form-control" required><br>

				<label for="password" class="form-label font-weight-bold ml-3 font-italic">Mot de passe:</label>
				<input type="password" id="password" 
					placeholder="Votre mot de passe... ***" class="form-control" required><br>

				<div class="container" id="erreur">
					<div class="row">
						<div class="col-12 text-danger">
							<p>Identifiant et/ou mot de passe incorrect...! Veuillez réessayer!</p>
						</div>
					</div>
				</div>
				<div class="container mt-2">
					<div class="row">
						<div class="col-12 text-center">
							<button class="btn btn-success" id="connecter">Se connecter</button>
						</div>
						<div class="col-12 text-right mt-3">
							<button class="btn btn-link" id="inscrire">S'inscrire</button>
						</div>
						<div class="col-12 text-left">
							<button class="btn btn-link" id="forgot_password">Mot de passe oublié?</button>
						</div>
					</div>						
				</div>
			</div>
			<div class="col-12 col-md-3"></div>
		</div>
	</div>
</section>
<script type="text/javascript" src="../assets/js/jquery.js"></script>
<script type="text/javascript" src="../assets/js/popper.js"></script>
<script type="text/javascript" src="../assets/js/bootstrap.js"></script>
<script type="text/javascript" src="../assets/js/js_login.js"></script>
</body>
</html>
