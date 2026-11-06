const openMenu = document.getElementById('mobile-open-button');
const mobileMenu = document.getElementById('mobile-menu');

const toggleMenu = () => {
  mobileMenu.classList.toggle('hidden');
   openMenu.classList.toggle('open');
};

openMenu.addEventListener('click', toggleMenu);

mobileMenu.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    mobileMenu.classList.add('hidden');
     openMenu.classList.remove('open');
  }
});