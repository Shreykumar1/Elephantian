const preloader = document.getElementById('preloader');
const logo = document.getElementById('logo');
const homepage = document.getElementById('homepage');

// Logo click event 
logo.addEventListener('click', () => {
  preloader.classList.add('ripple-effect');

  setTimeout(() => {
    preloader.style.opacity = '0'; // Fade out preloader
    setTimeout(() => {
      preloader.style.display = 'none'; // Hide preloader completely
      homepage.classList.add('show-homepage'); 
    }, 800); 
  }, 1000); 
});