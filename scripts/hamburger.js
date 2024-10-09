$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    const menu = document.getElementById("menu");
    $(menu).toggleClass("show");

    // Toggle backdrop and prevent scrolling
    const backdrop = document.getElementById("backdrop");
    $(backdrop).toggleClass("show");
    $("body").toggleClass("no-scroll");
  });

  // Close menu when a menu item is clicked
  $(".menu-item").click(function () {
    $(".hamburger").removeClass("is-active");
    const menu = document.getElementById("menu");
    $(menu).removeClass("show");

    // Remove backdrop and allow scrolling
    const backdrop = document.getElementById("backdrop");
    $(backdrop).removeClass("show");
    $("body").removeClass("no-scroll");
  });

  // Close menu if backdrop is clicked
  $("#backdrop").click(function () {
    $(".hamburger").removeClass("is-active");
    const menu = document.getElementById("menu");
    $(menu).removeClass("show");

    // Remove backdrop and allow scrolling
    $(this).removeClass("show");
    $("body").removeClass("no-scroll");
  });
});
