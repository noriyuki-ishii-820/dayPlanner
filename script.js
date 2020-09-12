//showing the current day/month

var currentTimeText = document.getElementById("currentDay");
var currentTime = moment().format('MMMM Do YYYY');
currentTimeText.textContent = currentTime;

// show the Save Icon

$('.saveBtn').html('<i class="fas fa-save fa-vc"></i>');