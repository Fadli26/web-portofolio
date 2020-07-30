const nav = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function() {
  if( window.scrollY > 200 ) {
    nav.classList.add('nav-color');
  } else {
    nav.classList.remove('nav-color');
  }
});
