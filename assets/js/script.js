

// Function to update the current time and date
function updateDateTime() {
  var currentTime = dayjs().format('dddd DD MMMM HH:mm:ss');
  $('#currentDay').html(currentTime);
}
updateDateTime();
setInterval(updateDateTime, 1000);


// Function to save events to local storage
function saveEvent(hour, event) {
  localStorage.setItem('hour-' + hour, event);
}




//Function for the time blocks
function createTimeBlocks() {
  var currentHour = dayjs().hour();

  for (var i = 9; i <= 17; i++) {
    var timeBlock = $('<div>').addClass('time-block row');
    var hour = dayjs().hour(i).format('HH');
    var textArea = $('<textarea>').addClass('textArea col-12').attr('placeholder', 'Type in your task here');
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

// // Function to load events from local storage
// function loadEvents() {
//   for (var i = 9; i <= 17; i++) {
//     var event = localStorage.getItem('hour-' + i);
//     if (event) {
//       $('#hour-' + i).val(event);
//     }
//   }
// }


// // Event listener for save buttons
// $(document).on('click', '.saveBtn', function() {
//   var hour = $(this).siblings('.hour').text().trim();
//   var event = $(this).siblings('.textArea').val().trim();
//   saveEvent(hour, event);
// });


// // Function to save events to local storage
// function saveEvent(hour, event) {
//   console.log('Saving event for hour ' + hour + ': ' + event);
//   localStorage.setItem('hour-' + hour, event);
// } 



// Call function to create time blocks
createTimeBlocks();


