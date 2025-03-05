// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Animation des cartes de service au défilement
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Vérifier si IntersectionObserver est supporté
    if (window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        serviceCards.forEach(card => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    } else {
        // Fallback pour les navigateurs qui ne supportent pas IntersectionObserver
        serviceCards.forEach(card => {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        });
    }
    
    // Ajouter une classe active au lien de navigation actuel
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('nav .menu a');
    
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add('active');
            item.style.textDecoration = 'underline';
        }
    });
    
    // Un petit message de bienvenue dans la console
    console.log('Bienvenue sur mon site web !');
});