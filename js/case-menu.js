const caseStickyMenu = document.querySelector('.case-sticky-menu');

window.addEventListener('scroll', () => {
  if (!caseStickyMenu) return;

  if (window.scrollY > 120) {
    caseStickyMenu.classList.add('is-visible');
  } else {
    caseStickyMenu.classList.remove('is-visible');
  }
});

const caseMenuToggle = document.querySelector('.case-menu-toggle');
const caseMobileLinks = document.querySelector('.case-sticky-menu__links');

caseMenuToggle?.addEventListener('click', () => {
  caseMobileLinks?.classList.toggle('is-open');
});

caseMobileLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    caseMobileLinks.classList.remove('is-open');
  });
});