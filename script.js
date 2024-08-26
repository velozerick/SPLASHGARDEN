document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const hamburgerTab = document.querySelector('.hamburger-tab');

    // Ajusta la posición del ícono al cargar la página
    if (navbar.classList.contains('hidden')) {
        hamburgerTab.style.left = '0';
    } else {
        hamburgerTab.style.left = '250px';
    }

    hamburgerTab.onclick = function() {
        navbar.classList.toggle('hidden');
        this.classList.toggle('active');

        if (navbar.classList.contains('hidden')) {
            this.style.left = '0';
        } else {
            this.style.left = '250px';
        }
    };
});
