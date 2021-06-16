function playSound(str) {
  var sound = document.getElementById(str);
  sound.play()
  if (str === 'Q'){
    document.getElementById("display").innerText = "Tom"
  }else if (str === 'W'){
    document.getElementById("display").innerText = "Tom 2"
  }else if (str === 'E'){
    document.getElementById("display").innerText = "Rim"
  }else if (str === 'A'){
    document.getElementById("display").innerText = "Closed Hi-hat"
  }else if (str === 'S'){
    document.getElementById("display").innerText = "Open Hi-hat"
  }else if (str === 'D'){
    document.getElementById("display").innerText = "Cymbal Crash"
  }else if (str === 'Z'){
    document.getElementById("display").innerText = "Clap"
  }else if (str === 'X'){
    document.getElementById("display").innerText = "Kick"
  }else if (str === 'C'){
    document.getElementById("display").innerText = "Snare" 
  }
}

window.document.onkeyup = function(event) {
  if (event.key === 'q' || event.key === 'Q'){
    document.getElementById('Tom').click();
  }else if (event.key === 'w' || event.key === 'W'){
    document.getElementById('Tom-2').click();
  }else if (event.key === 'e' || event.key === 'E'){
    document.getElementById('Rim').click();
  }else if (event.key === 'a' || event.key === 'A'){
    document.getElementById('ClHhat').click();
  }else if (event.key === 's' || event.key === 'S'){
    document.getElementById('OpHhat').click();
  }else if (event.key === 'd' || event.key === 'D'){
    document.getElementById('Crash').click();
  }else if (event.key === 'z' || event.key === 'Z'){
    document.getElementById('Clap').click();
  }else if (event.key === 'x' || event.key === 'X'){
    document.getElementById('Kick').click();
  }else if (event.key === 'c' || event.key === 'C'){
    document.getElementById('Snare').click();
  }
}
