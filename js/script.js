// Animation d'apparition

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, .about, .contact").forEach(el => {
    observer.observe(el);
});

// Année automatique

const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if(footer){
    footer.innerHTML =
    `© ${year} Sentinela Logística Ltda — Site de démonstration hébergé sur GitHub Pages`;
}
