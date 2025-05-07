document.addEventListener('DOMContentLoaded', () => {
  // Seleziona gli elementi da rivelare
  const revealElements = document.querySelectorAll('.feature, .event-card, .offers-list li');

  // Impostazioni dell'Intersection Observer
  const observerOptions = {
    threshold: 0.1 // Rivelazione quando almeno il 10% dell'elemento è visibile
  };

  // Funzione per il comportamento di reveal
  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Aggiungi la classe 'revealed' per rivelare l'elemento
        entry.target.classList.add('revealed');
        // Smetti di osservare l'elemento una volta che è stato rivelato
        observer.unobserve(entry.target);
      }
    });
  };

  // Creazione dell'osservatore
  const observer = new IntersectionObserver(revealOnScroll, observerOptions);

  // Avvia l'osservazione su ogni elemento
  revealElements.forEach(el => {
    observer.observe(el);
  });
});
