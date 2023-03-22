var typed = new Typed(".overMij", {
    strings: [, "Industrial designer", "Engineering student", "Photographer", "Prop builder"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 20,
    backDelay: 2000
});




//veranderen van kleur navbar bij scrollen
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var targetElement = document.querySelector('.hero-title');
    var navbarHeight = navbar.getBoundingClientRect().height;
    var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    var threshold = targetPosition - navbarHeight - 50;
    if (window.scrollY > threshold) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

//knop om terug naar boven te gaan (kan waarschijnlijk zonder js, nog bekijken)
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// Het scrollen zelf
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//const darkModeToggle = document.getElementById('dark-mode-toggle');
//const body = document.body;

//darkModeToggle.addEventListener('click', function () {
//    body.classList.toggle('dark-mode');
//});



//voor swiper bij portfolio
new Swiper('.myDesign-slider', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    }
});

/**
 * Porfolio isotope and filter
 */
window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item'
        });

        let portfolioFilters = select('#portfolio-flters li', true);

        on('click', '#portfolio-flters li', function (e) {
            e.preventDefault();
            portfolioFilters.forEach(function (el) {
                el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');

            portfolioIsotope.arrange({
                filter: this.getAttribute('data-filter')
            });
            portfolioIsotope.on('arrangeComplete', function () {
                AOS.refresh()
            });
        }, true);
    }

});

/**
 * Initiate portfolio lightbox 
 */
const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
});
