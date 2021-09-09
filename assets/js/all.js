"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); // swiper
// swiper-course

(function () {
  'use strict'; // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout

  var breakpoint = window.matchMedia('(max-width: 992px)'); // keep track of swiper instances to destroy later

  var mySwiper; //////////////////////////////////////////////////////////////////

  var breakpointChecker = function breakpointChecker() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing

      return; // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  var enableSwiper = function enableSwiper() {
    // ./index - 精心設計、課程多元
    mySwiper = new Swiper('.swiper-course', {
      slidesPerView: 1.5,
      spaceBetween: 30
    });
  }; //////////////////////////////////////////////////////////////////
  // keep an eye on viewport size changes


  breakpoint.addListener(breakpointChecker); // kickstart

  breakpointChecker();
})();
/* IIFE end */
// ./index - 聽聽他們怎麼說


var swiper = new Swiper(".swiper-customer", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row'
  },
  spaceBetween: 8,
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      grid: {
        rows: 2
      },
      spaceBetween: 16
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    }
  }
}); // ./reserve-case - 選擇課程階級

var swiper = new Swiper(".swiper-level", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row'
  },
  spaceBetween: 24,
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 20
    }
  }
}); // ./course-introduction - 師資介紹

var swiper = new Swiper(".swiper-teachers", {
  slidesPerView: 1,
  grid: {
    rows: 4,
    fill: 'row'
  },
  spaceBetween: 70,
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3.2,
      grid: {
        rows: 1
      },
      spaceBetween: 30
    }
  }
}); // ./space - 課程推薦

var swiper = new Swiper(".swiper-course-recommend", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3
    },
    992: {
      slidesPerView: 4.2
    }
  }
}); // datepicker

var elem = document.querySelector('input[name="appointment_date"]');
var datepicker = new Datepicker(elem, {
  autohide: true
});
//# sourceMappingURL=all.js.map
