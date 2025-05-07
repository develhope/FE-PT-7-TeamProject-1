document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const orderList = document.getElementById("order-list-spa");
  const orderTotal = document.getElementById("order-total-spa");
  let total = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".treatment-card");
      const dateField = card.querySelector("input[type='date']");
      const timeField = card.querySelector("select");
      const peopleField = card.querySelector("input[type='number']");

      // Assicura che i campi siano stati compilati
      if (!dateField.value || !timeField.value || !peopleField.value) {
        alert("Courtesly fill out all the fields before booking.");
        return;
      }

      const title = card.querySelector("h2").textContent.trim();
      const pricePerPerson = parseFloat(button.dataset.price);
      const people = parseInt(peopleField.value, 10);
      const totalPrice = pricePerPerson * people;
      const treatmentImage = card.querySelector(".card-image-spa img").src;

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${treatmentImage}" alt="${title}" />
        <span>${title} (x${people})</span>
        <span>$${totalPrice.toFixed(2)}</span>
        <button class="remove-item-spa">✖</button>
      `;
      orderList.appendChild(listItem);

      total += totalPrice;
      orderTotal.textContent = `$${total.toFixed(2)}`;

      listItem
        .querySelector(".remove-item-spa")
        .addEventListener("click", () => {
          orderList.removeChild(listItem);
          total -= totalPrice;
          orderTotal.textContent = `$${total.toFixed(2)}`;
        });
    });
  });
});
