const imageSets = {
  "grand-canyon": [
    "imagesFrancy/gc1.jpg",
    "imagesFrancy/gc2.jpg",
    "imagesFrancy/gc3.jpg"
  ],
  "atv": [
    "imagesFrancy/atv1.jpg",
    "imagesFrancy/atv2.jpg",
    "imagesFrancy/atv3.jpg"
  ],
  "helicopter": [
    "imagesFrancy/hn1.jpg",
    "imagesFrancy/hn2.jpg",
    "imagesFrancy/hn3.jpg"
  ],
  "highroller": [
    "imagesFrancy/hr1.jpg",
    "imagesFrancy/hr2.jpg",
    "imagesFrancy/hr3.jpg"
  ],
  "bellagio": [
    "imagesFrancy/bc1.jpg",
    "imagesFrancy/bc2.jpg",
    "imagesFrancy/bc3.jpg"
  ]
};

function changeImage(dot, index, id) {
  const card = dot.closest('.card');
  const img = card.querySelector('.card-img');
  img.src = imageSets[id][index];

  const dots = card.querySelectorAll('.dot');
  dots.forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
}
