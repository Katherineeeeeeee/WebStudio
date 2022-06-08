(() => {
  const menuBtnRef = document.querySelectorAll('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.forEach(btn =>
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true' || false;

      btn.classList.toggle('is-active');
      btn.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.toggle('is-open');
    })
  );
})();
