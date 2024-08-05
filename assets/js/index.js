// Toggle Menu Functionaliy Start

$(document).ready(function () {
    $(".menu-icon").click(function () {
      $("body").addClass("menuToggle");
    });
    $(".close-icon").click(function () {
      $("body").removeClass("menuToggle");
    });
  });
  
  // Toggle Menu Functionaliy End

  // Header Scroll JS Start
  $(document).ready(function(){
    $(window).scroll(function(){
      var header = $("header");
      header.toggleClass("fixed-header", $(window).scrollTop() > 0 );
    });
  });
    // Header Scroll JS End



    // FAQ Accordion JS Start

    $(document).ready(function () {
      //toggle the component with class accordion_body
      $(".accordion_head").click(function () {
          if ($('.accordion_body').is(':visible')) {
              $(".accordion_body").slideUp(300);
              $(".plusminus").text('+');
          }
          if ($(this).next(".accordion_body").is(':visible')) {
              $(this).next(".accordion_body").slideUp(300);
              $(this).children(".plusminus").text('+');
          } else {
              $(this).next(".accordion_body").slideDown(300);
              $(this).children(".plusminus").text('-');
          }
      });
  });
  
    // FAQ Accordion JS End