export function initBurger() {
  const burgerBtn = document.querySelector(".header__burger");
  const menu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("menuCloseBtn");
  const backdrop = document.querySelector(".mobile-menu__backdrop");

  if (!burgerBtn || !menu) return;

  const toggleMenu = () => {
    const isOpen = menu.classList.toggle("mobile-menu--open");
    burgerBtn.classList.toggle("header__burger--active");

    document.body.classList.toggle("disable-scroll", isOpen);
    menu.setAttribute("aria-hidden", !isOpen);
  };

  burgerBtn.addEventListener("click", toggleMenu);
  if (closeBtn) closeBtn.addEventListener("click", toggleMenu);
  if (backdrop) backdrop.addEventListener("click", toggleMenu);
}
