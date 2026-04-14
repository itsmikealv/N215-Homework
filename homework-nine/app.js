import { changePage } from "./model.js";

const links = document.querySelectorAll("nav a");

function setActiveLink(hash) {
  links.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === hash);
  });
}

function route() {
  const hash = window.location.hash || "#home";
  const page = hash.replace("#", "");

  changePage(page);
  setActiveLink(hash);
}

window.addEventListener("hashchange", route);

window.addEventListener("load", route);
