var button = document.getElementById("myButton");
var aboutMe = document.getElementById("aboutMe");

function showHideAboutMe(){
  if (aboutMe.style.display === "block"){
    aboutMe.style.display = "none";
  } else {
    aboutMe.style.display = "block";
  }
}

button.onclick = showHideAboutMe;
