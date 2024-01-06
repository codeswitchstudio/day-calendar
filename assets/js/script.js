//Function to update the current time and date
function updateDateTime() {
  var currentTime = dayjs().format('dddd DD MMMM HH:mm:ss');
  document.getElementById('currentDay').innerHTML = currentTime;
}

// Update the current time and date initially
updateDateTime();
// Set up a setInterval to update the time and date every second (1000 milliseconds)
setInterval(updateDateTime, 1000);



// Function to create time blocks
function createTimeBlocks() {
  var currentHour = dayjs().hour();

  for (var i = 9; i <= 17; i++) {
    var timeBlock = $('<div>').addClass('time-block');
    var hour = dayjs().hour(i).format('HH');
    var textArea = $('<textArea>').attr('id', 'hour-' + i);

    if (i < currentHour) {
      timeBlock.addClass('past');
    } else if (i === currentHour) {
      timeBlock.addClass('present');
    } else {
      timeBlock.addClass('future');
    }

    var saveBtn = $('<button>').text('Save').attr('data-hour', i);

    timeBlock.append($('<div>').text(hour));
    timeBlock.append(textArea);
    timeBlock.append(saveBtn);

    $('.textArea').append(timeBlock);
  }
}

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
$(document).on('click', 'button', function() {
  var hour = $(this).attr('data-hour');
  var event = $('#hour-' + hour).val();
  saveEvent(hour, event);
});

// Initialize the app


createTimeBlocks();
loadEvents();