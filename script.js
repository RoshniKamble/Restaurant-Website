// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// navbar
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 0);
});

// navbar
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function () {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function () {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

//modal
$("#myModal2").on("show.bs.modal", function (e) {
  $("#myModal1").modal("hide");
});

// loader
var preloader = document.getElementById("loader-wrapper");
function myFunction() {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
}

//AOS
$(function () {
  AOS.init({
    once: true,
  });
});

AOS.init({ disable: "mobile" });

//slider
$(".responsive").slick({
  dots: false,
  infinite: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

//   image-gallery-hover
$(".hover").mouseleave(function () {
  $(this).removeClass("hover");
});
