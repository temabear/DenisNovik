const humburgerMenu = document.getElementById('id-hamburger-menu');
const mobileMenu = document.getElementById('id-mobile-menu');
const closeIcon = document.getElementById('id-close-icon');
const menuItems = document.querySelector('.mobile-menu li');

humburgerMenu.addEventListener('click', function() {
    mobileMenu.className += ' open';
});

const menuClose = () => {
  mobileMenu.className = 'mobile-menu';
}

closeIcon.addEventListener('click', menuClose);
menuItems.addEventListener('click', menuClose);

