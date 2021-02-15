$(function () {
  $("h2").click(function () {
    
    if ($(this).next("p").is(":visible")) {
      $("p").hide();
      $("span").css({'transform': 'rotate(0deg)'});
    } else {
      $("p").hide();
      $("h2").css("font-weight", "400");
      $(this).next("p").show();
      $(this).find("span").css({'transform': 'rotate(-180deg)'});
    }

    if ($(this).css("font-weight") == "400") {
      $(this).css("font-weight", "700");
    } else {
      $(this).css("font-weight", "400");
    }
  });
});
