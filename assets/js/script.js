
// Function to update the current time and date
function updateDateTime() {
  var currentTime = dayjs().format('dddd DD MMMM HH:mm:ss');
  $('#currentDay').html(currentTime);
}
// Update the current time and date initially
updateDateTime();
// Set up a setInterval to update the time and date every second (1000 milliseconds)
setInterval(updateDateTime, 1000);



// Function to create time blocks
// Time block is a row made of three columns
// first column hour
// second column description with text area inside
// third column save button container with button inside



function createTimeBlocks() {
  var currentHour = dayjs().hour();

  for (var i = 9; i <= 17; i++) {
    var timeBlock = $('<div>').addClass('time-block row');
    var hour = dayjs().hour(i).format('HH');
    var textArea = $('<textarea>').addClass('textArea col-12').attr('placeholder', 'What would you like to do?');; 
    var saveBtn = $('<button>').addClass('saveBtn btn').html('<i class="far fa-save"></i>'); // Added Bootstrap button classes

    if (i < currentHour) {
      timeBlock.addClass('past');
    } else if (i === currentHour) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }

    // First Column - Hour
    timeBlock.append($('<div>').addClass('col-1 hour').text(hour + '00'));

    // Second Column - Description with Text Area
    timeBlock.append($('<div>').addClass('col-10').append($('<div>').addClass('description').append(textArea)));

    // Third Column - Save Button Container with Button Inside
    timeBlock.append($('<div>').addClass('col-1 saveBtnContainer').append(saveBtn));

    $('.container').append(timeBlock);
  }
}

// Call the function to create time blocks
createTimeBlocks();


// Function to load events from local storage
function loadEvents() {
  for (var i = 9; i <= 17; i++) {
    var event = localStorage.getItem('hour-' + i);
    if (event) {
      $('#hour-' + i).val(event);
    }
  }
}

// Function to save events to local storage
function saveEvent(hour, event) {
  localStorage.setItem('hour-' + hour, event);
}

// Event listener for save buttons
$(document).on('click', 'button', function () {
  var hour = $(this).attr('data-hour');
  var event = $('#hour-' + hour).val();
  saveEvent(hour, event);
});
