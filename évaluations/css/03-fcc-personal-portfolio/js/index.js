const navLinks = document.querySelectorAll('.nav-link');
const navbarHeight = document
  .querySelector('#navbar')
  .getBoundingClientRect().height;

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop - navbarHeight;
    window.scrollTo({
      top: position,
      left: 0
    });
  });
});
