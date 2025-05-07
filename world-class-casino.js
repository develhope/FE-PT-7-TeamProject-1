(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".wcc-casino-item");

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;

      items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
          item.style.animationPlayState = 'running';
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  });

  const centralButton = document.querySelector(".wcc-central-button");

  if (centralButton) {
    centralButton.addEventListener("click", () => {
      centralButton.classList.add("clicked");
      setTimeout(() => {
        centralButton.classList.remove("clicked");
      }, 300);
    });
  }
})();
