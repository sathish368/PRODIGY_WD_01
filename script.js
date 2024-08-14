
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    
    const changeNavbarStyleOnScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };


    window.addEventListener('scroll', changeNavbarStyleOnScroll);
});
