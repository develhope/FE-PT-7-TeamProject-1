document.addEventListener("DOMContentLoaded", () => {
  const dishes = document.querySelectorAll(".dishes-item, .dessert-item");
  const orderList = document.getElementById("order-list");
  const orderTotal = document.getElementById("order-total");
  const orderSummary = document.querySelector(".order-summary");
  let total = 0;

  dishes.forEach((dish) => {
    dish.addEventListener("click", () => {
      const dishName = dish
        .querySelector(".dishes-name, strong")
        .textContent.trim();
      const dishPrice = parseFloat(
        dish
          .querySelector(".dish-price, .dessert-price")
          .textContent.replace("$", "")
      );
      const dishImage = dish.querySelector("img").src;

      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <img src="${dishImage}" alt="${dishName}" class="order-item-image" />
        <span class="order-item-name">${dishName}</span>
        <span class="order-item-price">$${dishPrice.toFixed(2)}</span>
        <button class="remove-item">✖</button>
      `;
      orderList.appendChild(listItem);

      total += dishPrice;
      orderTotal.textContent = `$${total.toFixed(2)}`;

      // Event listener per rimuovere l'elemento dalla lista
      listItem.querySelector(".remove-item").addEventListener("click", () => {
        orderList.removeChild(listItem);
        total -= dishPrice;
        orderTotal.textContent = `$${total.toFixed(2)}`;
      });
    });
  });

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // Drag and drop per la finestra di riepilogo
  orderSummary.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - orderSummary.getBoundingClientRect().left;
    offsetY = e.clientY - orderSummary.getBoundingClientRect().top;
    orderSummary.classList.add("dragging");
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      orderSummary.style.left = `${e.clientX - offsetX}px`;
      orderSummary.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      orderSummary.classList.remove("dragging");
    }
  });
});
