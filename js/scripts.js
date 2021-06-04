$(document).ready(function() {
  const hoursStudying = parseInt(prompt("How many hours do you plan on studying a day?"));

  if (hoursStudying> 2) {
    $('#ruby').show();
  } else if (hoursStudying === 21) {
    alert("Now don't go wild!");
    $('#ruby').show();
  } else {
    $('#javascript').show();
  }
});
