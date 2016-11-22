jQuery(document).ready(function(){

  $('#contactform').submit(function(){

    var action = $(this).attr('action');

    $("#message").slideUp(500,function() {
    $('#message').hide();

    $.post(action, {
      name: $('#name').val(),
      email: $('#email').val(),
      comments: $('#comments').val(),
    },
      function(data){
        document.getElementById('message').innerHTML = data;
        $('#message').slideDown('slow');
        $('#submit').removeAttr('disabled');
        if(data.match('success') != null) $('#contactform').slideUp('slow');

      }
    );

    });

    return false;

  });

});


function Advice() {

  var sfa = [ "Advice one goes here",
              "Advice two goes here",
              "Advice three goes here",
              "Advice four goes here",
              "Advice five goes here",
              "And so on",

            ];

  var who = sfa[Math.round(Math.random()*(sfa.length-1))];

  document.getElementById('advices').innerHTML = '<div>' + who + '</div>'

}
;
