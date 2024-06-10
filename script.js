const navigation = document.querySelector('.navigation');

// Add a class for scrolled background color change
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});
