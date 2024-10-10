document.addEventListener("DOMContentLoaded", function() {
  const expertiseBottom = document.querySelectorAll(".expertise-bottom");

  expertiseBottom.forEach(function(section) {
      const activitiesList = section.querySelectorAll(".activities-list li");
      const readMoreButton = section.querySelector(".read-more-button");

      // Controleer of de lees meer-knop bestaat
      if (!readMoreButton) {
          return; // Sla deze sectie over als er geen knop is
      }

      // Toon alleen de eerste 4 <li> items
      activitiesList.forEach(function(item, index) {
          if (index >= 5) {
              item.style.display = "none";
          }
      });

      // Voeg event listener toe aan de "Lees meer..." knop
      readMoreButton.addEventListener("click", function() {
          activitiesList.forEach(function(item) {
              item.style.display = "list-item";
          });
          readMoreButton.style.display = "none"; // Verberg de knop na het klikken
      });
  });
});
