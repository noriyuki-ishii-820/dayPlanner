//showing today

var todayText = document.getElementById("currentDay");
var today = moment().format("MMMM Do YYYY");
todayText.textContent = today;

var currentHour = moment().format('H'); //gets the current hour value in 24h format
console.log(currentHour);



$(document).ready(function() {
    // hit the save button to store the notes in the local storage
     $(".saveBtn").on("click", function(){
        var userInput = $(this).siblings(".textarea").children(".textBox").val();
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, userInput);
     });

     //load any data in the local storage
     $("#9AM .textarea .textBox").val(localStorage.getItem("9AM"));
     $("#10AM .textarea .textBox").val(localStorage.getItem("10AM"));
     $("#11AM .textarea .textBox").val(localStorage.getItem("11AM"));
     $("#12PM .textarea .textBox").val(localStorage.getItem("12PM"));
     $("#13PM .textarea .textBox").val(localStorage.getItem("13PM"));
     $("#14PM .textarea .textBox").val(localStorage.getItem("14PM"));
     $("#15PM .textarea .textBox").val(localStorage.getItem("15PM"));
     $("#16PM .textarea .textBox").val(localStorage.getItem("16PM"));
     $("#17PM .textarea .textBox").val(localStorage.getItem("17PM"));

});


   