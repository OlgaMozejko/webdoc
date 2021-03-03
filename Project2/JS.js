
console.log('JavaScript from js/js.js: up and running!');


//vid controls
let myVid = document.getElementById("myVideo");
myVid.width = 800;
myVid.controls = false;


function playPause() {
  if (myVid.paused) {
    myVid.play();
    myVid.controls = false;
      }
  else {
    myVid.pause();
    myVid.controls = true;
    }
}

oplay.addEventListener('click', playPause)

function shutUp() {
    if (myVid.muted === false) {
        myVid.muted = true;
    }
    else {
        myVid.muted = false;
    }
}

omute.addEventListener('click', shutUp)

function restartVid() {
    myVid.currentTime = 0;
}

oreplay.addEventListener('click', restartVid)

//end of vid controls



//SCROLL REVEAL KENIA

ScrollReveal({
    duration: 1000
})

ScrollReveal().reveal('.h1-text-hp');

ScrollReveal().reveal('.nuuii-hp', {
    delay: 600
})

ScrollReveal().reveal('.button-hp', {
    delay: 1000
})

ScrollReveal().reveal('.arrows-hp', {
    delay: 1000
})

var scene = document.getElementsByClassName("illustration-hp");
var parallaxInstance = new Parallax(illustration-hp);