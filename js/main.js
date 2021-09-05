const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// document.querySelector(".search input")

const fcsHandler = () => searchInputEl.focus();

const blurHandler = () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
};

const inputHandler = () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
};

searchEl.addEventListener("click", fcsHandler);
searchInputEl.addEventListener("focus", inputHandler);
searchInputEl.addEventListener("blur", blurHandler);
