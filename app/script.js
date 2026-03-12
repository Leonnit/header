
// ── Nav scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const overlay   = document.getElementById('navOverlay');

function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    overlay.classList.toggle('show', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

overlay.addEventListener('click', closeMenu);

// Ferme le menu au clic sur un lien
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ── Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));