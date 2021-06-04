$(document).ready(function() {
const hoursStudying = parseInt(prompt("Study hours a day: Enter Value between 0-4"));

if (hoursStudying >2.9 ) {
$('#ruby').show();
} 
else {hoursStudying <2 
$('#javascript').show();
}

});
$(document).ready(function() {
$(".click").click(function() {
$(".developer-showing").toggle();
$(".developer-hidden").toggle();
});
});

$(document).ready(function() {
$(".click").click(function() {
$(".frustration-showing").toggle();
$(".frustration-hidden").toggle();
});
});

$(document).ready(function() {
$("#formOne").submit(function(event) {
event.preventDefault();
const skill1Input = $("input#skill1").val();
const valuesInput = $("input#values").val();
const abilitiesInput= $("input#abilities").val();
const talentsInput = $("input#talents").val();

$(".skill1").text(skill1Input);
$(".values").text(valuesInput);
$(".abilities").text(abilitiesInput);
$(".talents").text(talentsInput);


$("#rust").show();
event.preventDefault();
});
});