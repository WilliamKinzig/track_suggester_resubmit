$(document).ready(function () {
  $("#button").click(function () {
    event.preventDefault();

    var option1 = parseInt($("input:radio[name=quesGroup01]:checked").val());
    var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
    var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

    var total = 0;

    var total = option1 + option2 + option3;
    var finalScore = 0;

    if (total === 1 || total === 4) {
      finalScore = 1;
    } else if (total === 2 || total === 5) {
      finalScore = 2;
    } else if (total === 3 || total === 6) {
      finalScore = 3;
    } else {
      finalScore = 0;
    }

    if (finalScore === 1) {
      showSummaryRuby();
    } else if (finalScore === 2) {
      showSummaryReact();
    } else if (finalScore ===3){
      showSummarySharp();
    } else {
      alert("You must check one box for each section. Refresh the page and try again");
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
  });
});
