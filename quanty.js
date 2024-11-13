// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.md\\:hidden');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuContent = document.getElementById('mobile-menu-content');
    const closeMenuButton = document.getElementById('close-menu');
    
    function openMenu() {
        mobileMenu.classList.remove('hidden');
        setTimeout(() => {
            mobileMenuContent.classList.remove('translate-x-full');
        }, 10);
    }

    function closeMenu() {
        mobileMenuContent.classList.add('translate-x-full');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
        }, 300);
    }

    // Open menu when hamburger is clicked
    mobileMenuButton.addEventListener('click', openMenu);

    // Close menu when X button is clicked
    closeMenuButton.addEventListener('click', closeMenu);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    // Close menu when clicking any menu link
    const menuLinks = mobileMenuContent.getElementsByTagName('a');
    Array.from(menuLinks).forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Offset for fixed header
                const headerOffset = 80; // Adjust this value based on your header height
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
});