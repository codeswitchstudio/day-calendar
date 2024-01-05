// var advancedFormat = require('dayjs/plugin/advancedFormat')
// dayjs.extend(advancedFormat)
// // dayjs().format('Q Do k kk X x')

// Function to update the current time and date
function updateDateTime() {
  // Get the current time and format it using day.js
  var currentTime = dayjs().format('dddd DD MMMM HH:mm:ss');

  // Update the content of the HTML element
  document.getElementById('currentDay').innerHTML = currentTime;
// $(#"currentDateTime").text = currentTime;
}
// Update the current time and date initially
updateDateTime();

// Set up a setInterval to update the time and date every second (1000 milliseconds)
setInterval(updateDateTime, 1000);