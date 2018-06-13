$(document).ready(function() {
  $("form#questionaire").submit(function(event) {
    var option = parseInt($("select#option").val());

    event.preventDefault();

    var option1 = $("input:radio[name=quesGroup01]:checked").val();
    var option2 = $("input:radio[name=quesGroup02]:checked").val();
    var option3 = $("input:radio[name=quesGroup03]:checked").val();

  });
});

//var age = parseInt($("input#age").val());

// if (option === 1) {
//   var course = "CSS";
//   $("#fill").empty().append(course);
//   $("#recommendation").show();
// }else if (option === 2) {
//   var course = "c#";
//   //$("#fill").empty().append(course);
//   $("#recommendation").show();
// }else if (option === 3) {
//   var course = "Java";
//   //$("#fill").empty().append(course);
//   $("#recommendation").show();
// }else if (option === 4) {
//   var course = "PHP";
//   //$("#fill").empty().append(course);
//   $("#recommendation").show();
// }else (option === 5) {
//   var course = "RUBY";
//   //$("#fill").empty().append(course);
//   $("#recommendation").show();
// }

// $("button").click(function() {
//   $("quote").show();
// });
