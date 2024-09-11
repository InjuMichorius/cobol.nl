document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach(function(dropdown) {
      const trigger = dropdown.querySelector(".language-wrapper"); // Trigger element
      const dropdownContent = dropdown.querySelector(".dropdown-content");
  
      // Toggle dropdown content visibility on click
      trigger.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents click event from bubbling up to document
        dropdownContent.style.display = dropdownContent.style.display === "flex" ? "none" : "flex";
      });
  
      // Close the dropdown when clicking outside
      document.addEventListener("click", function() {
        dropdownContent.style.display = "none";
      });
    });
  });
  