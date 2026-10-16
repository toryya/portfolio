// Language switcher: remember the choice and keep the current section anchor
document.querySelectorAll('.lang-switch__item').forEach((link) => {
  link.addEventListener('click', (e) => {
    try {
      localStorage.setItem('lang', link.dataset.lang);
    } catch (err) {}

    if (link.classList.contains('is-active')) {
      e.preventDefault();
      return;
    }

    if (location.hash) {
      e.preventDefault();
      location.href = link.href.split('#')[0] + location.hash;
    }
  });
});
