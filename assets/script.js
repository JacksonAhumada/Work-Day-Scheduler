var timeDisplayEl = $('#currentDay');
var toDo = document.querySelector("#taskInput");
var toDos = localStorage.getItem("toDos");
var saveButton = document.querySelector("saveBtn")
toDo.textContent = toDos;



function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);


  //Change textarea background color based on time
var checkTime = function () {

  //Get Current time
  var currentTime = moment().format('H');

  //get all elements with class "taskarea"
  var timeBlockElements = $(".textarea");

  //loop through taskarea classes
  for (var i = 0 ; i < timeBlockElements.length ; i++) {

      //Get element i's ID as a string
      var elementID = timeBlockElements[i].id;

      //get element by ID
      var manipID = document.getElementById(timeBlockElements[i].id)

      // //remove any old classes from element
      // $(timeBlockElements[i].id).removeClass(".present .past .future");

      // apply new class if task is present/past/future
      if (elementID < currentTime) {
          $(manipID).addClass("past");
      } else if (elementID > currentTime) {
          $(manipID).addClass("future");
      } else {
          $(manipID).addClass("present");
      }
  }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

saveButton.addEventListener("click", function() {
  if (toDos !== null) {
    toDo.textContent = toDos;
    localStorage.setItem("toDos", toDos);
  }
});