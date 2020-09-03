let navigation = document.querySelector('.navigation');
let menuToggle = document.querySelector('.menuToggle');
function toggleMenu() {
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active')
}

menuToggle.addEventListener('click', toggleMenu);
