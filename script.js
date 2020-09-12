//showing the current day/month

var currentTimeText = document.getElementById("currentDay");
var currentTime = moment().format("MMMM Do YYYY");
currentTimeText.textContent = currentTime;

var currentHour = moment().format('L');   

// time variables

var hourArray = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];

$(document).ready(function() {

 
    for (var i = 0; i < hourArray.length; i++) {

        $(".container").append(
            '<div class="row"><div class="col-2 hour">' + hourArray[i] + '</div><div class="col-8 textarea"><input class="textBox"></input></div><div class="col-2 saveBtn"><i class="fas fa-save fa-vc"></i></div></div>'
          );

        
        //    if (i < 3 ) {
        //         var hourOutput = hourArray[i] + amPm[0];            
        //         $('.hour').html(hourOutput);
        //         console.log("Morning" + hourOutput);
        //     } else {
        //         var hourOutput = hourArray[i] + amPm[1];
        //         $('.hour').html(hourOutput);
        //         console.log(hourOutput);
        //  }
     }}
     
     );


   