// Sélectionner le formulaire et les éléments à valider
const form = document.querySelector('form');
const temperatureInput = document.querySelector('#temp');
const symptomesInput = document.querySelectorAll('#sympt');
const respirationInput = document.querySelector('#respi');
const contactInput = document.querySelector('#contact');
const voyageInput = document.querySelector('#voyage');

// Fonction de validation
function vérifier(event) {
  event.preventDefault(); // Empêcher le formulaire de s'envoyer
  
  // Récupérer les valeurs des éléments
  const temperature = temperatureInput.value;
  const symptomes = Array.from(symptomesInput).filter(input => input.checked).map(input => input.value);
  const respiration = respirationInput.value;
  const contact = contactInput.value;
  const voyage = voyageInput.value;
  
  // Valider les réponses
  let reponse = '';
  if (temperature >= 38 && symptomes.length > 1 && respiration >= 2 && contact == 1 && voyage == 1) {
    reponse = 'Vous présentez peut-être des symptômes de la Covid-19. Nous vous recommandons de prendre rendez-vous pour un test de dépistage.';
  } else {
    reponse = 'Vous ne présentez probablement pas de symptômes de la Covid-19. Continuez de suivre les recommandations sanitaires!';
  }
  
  // Afficher la réponse
  alert(reponse);
}

// Ajouter un écouteur d'événement pour le clic sur le bouton Vérifier
form.addEventListener('submit', vérifier);
