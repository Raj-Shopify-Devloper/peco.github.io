export const initLogoAnimation = () => {
    const headerLogoContainer = document.getElementById('header-logo');
    if (!headerLogoContainer) return;

    const logoImg = headerLogoContainer.querySelector('img');
    if (!logoImg) return;

    let ticking = false;

    const updateLogo = () => {
        const isHomePage = window.location.pathname === '/';
        const scrollY = window.scrollY;
        const threshold = window.innerHeight * 0.01; // adjust in CSS if you need a different value

        // Reset everything first
        logoImg.classList.remove(
            'hero-logo-fixed',
            'hero-logo-shrunk',
            'hero-logo-normal' // optional – useful if you want an explicit "normal" state
        );
        headerLogoContainer.style.opacity = '1';

        // Not on homepage OR scrolled past the tiny threshold → normal header logo
        if (!isHomePage || scrollY > threshold) {
            logoImg.classList.add('hero-logo-normal');
            return;
        }

        // Hero section – logo is fixed in the middle of the viewport
        logoImg.classList.add('hero-logo-fixed');

        // When we’re almost at the end of the animation, snap to the shrunk header size
        const progress = scrollY / threshold;
        if (progress > 0.95) {
            logoImg.classList.add('hero-logo-shrunk');
        }
    };

    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateLogo();
                ticking = false;
            });
            ticking = true;
        }
    };

    // Initial state
    updateLogo();

    // Listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateLogo);
    window.addEventListener('popstate', updateLogo);

    // Cleanup function
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', updateLogo);
        window.removeEventListener('popstate', updateLogo);

        // Remove only the classes we added – no inline style cleanup needed
        logoImg.classList.remove(
            'hero-logo-fixed',
            'hero-logo-shrunk',
            'hero-logo-normal'
        );
    };
};