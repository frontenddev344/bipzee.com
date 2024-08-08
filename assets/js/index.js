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
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed-header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End


// Read More Functionality JS Start

$('.subpage-readmore-btn').click(function (e) {
  e.preventDefault();
  // console.log('click');
  $(this).parent().prev().slideToggle('slow');
  // $('.subpage-exp-content').slideToggle('slow');
  $(this).text($(this).text() == 'Read Less' ? 'Read More' : 'Read Less');
});

// Read More Functionality JS end



// //Cookies JS Start

function SetCookie(cookieName, cookieValue, nDays) {
  "use strict";
  var today = new Date();
  var expire = new Date();
  if (nDays == null || nDays == 0) nDays = 1;
  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie =
    cookieName +
    "=" +
    escape(cookieValue) +
    ";expires=" +
    expire.toGMTString() +
    "; path=/";
}
function ReadCookie(cookieName) {
  "use strict";
  var theCookie = " " + document.cookie;
  var ind = theCookie.indexOf(" " + cookieName + "=");
  if (ind == -1) ind = theCookie.indexOf(";" + cookieName + "=");
  if (ind == -1 || cookieName == "") return "";
  var ind1 = theCookie.indexOf(";", ind + 1);
  if (ind1 == -1) ind1 = theCookie.length;
  return unescape(theCookie.substring(ind + cookieName.length + 2, ind1));
}
function DeleteCookie(cookieName) {
  "use strict";
  var today = new Date();
  var expire = new Date() - 30;
  expire.setTime(today.getTime() - 3600000 * 24 * 90);
  document.cookie =
    cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
}
function AcceptCookies() {
  SetCookie("sgCookies", true, 30);
  jQuery("#cookie-bar").hide();
}
$(document).ready(function (e) {
  var toTop = $(
    "<div id='cookie-bar'><div id='contentcookie'><p>Ez a weboldal cookie-kat használ annak érdekében, hogy a legjobb élményt nyújthassa webhelyünkön. A cookie-k segítenek nekünk közösségi média funkciókat biztosítani,elemezni forgalmunkat és javítani szolgáltatásainkat. Oldalunk további használatával Ön hozzájárul a cookie-k használatához.</p><button id='Cookie' tabindex=1 onclick='AcceptCookies();'>Accept </button><div class='clear'></div></div></div>"
  ).appendTo("body");
  if (!ReadCookie("sgCookies")) {
    //If the cookie has not been set
    jQuery("#cookie-bar").show();
  } else {
    jQuery("#cookie-bar").hide();
  }
});

// //Cookies JS Start

const cookiesBox = document.querySelector('.wrapper'),
  buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
  if (document.cookie.includes('AlexGolovanov')) return;
  cookiesBox.classList.add('show');

  // ---- ---- Button ---- ---- //
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      cookiesBox.classList.remove('show');

      // ---- ---- Time ---- ---- //
      if (button.id == 'acceptBtn') {
        document.cookie =
          'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
      }
    });
  });
};

window.addEventListener('load', executeCodes);