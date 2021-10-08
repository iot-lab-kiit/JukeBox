for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", getCatagory);
}
function getCatagory() {
  var catagory = this.innerHTML;
  getsound(catagory);
}
var aud = document.createElement("audio");

function getsound(catagory) {
  switch (catagory) {
    case "Hindi":
      var randomnumber1 = Math.round(Math.random() * 4) + 1;
      aud.src = "sounds/hindi/" + randomnumber1 + ".mp3";
      aud.play();
      break;
    case "English":
      var randomnumber2 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/english/" + randomnumber2 + ".mp3";
      aud.play();

      break;
    case "Punjabi":
      var randomnumber3 = Math.round(Math.random() * 4) + 1;
      aud.src = "sounds/punjabi/" + randomnumber3 + ".mp3";
      aud.play();

      break;
  }
}
