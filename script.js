//showing today

var todayText = document.getElementById("currentDay");
var today = moment().format("MMMM Do YYYY");
todayText.textContent = today;

//var currentHour = parseInt(moment().format('H')); //gets the current hour value in 24hr format
var currentHour = 13;
console.log(currentHour); // outputs the current hour value in 24hr format

$(document).ready(function() {
    // hit the save button to store the notes in the local storage
     $(".saveBtn").on("click", function(){
        var userInput = $(this).siblings(".textarea").val();
        var hour = $(this).parent().attr("id");
        localStorage.setItem(hour, userInput);
     });

     //load any data in the local storage
     $("#9AM .textarea").val(localStorage.getItem("9AM"));
     $("#10AM .textarea").val(localStorage.getItem("10AM"));
     $("#11AM .textarea").val(localStorage.getItem("11AM"));
     $("#12PM .textarea").val(localStorage.getItem("12PM"));
     $("#13PM .textarea").val(localStorage.getItem("13PM"));
     $("#14PM .textarea").val(localStorage.getItem("14PM"));
     $("#15PM .textarea").val(localStorage.getItem("15PM"));
     $("#16PM .textarea").val(localStorage.getItem("16PM"));
     $("#17PM .textarea").val(localStorage.getItem("17PM"));

     //change color depending on past/present/future

    $('.textarea').each(function() {
        var blockHourId = parseInt($(this).attr("id"));
        console.log(currentHour, blockHourId);

        if (blockHourId < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if (blockHourId > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else{
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");

    };
    
    
    

})

});


   