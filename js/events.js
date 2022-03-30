"use strict";

/***************************************************************************************/
/**************************** EVENEMENTS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function onClickAddContact() {
	// Réinitialisation du formulaire (efface les champs texte, etc.).
    

	// Basculement du formulaire en mode ajout puis affichage.
    
}

function onClickClearAddressBook() {
	// Sauvegarde d'un carnet d'adresse vide, écrasant le carnet d'adresse existant.
	

	// Mise à jour de l'affichage.



}

function onClickEditContact() {
	/*
	 * this = objet DOM qui a déclenché l'évènement,
	 *        il s'agit donc de l'hyperlien généré dans onClickShowContactDetails()
	 *
	 * On initialise jQuery avec la variable this pour obtenir un objet jQuery
	 * représentant l'hyperlien qui a donc déclenché l'évènement.
	 *
	 * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx
	 */






	// Sélection de la bonne <option> HTML de la liste déroulante.

    




	// Basculement du formulaire en mode édition puis affichage.
	
}

function onClickSaveContact() {
	// Création d'un objet contact avec les données du formulaire.




	
		// Mode "ajout", il faut ajouter le contact au carnet d'adresses.

		
	
		// Mode "édition", il faut modifier un contact existant.

	

	// Mise à jour de l'affichage.
    


}

function onClickShowContactDetails() {
	console.log(this);
	/*
	 * this = objet DOM qui a déclenché l'évènement,
	 *        il s'agit donc de l'un des hyperliens généré dans refreshAddressBook()
	 *
	 * On initialise jQuery avec la variable this pour obtenir un objet jQuery
	 * représentant l'hyperlien qui a donc déclenché l'évènement.
	 *
	 * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx
	 */
	

	// Chargement du carnet d'adresses puis récupération du contact sur lequel on a cliqué.



	/*
	 * Affichage des données du contact, enregistrement du numéro (index) du contact dans
	 * l'attribut HTML data-index de l'hyperlien "Editer ce contact"
	 */
	


		
	// Affichage des détails
}
