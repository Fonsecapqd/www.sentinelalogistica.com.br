// ===========================
// APPARITION AU SCROLL
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card, .contact-card, #about, #fleet")
.forEach((element) => {
    observer.observe(element);
});

// ===========================
// ANNEE AUTOMATIQUE FOOTER
// ===========================

const footer = document.querySelector("footer");

const year = new Date().getFullYear();

footer.innerHTML = `
<p>© ${year} Sentinela Logística Ltda</p>
<p>Site de démonstration hébergé sur GitHub Pages</p>
`;

// ===========================
// BOUTON RETOUR EN HAUT
// ===========================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
