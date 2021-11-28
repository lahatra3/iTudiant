<?php
/* connexion à la base de données */
class ConnectToDb
{
	/* Il faut toujours qu'une classe possède une valeur par défaut quand on l'utilise */
	private $defaultValue = null; // l'attribut qui est la valeur de la classe 'ConnectToDb'

	private function __construct()
	{
		$this -> defaultValue = "mybestfriends"; // On affecte la valeur 'mybestfriends' à l'attribut ci-dessus...
	}

	protected function db_connect() // function qui fait la connexion à la base de données...
	{
		/* la fonction créée est protected ici car on va seulement l'utiliser dans toutes les autres 'classe' dans ce fichiers */
		try
		{
			$database = new PDO('mysql:host=localhost; dbname=admin_students; charset=utf8', 'root', '', 
				array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION)); 
			return $database; // on return l'objet donnée par PDO qui est la connexion à la DB...
		}

		catch(PDOException $e)
		{
			die('Erreur sur DB<br>'.$e -> getMessage()); // On kill ici les erreurs s'il y en a afin que PHP n'affiche pas notre code...
		}
	}
}

class Database extends ConnectToDb
{
	private $defaultValue = null;

	public function __construct(int $number)
	{
		$this -> defaultValue = $number;
	}

	public function login(array $donnees)
	{
		try
		{
			$database = ConnectToDb::db_connect();
			$reponse = $database -> prepare('SELECT True, id FROM administrateurs WHERE emails = :identifiant AND password = SHA2(:password, 256)');
			$reponse -> execute($donnees);
			$data = $reponse -> fetch();

			return $data;
		}
		catch(Exception $e)
		{
			die("Erreur:<br>".$e -> getMessage());
		}
	}

	public function inscrire(array $donnees)
	{
		try
		{
			$database = ConnectToDb::db_connect();
			$requete = $database -> prepare('INSERT INTO administrateurs(nom, prenoms, emails, password)
				VALUES(:nom, :prenoms, :email, SHA2(:password, 256))');
			$requete -> execute($donnees);
			return '1';
		}

		catch(Exception $e)
		{
			die("Erreur sur l'insertion DB<br>:".$e -> getMessage());
		}
	}
}
