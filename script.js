//showing today

var todayText = document.getElementById("currentDay");
var today = moment().format("MMMM Do YYYY");
todayText.textContent = today;

var currentHour = parseInt(moment().format('H')); //gets the current hour value in 24hr format
// currentHour = 13; //for testing purpose
console.log(currentHour); // outputs the current hour value in 24hr format

$(document).ready(function() {
    // hit the save button to store the notes in the local storage
     $(".saveBtn").on("click", function(){
        var userInput = $(this).siblings(".textarea").val(); // textarea is the sibling of saveBtn
        var hour = $(this).parent().attr("id");  // get the id value of the parent 
        localStorage.setItem(hour, userInput);  
     });

     //load any data in the local storage
     $("#9AM .textarea").val(localStorage.getItem("9AM"));   // get the value named 9AM and display in the textarea of the same hour
     $("#10AM .textarea").val(localStorage.getItem("10AM"));
     $("#11AM .textarea").val(localStorage.getItem("11AM"));
     $("#12PM .textarea").val(localStorage.getItem("12PM"));
     $("#13PM .textarea").val(localStorage.getItem("13PM"));
     $("#14PM .textarea").val(localStorage.getItem("14PM"));
     $("#15PM .textarea").val(localStorage.getItem("15PM"));
     $("#16PM .textarea").val(localStorage.getItem("16PM"));
     $("#17PM .textarea").val(localStorage.getItem("17PM"));

     //change color depending on past/present/future by adding/removing CSS. 

    $('.textarea').each(function() {
        var blockHourId = parseInt($(this).attr("id"));
        console.log(currentHour, blockHourId); //compare and contrast current vs. present values

        // all 3 patterns 

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
    });

    // extra work - clear the schedule

    $('.clearBtn').on("click", function(){

            if (confirm("This will delete your schedule. Would you confirm?")){  // confirm the user whether to actually delete
                localStorage.clear();
                location.reload();
            } else {   // if not, nothing happens
                return false;
            }
    });

});


   