const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
const badgeEl = document.querySelector('header .badges');
// document.querySelector(".search input")
/* 위와같이 연달아 쓸 수 있다. */
const fadeEls = document.querySelectorAll('.visual .fade-in');

const fcsHandler = () => searchInputEl.focus();

const blurHandler = () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
};

const inputHandler = () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
};

const scrollHandler = () => {
  if (window.scrollY > 500) {
    //배지 숨기기
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none',
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block',
    });
  }
};

searchEl.addEventListener('click', fcsHandler);
searchInputEl.addEventListener('focus', inputHandler);
searchInputEl.addEventListener('blur', blurHandler); /** blur == !focus */

window.addEventListener('scroll', _.throttle(scrollHandler, 300)); /* ms, 300 = 3s */

/* main Image 애니메이션 처리 */
const fadeInImg = (ele, idx) => gsap.to(ele, 1, { delay: (idx + 1) * 0.7, opacity: 1 }); //0.7 -> 1.4 -> 2.1 -> 2.7 (ele = 4, idx = 0, 1, 2, 3)

fadeEls.forEach((ele, idx) => fadeInImg(ele, idx));

// new Swiper(선택자, 옵션)
const noticeSwiper = new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
});

const promotionSwiper = new Swiper('.promotion .swiper-container', {
  //direction: "horizontal" - Swiper의 기본값은 수평
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 버튼
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

const awardsSwiper = new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, //하나의 화면에 몇개의 슬라이드들이 보일것인지를 명시
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

const toggleClickHandler = () => {
  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
};

promotionToggleBtn.addEventListener('click', toggleClickHandler);

//범위 랜덤 함수(소수점 2자리까지: x.xx)
const random = (min, max) => parseFloat((Math.random() * (max - min) + min).toFixed(2));

const floatingObject = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // 적용된 애메이션 반대로
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
};

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach((spyEl) =>
  new ScrollMagic.Scene({ triggerElement: spyEl, triggerHook: 0.8 })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
);
