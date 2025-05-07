// Alert on contact click
document.querySelectorAll('.children-area-p-contact, .children-area-p-contact-arts').forEach(contact => {
    contact.addEventListener('click', () => {
      alert('Please contact the concierge desk to make a reservation.');
    });
  });
  
  // Animate cards and sections on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    // Animate cards
    const cards = document.querySelectorAll('.children-area-card-tilt-card');
    cards.forEach(card => {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    });
  
    // Animate sections
    const sections = document.querySelectorAll('.children-area-romina > *'); // Seleziona tutte le sezioni principali
    sections.forEach(section => {
      section.classList.add('fade-in-zoom'); // Aggiunge la classe per l'animazione
    });
  });
  
  // Animate activities and info boxes on scroll
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-zoom'); // Applica l'animazione
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );
  
  // Apply observer to activity boxes and info boxes
  document.querySelectorAll('.children-area-activity-box, .children-area-info-box').forEach(element => {
    observer.observe(element);
  });