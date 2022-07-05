const openButton = document.querySelector('.hamburger');
const closeButton = document.querySelector('.fullscreen-menu__close');
const fullMenu = document.querySelector('.fullscreen-menu');


openButton.addEventListener('click', function(e) {
  e.preventDefault
  console.log('fegwgw');
  fullMenu.style.display = 'flex';
});

closeButton.addEventListener('click', function(e) {
  e.preventDefault
  console.log('heh');
  fullMenu.style.display = 'none'
})
