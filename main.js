// import Unsplash from 'unsplash-js';
//
// const unsplash = new Unsplash({
//   applicationId: "09a3dcf498e423d0ef97ad34dc4984b1d13e395949b2c410156b4c4c42105c15",
//   secret: "fe571b4a3a0b6b91cf925187bf66b4171a52b62c9b6d4a987d5170c1c0f94f17",
//   callbackUrl: "urn:ietf:wg:oauth:2.0:oob"
// });
//
// const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//   "public",
// ]);
//
// location.assign(authenticationUrl);
//
// unsplash.auth.userAuthentication(query.code)
//   .then(toJson)
//   .then(json => {
//     unsplash.auth.setBearerToken(json.access_token);
//   });
//
//   unsplash.users.profile("naoufal")
//   .catch(err => {
//     // Your flawless error handling code
//   });
//
// unsplash.photos.getRandomPhoto({ width: "1950px", height: "1080px", username: "naoufal" })
//   .then(toJson)
//   .then(json => {
//   })
//   .catch(err => {
//   console.log('hi');
// });



// To Do List //

var input = document.getElementById('todoInput');
var list = document.getElementById('todoList');

var checkboxCount = 0;

input.addEventListener('keypress', function(event) {
    if(event.keyCode === 13) {
      checkboxCount++;
      var content = input.value;
      input.value = "";
      var listItem = document.createElement('input');
      listItem.id = "item" + checkboxCount;
      var label = document.createElement('label');
      label.textContent = content;
      label.setAttribute("for", "item" + checkboxCount);
      listItem.type = "checkbox";
      list.append(listItem);
      list.append(label);
    }
});



function startTime() {
    var today = new Date();
    var h = today.getHours();
    if (h > 12) {
      h -= 12;
    }
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}





// Assign variables to the HTML elements we want to target //

var clear = document.querySelector('#clear');
var calculationField = document.querySelector('#calculation_field');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');
var divide = document.querySelector('#divide');
var four = document.querySelector('#four');
var five = document.querySelector('#five');
var six = document.querySelector('#six');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var zero = document.querySelector('#zero');
var multiply = document.querySelector('#multiply');
var subtract = document.querySelector('#subtract');
var decimal = document.querySelector('#decimal');
var equal = document.querySelector('#equal');
var add = document.querySelector('#add');
var divide = document.querySelector('#divide');

// Add event listeners for each key to run function when clicked //


seven.addEventListener('click', addToEquation);
eight.addEventListener('click', addToEquation);
nine.addEventListener('click', addToEquation);
six.addEventListener('click', addToEquation);
five.addEventListener('click', addToEquation);
four.addEventListener('click', addToEquation);
three.addEventListener('click', addToEquation);
two.addEventListener('click', addToEquation);
one.addEventListener('click', addToEquation);
zero.addEventListener('click', addToEquation);

clear.addEventListener('click', clearField);
equal.addEventListener('click', computeEquation);

multiply.addEventListener('click', addToEquation);
divide.addEventListener('click', addToEquation);
subtract.addEventListener('click', addToEquation);
add.addEventListener('click', addToEquation);

// Create an empty array to hold the values put in the calc field //

let storedEquation = "";

//Function clears the content in the calculationField and the equation

function clearField () {
  calculationField.textContent = "";
  storedEquation = [];
}


function addToEquation (e){
  if (this.textContent === "x") {
    storedEquation += "*";
    calculationField.textContent += "*";
  } else {
    storedEquation += this.textContent;
    calculationField.textContent += this.textContent;
  }
}

function computeEquation () {
  storedEquation = eval(storedEquation);
  calculationField.textContent  = storedEquation;
}



// When selected, add value to the caluclation field //




// Pressing equal button executes the calculation //




// Put the answer to the calculation in the field //




// Pressing C clears the sum  (set back to an empty string) //
