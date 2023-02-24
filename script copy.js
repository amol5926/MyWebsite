document.body.style.zoom = "125%"
// Get the dropdown element
var dropdown = document.querySelector('.dropdown');

// Get the nav element
var nav = document.querySelector('.nav');

// Add a mouseover event listener to the nav element
nav.addEventListener('mouseover', function () {
    // Show the dropdown
    dropdown.classList.add('show');
});

// Add a mouseleave event listener to the nav element
nav.addEventListener('mouseleave', function () {
    // Hide the dropdown
    dropdown.classList.remove('show');
});

// Add a mouseover event listener to the dropdown element
dropdown.addEventListener('mouseover', function () {
    // Show the dropdown
    dropdown.classList.add('show');
});

// Add a mouseleave event listener to the dropdown element
dropdown.addEventListener('mouseleave', function () {
    // Hide the dropdown
    dropdown.classList.remove('show');
});

