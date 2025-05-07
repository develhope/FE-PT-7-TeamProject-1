document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const items = Array.from(carousel.children);
  const prevButton = document.querySelector(".carousel-button-prev");
  const nextButton = document.querySelector(".carousel-button-next");

  const itemWidth = items[0].offsetWidth + 20;
  let currentIndex = items.length;

  // Clone first and last items
  const prepend = items.map((item) => item.cloneNode(true));
  const append = items.map((item) => item.cloneNode(true));

  prepend.forEach((clone) => carousel.insertBefore(clone, carousel.firstChild));
  append.forEach((clone) => carousel.appendChild(clone));

  const allItems = Array.from(carousel.children);
  carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;

  const updateCarousel = () => {
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  };

  const jumpToReal = () => {
    carousel.style.transition = "none";
    currentIndex = items.length;
    carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  };

  const jumpToEnd = () => {
    carousel.style.transition = "none";
    currentIndex = items.length - 1;
    carousel.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  };

  nextButton.addEventListener("click", () => {
    currentIndex++;
    updateCarousel();
    if (currentIndex === items.length * 2) {
      setTimeout(jumpToReal, 500);
    }
  });

  prevButton.addEventListener("click", () => {
    currentIndex--;
    updateCarousel();
    if (currentIndex < 1) {
      setTimeout(jumpToEnd, 500);
    }
  });
});
