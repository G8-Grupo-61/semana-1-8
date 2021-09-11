$(".menu-icon").click(function() {
  $("nav").toggleClass("active");
  $("li").toggleClass("active");
  if($(this).text() == "☰") {
    $(this).text("X");
  }
  else {
    $(this).text("☰");
  }
})