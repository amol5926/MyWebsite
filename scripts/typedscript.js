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



//voor swiper bij portfolio
var swiper = new Swiper('.myDesign-slider', {
    speed: 600,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    on: {
        slideChange: function () {
            $('.swiper-button').removeClass('active');
            var activeSlideIndex = this.activeIndex;
            $('.swiper-button').eq(activeSlideIndex).addClass('active');
        }
    }
});

$('.swiper-button').click(function (e) {
    e.preventDefault();
    var slideId = $(this).attr('href');
    swiper.slideTo($(slideId).index(), 600, false);
});

(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }





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




})()





const toggleSwitch = document.querySelector('#dark-mode-toggle');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // save the user's preference to localStorage
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // save the user's preference to localStorage
    }
}

// add a listener to the toggle switch
toggleSwitch.addEventListener('change', switchTheme, false);

// check the user's preference from localStorage and set the initial theme accordingly
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


