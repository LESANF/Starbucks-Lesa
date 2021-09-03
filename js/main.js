const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// document.querySelector(".search input")

const fcsHandler = () => searchInputEl.focus();

searchEl.addEventListener("click", fcsHandler);
