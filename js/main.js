const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const badgeEl = document.querySelector("header .badges");
// document.querySelector(".search input")
/* 위와같이 연달아 쓸 수 있다. */

const fcsHandler = () => searchInputEl.focus();

const blurHandler = () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
};

const inputHandler = () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
};

const scrollHandler = () => {
  console.log("scr");
};

searchEl.addEventListener("click", fcsHandler);
searchInputEl.addEventListener("focus", inputHandler);
searchInputEl.addEventListener("blur", blurHandler); /** blur == !focus */

window.addEventListener("scroll", scrollHandler);
