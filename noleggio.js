document.getElementById("filtro-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const marca = e.target.marca.value;
  const tipo = e.target.tipo.value;
  const prezzoMax = parseInt(e.target.prezzoMax.value);

  fetch("auto.json")
    .then(res => res.json())
    .then(data => {
      const autoFiltrate = data.filter(auto => {
        const condMarca = !marca || auto.marca === marca;
        const condTipo = !tipo || auto.tipo === tipo;
        const condPrezzo = isNaN(prezzoMax) || auto.prezzo_giornaliero <= prezzoMax;
        return condMarca && condTipo && condPrezzo;
      });

      mostraAuto(autoFiltrate);
      
      e.target.marca.value = marca;
      e.target.tipo.value = tipo;
      e.target.prezzoMax.value = prezzoMax ? prezzoMax : '';
    });
});

function mostraAuto(listaAuto) {
  const container = document.querySelector(".auto-list");
  container.innerHTML = "";

  if (listaAuto.length === 0) {
    container.innerHTML = "<p style='color:#C4A55F'>Nessuna auto trovata con i criteri selezionati.</p>";
    return;
  }

  listaAuto.forEach(auto => {
    const card = document.createElement("div");
    card.classList.add("auto-card");
    card.innerHTML = `
      <img src="${auto.immagine}" alt="${auto.marca} ${auto.modello}" />
      <h3>${auto.marca} ${auto.modello}</h3>
      <p>da €${auto.prezzo_giornaliero} al giorno</p>
      <a href="scheda-auto.html" class="link-bottone">See Details</a>
    `;
    container.appendChild(card);
  });
}

/*Hero*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}