var typed = new Typed(".overMij", {    //.overMij selector voor vaar typed effect wordt toegepast
    strings: [, "Industrial designer", "Engineering student", "Photographer", "Prop builder"], //array van strings die uitgetypt zullen worden
    loop: true, //effect blijft loopen
    typeSpeed: 80, //elk karakter getypt met 80 ms delay
    backSpeed: 20, //karakters verwijdert met snelheid van 20 ms delay
    backDelay: 2000 //2000 ms voordat getypte string terug verwijderd wordt
});




//veranderen van kleur navbar bij scrollen
window.addEventListener('scroll', function () { //event listener voor scrollen
    var navbar = document.querySelector('.navbar'); //selecteren van elementen
    var targetElement = document.querySelector('.hero-title');
    var navbarHeight = navbar.getBoundingClientRect().height; //bepalen hoogte navbar
    var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;//bepalen van positie
    var threshold = targetPosition - navbarHeight - 50; // drempelwaarde voor het wijzigen van stijl
    if (window.scrollY > threshold) {     //kijken of huidige scrollpositie de drempelwaarde overschrijdt
        navbar.classList.add('navbar-scrolled');   //nieuwe klasse toevoegen aan navbar
    } else {
        navbar.classList.remove('navbar-scrolled');  //verwijderen van de klasse navbar-scrolled van navbar
    }
});

//knop om terug naar boven te gaan (kan waarschijnlijk zonder js, nog bekijken)
let mybutton = document.getElementById("btn-back-to-top"); //knop selecteren

window.onscroll = function () { //event handler doe wordt opgeroepen wanneer scroll-evenement optreedt
    scrollFunction();
};

function scrollFunction() {
    if (    //controleren van de scrollpositie oude en nieuwe browsers
        document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block"; //zichtbaar maken
    } else {
        mybutton.style.display = "none";    //onzichtbaar maken
    }
}
// Het scrollen zelf
mybutton.addEventListener("click", backToTop); //event listener voor knop

function backToTop() { // terug naar boven scrollen
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


(function () {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => { //functie "select" neemt elementselector en optionele parameter
        el = el.trim() //spaties verwijderen van element selector
        if (all) {
            return [...document.querySelectorAll(el)] // retourneert een array van alle elementen die overeenkomen met de selector
        } else {
            return document.querySelector(el) //retourneert eerste overeenkomstige element
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all) //roept de 'select' functie aan om het gewenste element te selecteren
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener)) //voegt event listeners toe aan alle overeenkomstige elementen
            } else {
                selectEl.addEventListener(type, listener) // voegtr event listener toe aan eerste overeenkomstige element
            }
        }
    }





    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container'); //select functie om element met klasse "portfolio-container" te selecteren--> toegewezen aan variabele "porfoliocontainer"
        if (portfolioContainer) {   //als portfoliocontainer bestaat wordt de rest van de code uitgevoerd
            let portfolioIsotope = new Isotope(portfolioContainer, { //aanmaak nieuw isotope-object en koppeling aan geselecteerde 'portfolioContainer'-element
                itemSelector: '.portfolio-item' //isotope zal elementen met klasse portfolio-item beschouwen als items in het portfolio
            });

            let portfolioFilters = select('#portfolio-flters li', true); //selecteert alle lijst elementen binnen het element met id "portfolio-filter"--> alle overeenkomstige elementen moeten worden geselecteerd
//Deze variabelen worden toegewezen aan variabele 'portfolio-filters'
            on('click', '#portfolio-flters li', function (e) { //klik gebeurtenis hanteren op lijst elementen binnen #portfolio filters, als geklikt wordt de functie uitgevoerd
                e.preventDefault(); // Voorkom de standaardgedraging van de klikgebeurtenis
                portfolioFilters.forEach(function (el) { // Itereer over elk element in "portfolioFilters"
                    el.classList.remove('filter-active'); // Verwijder de klasse 'filter-active' van elk element
                });
                this.classList.add('filter-active'); // Voeg de klasse 'filter-active' toe aan het geselecteerde li-element

                portfolioIsotope.arrange({ 
                    filter: this.getAttribute('data-filter')
                });  // Pas de filterinstellingen van Isotope aan op basis van de geselecteerde filter
                portfolioIsotope.on('arrangeComplete', function () { // Wanneer het rangschikken van de items in Isotope is voltooid
                    AOS.refresh() // Werk de AOS-bibliotheek bij met de nieuwe indeling van de items
                });
            }, true);
        }

    });




})()

const toggleSwitch = document.querySelector('#dark-mode-toggle'); // Selecteer het element met het id 'dark-mode-toggle' en wijs het toe aan de variabele 'toggleSwitch'

function switchTheme(e) {   // Definieer een functie genaamd 'switchTheme' die wordt opgeroepen wanneer er een wijziging plaatsvindt in het toggle-element
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark'); // Stel het attribuut 'data-theme' van het document in op 'dark' om de donkere modus in te schakelen
        localStorage.setItem('theme', 'dark'); // Sla de voorkeur van de gebruiker op als 'dark' in de localStorage
    } else {
        document.documentElement.setAttribute('data-theme', 'light'); // Stel het attribuut 'data-theme' van het document in op 'light' om de lichte modus in te schakelen
        localStorage.setItem('theme', 'light'); // Sla de voorkeur van de gebruiker op als 'dark' in de localStorage
    }
}

// Voeg een event listener toe aan het toggle-element
toggleSwitch.addEventListener('change', switchTheme, false);

// Controleer de voorkeur van de gebruiker in de localStorage en stel het thema dienovereenkomstig in
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null; // Haal de huidige themavoorkeur op uit de localStorage, of wijs null toe als er geen voorkeur is opgeslagen
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme); // Stel het attribuut 'data-theme' van het document in op de huidige themavoorkeur
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true; // Controleer de toggle-switch als het huidige thema 'dark' is
    }
}


