"use strict";

/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

// ce sont les données qu'on récupère depuis le localStorage, avec la key "name"
// pourquoi on ne l'appelle pas "name" tout simplement ? 
const DOM_STORAGE_ITEM_NAME = "Address Book";

/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function createContact(title, firstName, lastName, phone) {
	//création de l'objet du contact (on doit faire une condition pour attribuer le title madame, monsieur, mademoiselle) car il y'a un select
	// const USER = {
	// 	title: '',
	// 	firstName: '',
	// 	phone: null
	// }
	// console.log('je suis USER : ', USER);

	// let { title, firstName, phone } = USER;
	// const lastName = lastName.toUpperCase();


	/*
	Quand tu es susceptible d'avoir beaucoup de données différentes (ici, plusieurs USER),
	il est préférable d'utiliser un constructeur Objet
	plutôt que d'utiliser une simple constante (méthode classique)

	On peut utiliser ici le new Object()

	"This" pointe l'élément (objet) où je me trouve actuellement.

	Comme on a déjà des paramètres dans notre fonction, utilisons cette méthode
		et là, on peut appliquer notre méthode .toUpperCase();
	*/

	const user = new Object();

	user.firstName = firstName;
	user.lastName = lastName;
	user.phone = phone;

	switch(title) {
		case "1":
			user.title = 'Madame';
			break;
		case "2":
			user.title = 'Monsieur';
			break;
		case "3":
			user.title = 'IEL'
			break;
	}

	//on retourne notre valeur
	return user;
}


function loadAddressBook() {
	// Chargement du carnet d'adresses depuis le DOM storage.
    let addressBook = loadDataFromDomStorage(DOM_STORAGE_ITEM_NAME);
	console.log('je suis addressBook dans loadAddressBook() :', addressBook);


	// Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
	if (addressBook === null) {
		// Oui, création d'un carnet d'adresses vide.
		addressBook = new Array();
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
    const listContact = `<ul>`;

	// Affichage HTML du carnet d'adresses, un contact à la fois.(boucle)
	for (let index = 0; index < addressBook.length; index++) {
		// Construction de l'hyperlien <a> contenant le nom et prénom du contact.
		const hyperlink = $("<a>")
			.attr("href", "#")
			.data("index", index)
			.text(
				addressBook[index].firstName + " " + addressBook[index].lastName
			);

		/*
		* 1. Insertion de la balise <a> dans une nouvelle balise <li>
		* 2. Ajout de la balise <li> à l'intérieur de la balise <ul>
		*/
		listContact.append(`<li> ${hyperlink} </li></ul>`);
	}
	//ajout dans le html
    document.getElementById('list-contact').innerHTML = listContact;
	console.log('je suis listContact dans refreshAddressBook() :', listContact);
}


function saveAddressBook(addressBook) {
	// Enregistrement du carnet d'adresses dans le DOM storage.
	saveDataToDomStorage(DOM_STORAGE_ITEM_NAME, addressBook);
    
}