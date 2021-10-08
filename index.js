for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",getobj);
}
function getobj()
{
var objtxt = this.innerHTML;
getsound(objtxt);
}
function getsound(txt)
{
  switch (txt) {
        case "Hindi":
        var randomnumber1= Math.round(Math.random()*(3-1)+1);
        var audio = new Audio("sounds/hindi/"+randomnumber1+".mp3");
        audio.play();
        break;
      
        case "English":
        var randomnumber2= Math.round(Math.random()*(5-1)+1);
        var audio = new Audio("sounds/english/"+randomnumber2+".mp3");
        audio.play();
        break;
      
        case "Punjabi":
        var randomnumber3= Math.round(Math.random()*(5-1)+1);
        var audio = new Audio("sounds/punjabi/"+randomnumber3+".mp3");
        audio.play();
        break;
        
        case "Classical":
        var randomnumber4= Math.round(Math.random()*(2-1)+1);
        var audio = new Audio("sounds/classical/"+randomnumber4+".mp3");
        audio.play();
        break;

        case "Folk":
        var randomnumber5= Math.round(Math.random()*(2-1)+1);
        var audio = new Audio("sounds/classical/"+randomnumber5+".mp3");
        audio.play();
        break;
      
        case "Jazz":
        var randomnumber6= Math.round(Math.random()*(2-1)+1);
        var audio = new Audio("sounds/classical/"+randomnumber6+".mp3");
        audio.play();
        break;
      
        case "Pop":
        var randomnumber7= Math.round(Math.random()*(2-1)+1);
        var audio = new Audio("sounds/classical/"+randomnumber7+".mp3");
        audio.play();
        break;
      
        case "Rock":
        var randomnumber8= Math.round(Math.random()*(2-1)+1);
        var audio = new Audio("sounds/classical/"+randomnumber8+".mp3");
        audio.play();
        break;
  }
}
