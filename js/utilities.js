// RAPPELS
/* 	localStorage.setItem('key', 'value');
	localStorage.getItem('key');
 	localStorage.clear();
 	JSON.stringify(objet); on transforme les objets/tableaux en string grâce à JSON
 	JSON.parse(string); au contraire, on transforme en objet/tableau un string
 */

/*******************************************************************************************/
/********************************** FONCTIONS UTILITAIRES **********************************/
/*******************************************************************************************/

function loadDataFromDomStorage(name) {
	
	return JSON.parse(localStorage.getItem(name));

	/*
	 * Donnée simple (chaîne) -> JSON parse (= désérialisation) -> Donnée complexe
	
	 *
	 * Voir ci-dessous pour plus d'explications sur le pourquoi du JSON.
	*/
	
}

function saveDataToDomStorage(name, data) {

	return localStorage.setItem(name, JSON.stringify(data));

	/*
	 * Le DOM storage ne permet pas de stocker des données complexes (objet, tableau...).
	 * On doit donc d'aborder sérialiser nos données dans un format simple, le JSON.
	 *
	 * On obtient une chaîne représentant l'objet complexe, et c'est cette chaîne que
	 * l'on stocke dans le DOM storage.
	 *
	 * Donnée complexe -> JSON stringify (= sérialisation) -> Donnée simple (chaîne)
	*/
	
}