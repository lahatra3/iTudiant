<?php
include('../models/models.php');
$inserer = new Database(3);

if(!empty($_POST['identifiant']) && !empty($_POST['password']))
{
	$infos = array(
		'identifiant' => strip_tags($_POST['identifiant']),
		'password' => $_POST['password']
	);

	$donnees = $inserer -> login($infos);
	if(!empty($donnees['id']))
	{
		echo $donnees['TRUE'];
	}
	else
	{
		echo 'Erreur';
	}
}

if(!empty($_POST['nom']) && !empty($_POST['prenoms']) && !empty($_POST['email']) && !empty($_POST['password']))
{
	$infos = array(
		'nom' => ucwords(strip_tags($_POST['nom'])),
		'prenoms' => ucwords(strip_tags($_POST['prenoms'])),
		'email' => trim(strip_tags($_POST['email'])),
		'password' => $_POST['password']
	);

	$data = $inserer -> inscrire($infos);
	echo $data;
}
