$(document).ready(function() {
  const hoursStudying = parseInt(prompt("Study hours a day: Enter Value between 0-6"));

  if (hoursStudying >3 ) {
    $('#ruby').show();
  } 
  else  {hoursStudying <3 
    $('#javascript').show();
  }
  
});

$(document).ready(function() {
  $("p").click(function() {
    $(".developer-showing").show();
  });
});