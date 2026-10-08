export const initTabs = () => {
  const tabsItems = document.querySelectorAll(".hero__tabs-item");
  const tabsLinks = document.querySelectorAll(".hero__tabs-link");
  const heroBanner = document.querySelector(".hero__banner");
  const bannerBadge = document.querySelector(".hero__banner-badge");
  const bannerTitle = document.querySelector(".hero__banner-title");

  if (tabsLinks.length && heroBanner) {
    tabsLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const currentItem = link.closest(".hero__tabs-item");

        tabsItems.forEach((item) =>
          item.classList.remove("hero__tabs-item--active"),
        );

        currentItem.classList.add("hero__tabs-item--active");

        const newBg = link.dataset.bg;
        const newCategory = link.dataset.category;
        const newTitle = link.dataset.title;

        heroBanner.style.opacity = "0.5";

        setTimeout(() => {
          if (newBg) heroBanner.style.backgroundImage = `url('${newBg}')`;
          if (newCategory) bannerBadge.textContent = newCategory;
          if (newTitle) bannerTitle.textContent = newTitle;
          heroBanner.style.opacity = "1";
        }, 150);
      });
    });
  }
};
