$(function () {
  console.log('Hello Bootstrap5');
});


// swiper
// swiper-course
(function () {
  'use strict';
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia('(max-width: 992px)');
  // keep track of swiper instances to destroy later
  let mySwiper;
  //////////////////////////////////////////////////////////////////
  const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      // or/and do nothing
      return;
      // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    mySwiper = new Swiper('.swiper-course', {
      slidesPerView: 1.5,
      spaceBetween: 30,
    });
  };
  //////////////////////////////////////////////////////////////////
  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();
})(); /* IIFE end */


var swiper = new Swiper(".swiper-customer", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row',
  },
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      grid: {
        rows: 2,
      },
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
      spaceBetween: 30
    },
  }
});