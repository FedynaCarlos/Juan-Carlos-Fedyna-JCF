function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

document.addEventListener("DOMContentLoaded", function () {
    // Aplicar clases hover-glow a los elementos con clase glow-target
    const glowElements = document.querySelectorAll('.glow-target');
    glowElements.forEach(el => {
        el.classList.add('hover-glow');
    });

    // Inicializar el reloj
    updateClock();
    setInterval(updateClock, 1000);

    // Observer para fade-in
    const cards = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
});



// Obtener botón
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Mostrar botón al bajar más de 200px y ocultar si estás arriba
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Al hacer click, scroll suave hacia arriba
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

 
