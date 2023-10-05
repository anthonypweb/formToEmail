    // mmettre id du form ici 
document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut
 
    // Collectez les données du formulaire ici
    const formData = new FormData(this);
 
    // Effectuez une requête AJAX pour envoyer les données
    // Indiquez l'URL de la fonction
    // Spécifiez l'adresse e-mail où les données doivent être envoyées
    fetch("https://send-email.amambo008.workers.dev/?emailReciver=amambo008@gmail.com", {
       method: "POST",
       body: formData
    })
    .then(response => {
       if (response.ok) {
          // Le traitement a réussi (code de statut 200)
          // Code qui doit être exécuté quand l'e-mail a été envoyé
          console.log("Envoi de l'e-mail réussi");

         // Réinitialiser le formulaire
         document.getElementById("myForm").reset();
         
         // Afficher le message de succès
         document.getElementById("successMessage").style.display = "block";

       } 
       else {
          // Le traitement a échoué avec un code de statut différent de 200
          // Code qui doit être exécuté quand un problème se produit avec la requête
          throw new Error("Échec de la requête. Code de statut : " + response.status);
       }
    })
    .then(data => {
       // Traitement réussi, utilisez les données (par exemple, affichez la réponse du serveur)
       console.log("Succès !");
    })
    .catch(error => {
       // Gérez les erreurs ou affichez un message d'erreur
       console.error(error);
    });
 });
 