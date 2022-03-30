"use strict";

/***************************************************************************************/
/***************************** DONNEES CARNET D'ADRESSES *******************************/
/***************************************************************************************/

const DOM_STORAGE_ITEM_NAME = "Address Book";

/***************************************************************************************/
/***************************** FONCTIONS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function createContact(title, firstName, lastName, phone) {
	//création de l'objet du contact (on doit faire une condition pour attribuer le title madame, monsieur, mademoiselle) car il y'a un select
	
    
    




	//on retourne notre valeur
    
}

function loadAddressBook() {
	// Chargement du carnet d'adresses depuis le DOM storage.
    

	// Est-ce qu'il n'y avait aucune donnée dans le DOM storage ?
    
		// Oui, création d'un carnet d'adresses vide.
        

	//on retourne notre valeur
    
}

function refreshAddressBook() {
	//chargement du carnet d'addresse
    

	// Suppression de l'ensemble du carnet d'adresses HTML.
    

	// Construction de la liste <ul> contenant le carnet d'adresses HTML.
    

	// Affichage HTML du carnet d'adresses, un contact à la fois.(boucle)
    
		// Construction de l'hyperlien <a> contenant le nom et prénom du contact.
		// const hyperlink = $("<a>")
		// 	.attr("href", "#")
		// 	.data("index", index)
		// 	.text(
		// 		addressBook[index].firstName + " " + addressBook[index].lastName
		// 	);

		
        


		/*
		 * 1. Insertion de la balise <a> dans une nouvelle balise <li>
		 * 2. Ajout de la balise <li> à l'intérieur de la balise <ul>
		 */
        

	//ajout dans le html
    
}

function saveAddressBook(addressBook) {
	// Enregistrement du carnet d'adresses dans le DOM storage.
    
}
