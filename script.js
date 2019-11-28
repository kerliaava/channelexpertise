function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}

var btn = $("#goTop");

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: 0
  }, "300");
});

window.onscroll = function () {
  myFunction();
};