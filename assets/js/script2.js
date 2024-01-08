// The app should:

//! Display the current day at the top of the calender when a user opens the planner. 

function updateDateTime() {
  var currentTime = dayjs().format('dddd DD MMMM HH:mm:ss');
  $('#currentDay').html(currentTime);
}
updateDateTime();
setInterval(updateDateTime, 1000);

//!Present time blocks for standard business hours when the user scrolls down. 

//time block
// column 1 - hour 
// column 2 - description container div with text area inside
// column 3 - save button container with save button inside


function createTimeBlocks() {
  var currentHour = dayjs().hour();

  for (var i = 9; i <= 17; i++) {

    //hour
    
    const time = i;
    const timeBlock = $('<div>').addClass('time-block row');
    const hour = dayjs().hour(i).format('HH');
    
//! Allow a user to enter an event when they click a time block

    //input text
    const storedText = localStorage.getItem(time)
    
    const textArea = $('<textarea>').addClass('textArea col-12').attr('placeholder', 'Type in your task here').val(storedText); // $(element). attr('id', 'task');

//input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
//type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"


    //save button
    const saveBtn = $('<button>').addClass('saveBtn btn').html('<i class="far fa-save"></i>'); // 
// event listener 

 saveBtn.on( "click", function() {
  const clickBtn = textArea.val();
  console.log(clickBtn);

  //key for the hour, value 
  localStorage.setItem(time, textArea.val())
  //$( "p" ).siblings( ".selected" ).css( "background", "yellow" );

} );




// * Color-code each time block based on past, present, and future when the time block is viewed.
// past  < current hour  ---dark
// present = current hour ---light
// future > current hour  ----medium


    if (i < currentHour) {
      timeBlock.addClass('past');
    } else if (i === currentHour) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }

    // First Column - Hour
    timeBlock.append($('<div>').addClass('col-1 hour').text(hour + '00'));

    // Second Column - description class container with Text Area
    timeBlock.append($('<div>').addClass('col-10').append($('<div>').addClass('description').append(textArea)));   

    // Third Column - Save Button Container with Button Inside
    timeBlock.append($('<div>').addClass('col-1 saveBtnContainer').append(saveBtn));


    $('.container').append(timeBlock);
  }
}

// Call function to create time blocks
createTimeBlocks();

// *Save the event in local storage when the save button is clicked in that time block.
//localStorage.setItem("placeholder", "");
//const cat = localStorage.getItem("myCat");





// Persist events between refreshes of a page



