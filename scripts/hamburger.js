$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    const menu = document.getElementById("menu");
    $(menu).toggleClass("show");
  });
});

console.log("hi");
