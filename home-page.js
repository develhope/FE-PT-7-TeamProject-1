window.onload = function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 0 20px var(--tertiary-color)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
    });
  });

  const isFirstOpen = localStorage.getItem("isFirstOpen");
  console.log(isFirstOpen);
  if (isFirstOpen !== "false") {
    console.log("F");
    setTimeout(function () {
      const popup = document.getElementById("popup");
      popup.style.display = "flex";
      popup.setAttribute("aria-hidden", "false");
      localStorage.setItem("isFirstOpen", "false");
    }, 4000);
  }
};
