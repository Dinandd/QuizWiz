// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Selecteer alle foto elementen
    var fotos = document.querySelectorAll('.foto');
    var currentOpenInfo = null; // Houdt bij welke info momenteel open is
  
    // Voeg een 'click' event listener toe aan elke foto
    fotos.forEach(function(foto) {
      foto.addEventListener('click', function(event) {
        event.stopPropagation(); // Voorkomt dat de body ook meteen dit event opvangt
        var infoId = 'info' + this.id.replace('foto', '');
        var infoEl = document.getElementById(infoId);
        
        // Controleer of de huidige info al zichtbaar is
        if(currentOpenInfo === infoEl) {
          infoEl.parentNode.classList.remove('show-info');
          currentOpenInfo = null; // Reset de huidige open info
        } else {
          // Verwijder de 'show-info' klasse van alle foto-container elementen
          document.querySelectorAll('.foto-container').forEach(function(container) {
            container.classList.remove('show-info');
          });
          infoEl.parentNode.classList.add('show-info');
          currentOpenInfo = infoEl; // Update de huidige open info
        }
      });
    });
  
    // Voeg een 'click' event listener toe aan de body om elke open info te sluiten wanneer er buiten de foto's wordt geklikt
    document.body.addEventListener('click', function() {
      if(currentOpenInfo) {
        currentOpenInfo.parentNode.classList.remove('show-info');
        currentOpenInfo = null; // Reset de huidige open info
      }
    });
  });