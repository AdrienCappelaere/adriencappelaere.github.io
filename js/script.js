
document.addEventListener('DOMContentLoaded', function() {
    // Example function to enhance navigation interactivity
    function enhanceNavigation() {
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                alert('Navigating to ' + event.target.textContent);
            });
        });
    }

    enhanceNavigation();
});
