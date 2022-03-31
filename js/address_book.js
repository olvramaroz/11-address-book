"use strict";

/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

// ce sont les données qu'on récupère depuis le localStorage, avec la key "name"
const DOM_STORAGE_ITEM_NAME = "Address Book";

/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function createContact(title, firstName, lastName, phone) {
	/*
	Quand tu es susceptible d'avoir beaucoup de données différentes (ici, plusieurs USERs),
	il est préférable d'utiliser un constructeur d'Objet
	plutôt que d'utiliser une simple constante (méthode classique)

	On peut utiliser ici le new Object()

	"This" pointe l'élément (objet) où je me trouve actuellement.

	Comme on a déjà des paramètres dans notre fonction, utilisons cette méthode
		**** on ne peut pas utiliser "this" en variable ****
	*/

	const user = new Object();

	user.firstName = firstName;
	user.lastName = lastName.toUpperCase();
	user.phone = phone;

	switch(title) {
		case '1':
			user.title = 'Madame';
			break;
		case '2':
			user.title = 'Monsieur';
			break;
		case '3':
			user.title = 'IEL'
			break;
	}

	//on retourne notre valeur
	return user;
}


function loadAddressBook() {
	// Chargement du carnet d'adresses depuis le DOM storage.
    let addressBook = loadDataFromDomStorage(DOM_STORAGE_ITEM_NAME);

	// Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
	if (addressBook === null) {
		// Oui, création d'un carnet d'adresses vide pour pouvoir push dedans
		addressBook = new Array(); // ou addressBook = []
	}
	//on retourne notre valeur
    return addressBook;
}


function refreshAddressBook() {
	//chargement du carnet d'addresse
    const addressBook = loadAddressBook();

	// Suppression de l'ensemble des balises enfants de lis-contact
	$('#list-contact').empty();
    
	// Construction de la liste <ul> contenant le carnet d'adresses HTML.
    const listContact = $('<ul>');

	// Affichage HTML du carnet d'adresses, un contact à la fois.(boucle)
	for (let index = 0; index < addressBook.length; index++) {
		// Construction de l'hyperlien <a> contenant le nom et prénom du contact.
		const hyperlink = $('<a>')
			.attr('href', '#')
			.data('index', index)
			.text(`${addressBook[index].firstName} ${addressBook[index].lastName}`);

		/*
		* 1. Insertion de la balise <a> dans une nouvelle balise <li>
		* 2. Ajout de la balise <li> à l'intérieur de la balise <ul>
		*/
		listContact.append($('<li>').append(hyperlink));
	}
	//ajout dans le html
    $('#list-contact').append(listContact);
}


function saveAddressBook(addressBook) {
	// Enregistrement du carnet d'adresses dans le DOM storage.
	saveDataToDomStorage(DOM_STORAGE_ITEM_NAME, addressBook);
    
}


