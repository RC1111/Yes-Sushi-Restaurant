$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });

  // sticky navbar less padding. Navbar will stick after first section.
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 825) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });
  //Smooth scroll

  $(".nav-item a, .header-link, #back-to-top").click(function(link) {
    link.preventDefault();

    let target = $(this).attr("href");

    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top - 25
        },
        2000
      );
  });
  // end of smooth scroll // back to top

  $(window).scroll(function() {
    let position = $(this).scrollTop();

    if (position >= 718) {
      $(".back-to-top").addClass("scrollTop");
    } else {
      $(".back-to-top").removeClass("scrollTop");
    }
  });

  //magnific popup
  $(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",

    gallery: {
      enabled: true
    }
    // other options
  });
});
