var hamburger = document.querySelector(".hamburger");
var mobileNavLinks = document.querySelector(".nav-links");
var navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileNavLinks.classList.toggle("active");
});

// Adiciona evento de clique a todos os links do menu
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Fecha o menu ao clicar no link
        hamburger.classList.remove("is-active");
        mobileNavLinks.classList.remove("active");
    });
});

 
const sr = ScrollReveal({
    origin: 'top' ,
    distance: '60px',
    duration: 3000,
    delay: 400,
    //reset: true //animation repeat
})

/* sr.reveal(`.contact, .follow, .location`)
sr.reveal(`.home__card`,{delay:600, distance: '100px', interval: 100})
sr.reveal(`.about-desc-area, .team-img-area, .home-img-area`,{origin:'right'})
sr.reveal(`.about-img-area, .team-desc-area, .home-desc-area`,{origin:'left'})
sr.reveal(`.popular__card`,{interval: 200}) */

sr.reveal(`.activities .title`)
sr.reveal(`.home .desc-area, .about .img-area, .team .desc-area`,{origin:'left'})
sr.reveal(` .home .img-area, .about .desc-area, .team .img-area`,{origin:'right'})
sr.reveal(`.activity-1, .activity-2, .activity-3`,{origin:'right',interval: 300})
sr.reveal(`.contact, .follow, .location`,{interval: 200})

