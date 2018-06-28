$(document).ready(function () {
  $("#button").click(function () {
    event.preventDefault();

    var option1 = parseInt($("input:radio[name=quesGroup01]:checked").val());
    var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
    var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

    var total = option1 + option2 + option3;
    var finalScore = 0;

    if (total === 0) {
      finalScore = 0;
    } else if (total === 0) {
      finalScore = 0;
    } else if (total === 0) {
      finalScore = 0;
    } else {
      finalScore = 0;
    }

    if (finalScore === 1) {

      showSummary();
    } else if (finalScore === 2) {

      showSummary();
    } else {

      showSummary();
    }



    function showSummary(){
      $("#summary").show();
      $(".container2_summaryPics").show();
    }
    function showSummary(){
      $("#summary").show();
      $(".container2_summaryPics").show();
    }
    function showSummary(){
      $("#summary").show();
      $(".container2_summaryPics").show();
    }

    //showSummary();
    // Ruby/Rails
    // CSS/React
    // C#/.NET

  });
});
