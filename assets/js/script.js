// Display the current day at the top of the calender 
function updateDateTime() {
  var currentTime = dayjs().format('dddd DD MMMM HH:mm:ss');
  $('#currentDay').html(currentTime);
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Present time blocks for standard business hours

function createTimeBlocks() {
  var currentHour = dayjs().hour();

  for (var i = 9; i <= 17; i++) {

// column for hour
    const time = i;
    const timeBlock = $('<div>').addClass('time-block row');
    const hour = dayjs().hour(i).format('HH');
    
// Allow a user to enter an event when they click a time block
    const storedText = localStorage.getItem(time)
    const textArea = $('<textarea>').addClass('textArea col-12').attr('placeholder', 'Type in your task here').val(storedText); // $(element). attr('id', 'task');

    //save button
    const saveBtn = $('<button>').addClass('saveBtn btn').html('<i class="far fa-save"></i>'); 
    
    // event listener 
    saveBtn.on( "click", function() {
    const clickBtn = textArea.val();
    console.log(clickBtn);

    //key is hour, value or val is the input
    localStorage.setItem(time, textArea.val())
    //$( "p" ).siblings( ".selected" ).css( "background", "yellow" );
  } );

// * Color-code each time block based on past, present, and future when the time block is viewed

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
