"use strict";

/***************************************************************************************/
/**************************** EVENEMENTS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function onClickAddContact() {
	// Réinitialisation du formulaire (efface les champs texte, etc.).
    // $('#form').empty();
    // $('#form').on('click', reset());
    // $('#form').reset();
    $('#form').trigger('reset');

	// Basculement du formulaire en mode ajout puis affichage.
    $('#form').data('mode', 'add').show();
}

function onClickClearAddressBook() {
	// Sauvegarde d'un carnet d'adresse vide, écrasant le carnet d'adresse existant.
	window.localStorage.clear();
	saveAddressBook();

	// Mise à jour de l'affichage.
	refreshAddressBook();
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
	$('#form').data('mode', 'edit').show();
}

function onClickSaveContact() {
	// Création d'un objet contact avec les données du formulaire.
		/*
			On récupère les données depuis le createContact dans address_book
			$("input[name=nameGoesHere]").val();
		*/
	const contact = createContact (
		$('select[name=title]').val(),
		$('input[name=firstName]').val(),
		$('input[name=lastName]').val(),
		$('input[name=phone]').val()
	);
	console.log('je suis contact', contact);
	
	// Mode "ajout", il faut ajouter le contact au carnet d'adresses.
	if ($('#form').data('mode') === 'add') {
		// il faut push cette entrée dans le loadAddressBook
		let addressBook = loadAddressBook();
		addressBook.push(contact);

		console.log('je suis addressBook dans addContact :', addressBook);
	}

	// Mode "édition", il faut modifier un contact existant.
	else if ($('#form').data('mode') === 'edit') {
		console.log("il faut récupérer l'index du contact à éditer, grâce à l'hyperlink");

		const index = $('#details-contact a').data('index');
		addressBook[index] = contact;
	}

	// Il faut sauvegarder ces actions pour qu'elles soient prises en compte
	saveAddressBook(addressBook);

	// On doit mettre à jour l'affichage
	$('#form').show();
	$('#details-contact').hide();
	refreshAddressBook();

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
