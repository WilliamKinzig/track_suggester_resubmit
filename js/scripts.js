$(document).ready(function() {
  $("#button").submit(function(event) {
    event.preventDefault();

      var option1 = parseInt($("input:radio[name=quesGroup01]:checked").val());
      var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
      var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

      var total = option1 + option2 + option3;

      // var bob = 0;
      // if(total === 7){
      // $("#summary").show();
      //   bob = 1;
      // }else if(total === 6){
      //   bob = 2;
      // }else if(totol === 5){
      //   bob = 3;
      // }else {
      //   bob = 4;
      // }

     $("#summary").show();
  });
});
