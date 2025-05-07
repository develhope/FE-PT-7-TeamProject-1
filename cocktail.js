document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form-container");
    const modal = document.getElementById("orderModal");
    const closeButton = document.querySelector(".close-button");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      if (form.checkValidity()) {
        modal.style.display = "block";
      } else {
        form.reportValidity();
      }
    });
  
    closeButton.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });

  