$(window).on("load", function () {
  "use strict";

  $(function () {
    "use strict";

    /*=========================================================================
            Sticky Sidebar
    =========================================================================*/
    $(".sidebar").stickySidebar({
      topSpacing: 60,
      bottomSpacing: 30,
      containerSelector: ".main-content"
    });

    /*=========================================================================
            Vertical Menu
    =========================================================================*/
    $(".submenu").before('<i class="icon-arrow-down switch"></i>');

    $(".vertical-menu li i.switch").on("click", function () {
      var $submenu = $(this).next(".submenu");
      $submenu.slideToggle(300);
      $submenu.parent().toggleClass("openmenu");
    });


    $(document).keyup(function (e) {
      if (e.key === "Escape") {
        // escape key maps to keycode `27`
        $(".search-popup").removeClass("visible");
      }
    });

    var $header = $(".header-default, .header-personal nav, .header-classic .header-bottom"),
    $clone = $header.before($header.clone().addClass("clone"));

  $(window).on("scroll", function() {
    var fromTop = $(window).scrollTop();
    $('body').toggleClass("down", (fromTop > 300));
  });

  $("button.search").on( 'click', function() {
    $(".search-popup").addClass("visible");
  });

  $(".search-popup .btn-close").on( 'click', function() {
    $(".search-popup").removeClass("visible");
  });

  $(document).keyup(function(e) {
        if (e.key === "Escape") { // escape key maps to keycode `27`
          $(".search-popup").removeClass("visible");
      }
  });


    /*=========================================================================
            Canvas Menu
    =========================================================================*/
    $("button.burger-menu").on("click", function () {
      $(".canvas-menu").toggleClass("open");
      $(".main-overlay").toggleClass("active");
    });

    $(".canvas-menu .btn-close, .main-overlay").on("click", function () {
      $(".canvas-menu").removeClass("open");
      $(".main-overlay").removeClass("active");
    });


  });
});
