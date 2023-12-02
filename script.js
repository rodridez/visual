// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with the class "random"
    var randomSections = document.querySelectorAll('.random');

    // Hide all sections initially
    randomSections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Choose a random index to show
    var randomIndex = Math.floor(Math.random() * randomSections.length);

    // Show the randomly chosen section
    randomSections[randomIndex].style.display = 'block';
});