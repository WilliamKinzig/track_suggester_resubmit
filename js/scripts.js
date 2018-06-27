$(document).ready(function() {
  $("#button").click(function(){
    event.preventDefault();

      var option1 = parseInt($("input:radio[name=quesGroup01]:checked").val());
      var option2 = parseInt($("input:radio[name=quesGroup02]:checked").val());
      var option3 = parseInt($("input:radio[name=quesGroup03]:checked").val());

      var total = option1 + option2 + option3;

       var total = 0;
       if(total === 0){
       $("#summary").show()};
//         bob = 1;
//       }else if(total === 6){
//         bob = 2;
//       }else if(total === 5){
//         bob = 3;
//       }else {
//         bob = 4;
//       }
//      
//       if (bob === 1){
//         $(".cssReact").show();
//       }else if (bob === 2){
//         $(".rubyRails").show();
//       }else(
//         $(".cNet").show;
//       )


      // Ruby/Rails
      // CSS/React
      // C#/.NET

     $(".summary").show();
  });
});
