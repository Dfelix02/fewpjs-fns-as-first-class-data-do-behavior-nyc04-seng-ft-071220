/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(hour_time) {
  let arr_of_hour = hour_time.split(":")
  let hour =  arr_of_hour.join("")
 
  if (hour<1200){
    return console.log("Good Morning")
  }
  else if(hour>1700){
    return console.log("Good Evening")
  }
  else {
    return console.log("Good Afternoon")
  }
}

function displayMessage() {

}
