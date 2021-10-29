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
    case "Italian":
      var randomnumber4 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/italian/" + randomnumber4 + ".mp3";
      aud.play();
      break;
    case "Classic":
      var randomnumber5 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/classic/" + randomnumber5 + ".mp3";
      aud.play();
      break;
    case "Folk":
      var randomnumber6 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/folk/" + randomnumber6 + ".mp3";
      aud.play();
      break;
    case "Jazz":
      var randomnumber7 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/jazz/" + randomnumber7 + ".mp3";
      aud.play();
      break;
    case "Pop":
      var randomnumber8 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/pop/" + randomnumber8 + ".mp3";
      aud.play();
      break;
    case "Rock":
      var randomnumber9 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/rock/" + randomnumber9 + ".mp3";
      aud.play();
      break;
    case "Rap":
      var randomnumber10 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/rap/" + randomnumber10 + ".mp3";
      aud.play();
      break;
    case "Indie":
      var randomnumber11 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/indie/" + randomnumber11 + ".mp3";
      aud.play();
      break;
    case "Dubstep":
      var randomnumber12 = Math.round(Math.random() * 2) + 1;
      aud.src = "sounds/dubstep/" + randomnumber12 + ".mp3";
      aud.play();
      break;
  }
}
