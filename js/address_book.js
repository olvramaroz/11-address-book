"use strict";

/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

// c'est les données qu'on récupère depuis le localStorage "name"
// pourquoi on ne l'appelle pas "name" tout simplement ? 
const DOM_STORAGE_ITEM_NAME = "Address Book";

/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function createContact(title, firstName, lastName, phone) {
	//création de l'objet du contact (on doit faire une condition pour attribuer le title madame, monsieur, mademoiselle) car il y'a un select
	const user = {
		title: '',
		firstName: '',
		phone: null
	}
	const {title, firstName, phone} = user;
	const lastName = lastName.toUpperCase();

	switch (title) {
		case "Madame":
			title = 'Madame';
			break;
		case "Monsieur":
			title = 'Monsieur';
			break;
		case "Non binaire":
			title = 'IEL'
			break;
	}

	//on retourne notre valeur
	return user;
}


function loadAddressBook() {
	// Chargement du carnet d'adresses depuis le DOM storage.
    const addressBook = loadDataFromDomStorage(DOM_STORAGE_ITEM_NAME);

	// Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
	if (addressBook === null) {
		// Oui, création d'un carnet d'adresses vide.
		createContact();
	}
	//on retourne notre valeur
    return addressBook;
}


function refreshAddressBook() {
	//chargement du carnet d'addresse
    const addressBook = loadAddressBook();

	// Suppression de l'ensemble du carnet d'adresses HTML.
	$('#list-contact').empty();
    
	// Construction de la liste <ul> contenant le carnet d'adresses HTML.
    let listContact = `<ul>`;

	// Affichage HTML du carnet d'adresses, un contact à la fois.(boucle)
		// Construction de l'hyperlien <a> contenant le nom et prénom du contact.
	for (let index = 0; index < addressBook.length; index++) {
		const hyperlink = $("<a>")
			.attr("href", "#")
			.data("index", index)
			.text(
				addressBook[index].firstName + " " + addressBook[index].lastName
			);
	}

	/*
	* 1. Insertion de la balise <a> dans une nouvelle balise <li>
	* 2. Ajout de la balise <li> à l'intérieur de la balise <ul>
	*/
	listContact.append(`<li> ${hyperlink}`);

	//ajout dans le html
    document.getElementById('list-contact').innerHTML = listContact;
}


function saveAddressBook(addressBook) {
	// Enregistrement du carnet d'adresses dans le DOM storage.
	saveDataToDomStorage(DOM_STORAGE_ITEM_NAME, addressBook);
    
}