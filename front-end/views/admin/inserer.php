<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>iTudiant</title>
	<link rel="shortcut icon" href="../../assets/images/logo_2.ico" type="image/x-icon">
	<link rel="stylesheet" type="text/css" href="../../assets/css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="../../assets/css/css_additionnels.css">
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
									<a href="students.php" class="nav-link h3-md h4 mr-md-5 accueil_index">Etudiants</a>
								</li>

								<li class="nav-item active mr-md-5 ml-md-3">
									<a href="" class="nav-link h3-md h4 mr-md-5 accueil_index">Inserer</a>
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
	<div class="container mt-2" id="membre">
    <p class="font-weight-bold">Indentité:</p>
        <div class="row form-group">
        	<div class="col-12 col-md-1"></div>
            <div class="col-lg-4 col-12 rounded border shadow pt-1 pb-1 mr-md-4 bg-light">
                <label for="nomPersonne"><b>Nom:</b></label>
                <input type="text" id="nom"
                    placeholder="Votre nom (obligatoire)***" class="form-control" required><br>

                <label for="prenomsPersonne"><b>Prénoms:</b></label>
                <input type="text" id="prenoms"
                    placeholder="Votre prenom (obligatoire)***" class="form-control" required><br>

                <label for="niveau"><b>Niveau:</b></label>
                <input type="text" id="niveau"
                    placeholder="Niveau de l'étudiant ***" class="form-control" required><br>

				<label for="date_debut"><b>Date d'entrées:</b></label>
                <input type="text" id="date_debut"
                    placeholder="La date d'entrée ***" class="form-control" required><br>

				<label for="domicile"><b>Domicile:</b></label>
                <input type="text" id="domicile"
                    placeholder="Lieu de domicile ***" class="form-control"><br>
            </div>

            <div class="col-lg-4 col-12 rounded border shadow pt-1 pb-1 ml-md-3 bg-light">
                <img src="../../assets/images/gmail.png" width="30" height="30">
                <label for="email"><b>Adresse email:</b></label>
                <input type="email" id="email" 
                    placeholder="Email (obligatoire)***" class="form-control" required><br>

                <img src="../../assets/images/cv.png" width="30" height="30">
                <label for="lien_cv"><b>Cirrucilum vitea:</b></label>
                <input type="url" id="lien_cv" 
                    placeholder="URL du CV... ***" class="form-control"><br>

                <img src="../../assets/images/telephone.png" width="30" height="30">
                <label for="telephone_etudiant"><b>Contact de l'étudiant:</b></label>
                <input type="telephone" id="telephone_etudiant"
                  	placeholder="Téléphone ***" class="form-control"><br>

                <img src="../../assets/images/telephone.png" width="30" height="30">
                <label for="telephone_parent"><b>Contact des parents:</b></label>
                <input type="telephone" id="telephone_parent"
                  	placeholder="Contact des parents ***" class="form-control"><br>

                <div class="container mt-5 text-center">
                    <div class="row">
                        <div class="col">
                            <button type="button" id="enregistrer" class="btn btn-success"> Enregistrer </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-1"></div>
        </div>
    </div>
    <br>
</section>
<script type="text/javascript" src="../../assets/js/jquery.js"></script>
<script type="text/javascript" src="../../assets/js/popper.js"></script>
<script type="text/javascript" src="../../assets/js/bootstrap.js"></script>
<script type="text/javascript" src="../../assets/js/js_inserer.js"></script>
</body>
</html>
