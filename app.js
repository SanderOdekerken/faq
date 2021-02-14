$(function () {
  $("h2").click(function () {
    if ($(this).next("p").is(":visible")) {
      $("p").hide();
    } else {
      $("p").hide();
      $("h2").css("font-weight", "400");
      $(this).next("p").show();
    }

    if ($(this).css("font-weight") == "400") {
      $(this).css("font-weight", "700");
    } else {
      $(this).css("font-weight", "400");
    }
  });
});
