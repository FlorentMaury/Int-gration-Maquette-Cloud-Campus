// Sélectionnez tous les éléments de navigation.
var navItems = document.querySelectorAll('.flexNav__li');

// Parcourez chaque élément de navigation.
for (var i = 0; i < navItems.length; i++) {
    // Ajoutez un écouteur d'événements de clic à chaque élément de navigation.
    navItems[i].addEventListener('click', function(e) {
        // Empêchez le comportement par défaut du lien.
        e.preventDefault();

        // Supprimez la classe active de tous les éléments de navigation.
        for (var j = 0; j < navItems.length; j++) {
            navItems[j].classList.remove('flexNav__li--active');
        }

        // Ajoutez la classe active à l'élément de navigation cliqué.
        this.classList.add('flexNav__li--active');
    });
}