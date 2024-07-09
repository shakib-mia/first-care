import Lenis from "lenis";

AOS.init();

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// $(document).ready(() => {
//   $(".owl-carousel").owlCarousel({
//     responsive: {
//       0: { items: 1 },
//       768: { items: 2 },
//       1024: { items: 3 },
//     },
//     dots: true,
//     margin: 30,
//     autoplay: true,
//     autoplayHoverPause: true,
//     slideBy: 3,
//     loop: true,
//   });
// });

$(document).ready(function () {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  var owlInitialized = false;
  var $carousel = $(".owl-carousel");

  $(window).on("scroll", function () {
    if (!owlInitialized && isElementInViewport($carousel[0])) {
      $carousel.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayHoverPause: true,
        slideBy: 3,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1024: {
            items: 3,
          },
        },
      });
      owlInitialized = true;
    }
  });

  // Check if the carousel is already in view on load
  if (isElementInViewport($carousel[0])) {
    $carousel.owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayHoverPause: true,
      slideBy: 3,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1024: {
          items: 3,
        },
      },
    });
    owlInitialized = true;
  }
});
