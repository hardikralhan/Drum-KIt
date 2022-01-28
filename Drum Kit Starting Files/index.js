
// during the click
for(var i=0;i<document.querySelectorAll(".drum").length;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function (){  // the button you click--> will give you whole buton tag

  makeSound(this.innerHTML);       // this.innerHTML will return w,a,s......
  addAnimation(this.innerHTML);

  });
}

// during keypress
document.addEventListener("keydown", function(event){
  makeSound(event.key);          // (event.key) tells which key pressed
  addAnimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
      var w = new Audio('sounds/tom-1.mp3');
      w.play();
    break;
    case "a":
      var a = new Audio('sounds/tom-2.mp3');
      a.play();
    break;
    case "s":
      var s = new Audio('sounds/tom-3.mp3');
      s.play();
    break;
    case "d":
      var d = new Audio('sounds/tom-4.mp3');
      d.play();
    break;
    case "j":
      var j = new Audio('sounds/snare.mp3');
      j.play();
    break;
    case "k":
      var k = new Audio('sounds/crash.mp3');
      k.play();
    break;
    case "l":
      var l = new Audio('sounds/kick-bass.mp3');
      l.play();
    break;
  }
}

function addAnimation(currentKey){
  var active = document.querySelector("." + currentKey);  // this will return the button tag of (if w is prssed, .w class will be returned)
  active.classList.add("pressed");  // adding the .pressed class which is in css already

  setTimeout(function(){
    active.classList.remove("pressed");     //.pressed class will be removed after 100ml sec
  },100);
}
