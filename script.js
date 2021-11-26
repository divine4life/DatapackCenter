// A variable we will use to track the colour of the background
var currentBackground = "dark_theme";

document.getElementById("background").style.background = "#696969";
document.getElementById("changeText").innerHTML = "Light Theme"

// selecting elements and changing their property values
document.getElementsByTagName("h1")[0].style.color = "orange";
document.getElementsByTagName("p")[0].style.color = "brown";
document.getElementsByClassName("last")[0].style.color = "orange";
document.getElementsByClassName("last")[0].style.fontSize = "larger";

// method to change background when the user clicks on the button
function changeBgMethod() {
  // If the bacground is currently set to white
  if(currentBackground == "light_theme") {
    // then change it to dark_theme
    document.getElementById("background").style.background = "#696969";
    document.getElementById("changeText").innerHTML = "Light Theme"
    document.getElementById("changeText").style.background = "#ebebeb"
    document.getElementById("changeText").style.color = "#696969"
    // And Remember that we changed it for next time when we click
    currentBackground = "dark_theme"
    // If it's not white
  } else if (currentBackground == "dark_theme") {
    // Then change it to white
    document.getElementById("background").style.background = "#ebebeb";
    document.getElementById("changeText").innerHTML = "Dark Theme"
    document.getElementById("changeText").style.background = "#696969"
    document.getElementById("changeText").style.color = "#ebebeb"
    // And remember that we changed it for next time when we click
    currentBackground = "light_theme"
  }
}
