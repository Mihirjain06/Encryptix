let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

//store all buttons into array from
let buttonsArray = Array.from(buttons);
let string = "";

buttonsArray.forEach((btn) => {

  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("dlt")) {
      // Check if the button has the class 'dlt'
      string = string.substring(0, string.length - 1);
      display.value = string;
    }
    else if (e.target.innerHTML == "Ac") {
      string = "";
      display.value = string;
    } 
    else if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
    } 
    else if (e.target.innerHTML == "%") {
      string = eval(string) / 100;
      display.value = string;
    } 
    else {
        string += e.target.innerHTML;
        display.value = string;
    }
  }); 
});
