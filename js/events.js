"use strict";

/***************************************************************************************/
/**************************** EVENEMENTS CARNET D'ADRESSES *****************************/
/***************************************************************************************/

function onClickAddContact() {
	// Réinitialisation du formulaire (efface les champs texte, etc.).
    $('#form').trigger('reset');

	// Basculement du formulaire en mode ajout puis affichage.
    $('#form').data('mode', 'add').fadeIn('fast');
}

function onClickClearAddressBook() {
	// Sauvegarde d'un carnet d'adresse vide, écrasant le carnet d'adresse existant.
	saveAddressBook(new Array());

	// Mise à jour de l'affichage.
	$('#details-contact').hide();
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

     //on récupère l'index de la data au click
     const index = $(this).data('index');

     //on load le carnet d'addresse
     const addressBook = loadAddressBook();

     //on récupère le contact de ce carnet d'addresse sauvegardé juste avant (en fonction de son index)
     const user = addressBook[index];

     //on récupère les valeurs entrées dans le formulaire (firstName lastName et phone)
     $('#firstName').val(user.firstName);
     $('#lastName').val(user.lastName);
     $('#phone').val(user.phone);

     // et du title
     switch(user.title) {
        case 'Madame':
        $('#title').val(1);
        break;

        case 'Monsieur':
        $('#title').val(2);
        break;
		
        case 'IEL':
        $('#title').val(3);
        break;
    }

	// Basculement du formulaire en mode édition puis affichage.
	$('#form').data('mode', 'edit').fadeIn('slow');
}

function onClickSaveContact() {
	// Création d'un objet contact avec les données du formulaire.
		/*
			On récupère les données depuis le createContact dans address_book
			$("input[name=nameGoesHere]").val();
		*/
	const user = createContact (
		$('select[name=title]').val(),
		$('input[name=firstName]').val(),
		$('input[name=lastName]').val(),
		$('input[name=phone]').val()
	);

	const addressBook = loadAddressBook();
	
	// Mode "ajout", il faut ajouter le contact au carnet d'adresses.
	if ($('#form').data('mode') === 'add') {
		// il faut push cette entrée dans le loadAddressBook
		addressBook.push(user);
		// Mode "édition", il faut modifier un contact existant.
	} else {
		const index = $('#details-contact a').data('index');
		addressBook[index] = user;
	}

	// Il faut sauvegarder ces actions pour qu'elles soient prises en compte
	saveAddressBook(addressBook);

	// On doit mettre à jour l'affichage
	$('#form').fadeOut('slow');
	$('#details-contact').hide();
	refreshAddressBook();
}

function onClickShowContactDetails() {
	/*
	 * this = objet DOM qui a déclenché l'évènement,
	 *        il s'agit donc de l'un des hyperliens généré dans refreshAddressBook()
	 *
	 * On initialise jQuery avec la variable this pour obtenir un objet jQuery
	 * représentant l'hyperlien qui a donc déclenché l'évènement.
	 *
	 * La méthode data() de jQuery permet de lire/écrire les attributs HTML data-xxx
	 */
	
	// onclick, on crée un data index 
	const index = $(this).data('index');

	// Chargement du carnet d'adresses puis récupération du contact sur lequel on a cliqué.
	const addressBook = loadAddressBook();
	const user = addressBook[index];

	/*
	 * Affichage des données du contact, enregistrement du numéro (index) du contact dans
	 * l'attribut HTML data-index de l'hyperlien "Editer ce contact"
	 */
	$('#details-contact h2').text(`${user.title} ${user.firstName} ${user.lastName}`);
	$('#details-contact h3').text(user.phone);
	$('#details-contact button').data('index', index);

	// Affichage des détails
	$('#details-contact').show();
}
