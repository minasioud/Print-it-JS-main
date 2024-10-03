document.addEventListener("DOMContentLoaded", function() {

    const slides = [
        { "image": "slide1.jpg", "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>" },
        { "image": "slide2.jpg", "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
        { "image": "slide3.jpg", "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
        { "image": "slide4.png", "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>" }
    ];

    const totalSlides = slides.length - 1;
    let slideIndex = 0;

    const arrowLeft = document.querySelector(".arrow_left");
    const arrowRight = document.querySelector(".arrow_right");
    const dotsContainer = document.querySelector(".dots");

    // Fonction pour générer les dots dynamiquement
    function createDots() {
        console.log("Création des dots"); // Suivi de la création des dots
        for (let i = 0; i <= totalSlides; i++) {
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dotsContainer.appendChild(dot);
            console.log("Dot créé pour la diapositive : " + i); // Suivi de la création des dots
            dot.addEventListener("click", function() {
                console.log("Dot cliqué pour la diapositive : " + i); // Suivi du clic sur le dot
                showSlides(i);
            });
        }
    }

    createDots();

    const dots = document.getElementsByClassName("dot");

    showSlides(slideIndex);

    // Gestion du clic sur la flèche gauche    
    arrowLeft.addEventListener("click", function() {
        console.log("Flèche gauche cliquée"); // Suivi du clic sur la flèche gauche
        showSlides(slideIndex - 1);
    });

    // Gestion du clic sur la flèche droite
    arrowRight.addEventListener("click", function() {
        console.log("Flèche droite cliquée"); // Suivi du clic sur la flèche droite
        showSlides(slideIndex + 1);
    });

    // Fonction pour afficher les diapositives
    function showSlides(n) {
        const bannerImg = document.querySelector(".banner-img");
        const slideText = document.querySelector(".slide-text p");

        slideIndex = n;

        if (slideIndex > totalSlides) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = totalSlides;
        }

        console.log("Affichage de la diapositive : " + slideIndex); // Suivi du changement de slide

        // Mise à jour de l'image et du texte
        bannerImg.src = "./assets/images/slideshow/" + slides[slideIndex].image;
        slideText.innerHTML = slides[slideIndex].tagLine;

        // Mise à jour des dots
        for (let i = 0; i <= totalSlides; i++) {
            dots[i].classList.remove("active");
        }
        dots[slideIndex].classList.add("active");
    }

});
