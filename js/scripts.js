$(document).ready(function () {
  $("#button").click(function () {
    event.preventDefault();

    var option1 = parseInt($("input:radio[name=quesGroup01]:checked").val());
    var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
    var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

    var total = option1 + option2 + option3;
    var finalScore = 0;

    if (total === 0) {
      finalScore = 1;
    } else if (total === 6) {
      finalScore = 2;
    } else if (total === 5) {
      finalScore = 3;
    } else {
      finalScore = 4;
    }

    if (finalScore === 1) {
      $(".cssReact").show();
      showSummary();
    } else if (finalScore === 2) {
      $(".rubyRails").show();
      showSummary();
    } else {
      $(".cNet").show;
      showSummary();
    }



    function showSummary(){
      $("#summary").show();
    }

    //showSummary();
    // Ruby/Rails
    // CSS/React
    // C#/.NET

  });
});
