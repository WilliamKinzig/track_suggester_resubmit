$(document).ready(function () {
  $("#button").click(function () {
    event.preventDefault();

    var option1 = parseInt($("input:radio[name=quesGroup01]:checked").val());
    var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
    var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

    var total = option1 + option2 + option3;
    var finalScore = 0;

    showSummaryRuby();

    if (total === 1) {
      finalScore = 1;
    } else if (total === 0) {
      finalScore = 2;
    } else if (total === 0) {
      finalScore = 3;
    } else {
      finalScore = 0;
    }

    if (finalScore === 1) {
      showSummaryRuby();
      showSummary();
    } else if (finalScore === 2) {
      showSummaryReact();
      showSummary();
    } else if (finalScore ===3){
      showSummarySharp();
      showSummary();
    } else {
      finalScore == 0;
    }

    function showSummaryRuby(){
      $("#summary").show();
      $("#ruby").show();
    }
    function showSummaryReact(){
      $("#summary").show();
      $("#react").show();
    }
    function showSummarySharp(){
      $("#summary").show();
      $("#sharp").show();
    }

    //showSummary();
    // Ruby/Rails
    // CSS/React
    // C#/.NET

  });
});
