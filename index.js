/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(hour_time) {
  let arr_of_hour = hour_time.split("")
  arr_of_hour.splice(2,1)
  let arr_of_num = arr_of_hour.map(Number)
  let num = arr_of_num.join("")
 
  if (num<1200){
    return console.log("Good Morning")
  }
  else if(num>1700){
    return console.log("Good Evening")
  }
  else {
    return console.log("Good Afternoon")
  }
  return "hello"
}

function displayMessage() {

}
