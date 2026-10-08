import "../styles/main.scss";
import { initTabs } from "./tabs";
import { initBurger } from "./burger";

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initBurger();
});
