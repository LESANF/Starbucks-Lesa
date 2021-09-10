const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// document.querySelector(".search input")
/* 위와같이 연달아 쓸 수 있지만 분할하여 쓰는게 좋다. */

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
