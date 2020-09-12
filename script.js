//showing the current day/month

var currentTimeText = document.getElementById("currentDay");
var currentTime = moment().format('MMMM Do YYYY');
currentTimeText.textContent = currentTime;

