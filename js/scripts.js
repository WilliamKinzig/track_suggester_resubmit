$(document).ready(function() {
  $("form#questionaire").submit(function(event) {
    //var age = parseInt($("input#age").val());
    var option = parseInt($("select#option").val());

    if (option === 1) {
      var course = "CSS";
      $("#fill").empty().append(course);
      $("#recommendation").show();
    }else if (option === 2) {
      var course = "c#";
      //$("#fill").empty().append(course);
      $("#recommendation").show();
    }else if (option === 3) {
      var course = "Java";
      //$("#fill").empty().append(course);
      $("#recommendation").show();
    }else if (option === 4) {
      var course = "PHP";
      //$("#fill").empty().append(course);
      $("#recommendation").show();
    }else (option === 5) {
      var course = "RUBY";
      //$("#fill").empty().append(course);
      $("#recommendation").show();
    }
    #quote.show();
    event.preventDefault();
  });
});
