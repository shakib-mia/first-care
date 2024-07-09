import Lenis from "lenis";

AOS.init({
  once: true,
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

$(document).ready(() => {
  $("#testimonials .owl-carousel").owlCarousel({
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 2 },
    },
    dots: true,
    margin: 30,
    autoplay: true,
    autoplayHoverPause: true,
    slideBy: 2,
    loop: true,
  });

  $(".owl-carousel").owlCarousel({
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 },
    },
    dots: true,
    margin: 30,
    autoplay: true,
    autoplayHoverPause: true,
    slideBy: 3,
    loop: true,
  });
});

document.getElementById("year").innerText = new Date().getFullYear();

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = window.pageYOffset;

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    if (scrollDirection === "up") {
      // console.log(scrollDirection);
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.transition = "all 0.5s ease";
    } else {
      document.getElementById("navbar").style.top = "-10rem";
      document.getElementById("navbar").style.transition = "all 0.5s ease";
    }
  }
  // console.log(scrollDirection);

  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();

// $(document).ready(function () {
//   function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   var owlInitialized = false;
//   var $carousel = $(".owl-carousel");
//   var $carousel2 = $("#testimonials .owl-carousel");

//   console.log($carousel2);

//   $(window).on("scroll", function () {
//     if (!owlInitialized && isElementInViewport($carousel[0])) {
//       $carousel.owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: false,
//         autoplay: true,
//         autoplayHoverPause: true,
//         slideBy: 3,
//         responsive: {
//           0: {
//             items: 1,
//           },
//           768: {
//             items: 2,
//           },
//           1024: {
//             items: 3,
//           },
//         },
//       });

//       $carousel2.owlCarousel({
//         loop: true,
//         margin: 10,
//         nav: false,
//         autoplay: true,
//         autoplayHoverPause: true,
//         slideBy: 3,
//         responsive: {
//           0: {
//             items: 1,
//           },
//           768: {
//             items: 2,
//           },
//         },
//       });
//       owlInitialized = true;
//     }
//   });

//   // Check if the carousel is already in view on load
//   if (isElementInViewport($carousel[0])) {
//     $carousel.owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: false,
//       autoplay: true,
//       autoplayHoverPause: true,
//       slideBy: 3,
//       responsive: {
//         0: {
//           items: 1,
//         },
//         768: {
//           items: 2,
//         },
//         1024: {
//           items: 3,
//         },
//       },
//     });

//     $carousel2.owlCarousel({
//       loop: true,
//       margin: 10,
//       nav: false,
//       autoplay: true,
//       autoplayHoverPause: true,
//       slideBy: 3,
//       responsive: {
//         0: {
//           items: 1,
//         },
//         768: {
//           items: 2,
//         },
//       },
//     });
//     owlInitialized = true;
//   }
// });
