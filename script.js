function showSurprise() {
  const surprise = document.getElementById("surprise");
  surprise.style.display = "block";
}
function toggleParagraph(id) {
  const para = document.getElementById(id);
  if (para.style.display === "none" || para.classList.contains("hidden")) {
    para.style.display = "block";
    para.classList.remove("hidden");
  } else {
    para.style.display = "none";
    para.classList.add("hidden");
  }
}
// Show lightbox when image is clicked
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', function () {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      lightboxImg.src = this.src;
      lightbox.classList.remove('hidden');
    });
  });

  document.getElementById('lightbox').addEventListener('click', function () {
    this.classList.add('hidden');
  });
});
function toggleParagraph(id) {
  const para = document.getElementById(id);
  if (para.style.display === "none" || para.classList.contains("hidden")) {
    para.style.display = "block";
    para.classList.remove("hidden");
  } else {
    para.style.display = "none";
    para.classList.add("hidden");
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.picture-gallery img, .gallery img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  images.forEach(img => {
    img.addEventListener('dblclick', function () {
      lightboxImg.src = this.src;
      lightbox.classList.remove('hidden');
    });
  });

  lightbox.addEventListener('click', function () {
    lightbox.classList.add('hidden');
  });
}); 
document.addEventListener('scroll', () => {
  const hearts = document.querySelectorAll('.floating-hearts .heart');
  const scrollY = window.scrollY;

  hearts.forEach((heart, index) => {
    const offset = (index + 1) * 3; // custom offset for variation
    const movement = scrollY * (0.05 + (index % 3) * 0.02);
    heart.style.transform = `translateY(${movement - offset}px)`;
  });
});