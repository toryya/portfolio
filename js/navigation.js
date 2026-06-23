const stickyMenu = document.getElementById('stickyMenu');
const stickyLinks = document.querySelectorAll('.sticky-menu__link');
const stickyBurger = document.getElementById('stickyBurger');
const stickyMobileMenu = document.getElementById('stickyMobileMenu');

const sections = [
  document.getElementById('experience'),
  document.getElementById('projects'),
  document.getElementById('articles'),
  document.getElementById('concepts'),
  document.getElementById('achievements'),
  document.getElementById('contacts')
];

function updateStickyMenu() {
  const hero = document.querySelector('.hero');

  if (!hero) return;

  const heroBottom = hero.offsetTop + hero.offsetHeight;

  if (window.scrollY > heroBottom - 80) {
    stickyMenu?.classList.add('is-visible');
  } else {
    stickyMenu?.classList.remove('is-visible');
  }

  let currentSection = '';

  sections.forEach((section) => {
    if (!section) return;

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  stickyLinks.forEach((link) => {
    link.classList.toggle(
      'is-active',
      link.dataset.section === currentSection
    );
  });
}

window.addEventListener('scroll', updateStickyMenu);
window.addEventListener('load', updateStickyMenu);

if (stickyBurger && stickyMobileMenu) {
  stickyBurger.addEventListener('click', () => {
    stickyMobileMenu.classList.toggle('is-open');
  });

  stickyMobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      stickyMobileMenu.classList.remove('is-open');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.sticky-menu__inner')) {
      stickyMobileMenu.classList.remove('is-open');
    }
  });
}