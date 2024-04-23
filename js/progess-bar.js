function progressbar() {
    var elem = document.getElementById("progress-bar");
    var width = 0;
    setInterval(frame, 200);
    function frame() {
      if (width >= 100) {
        console.log(width)
        setTimeout(() => { reset(); }, 2000);
      } else {
        width++;
        console.log(width)
        elem.style.width = width + "%";
      }
    }
    function reset(){
        width = 0;
        elem.style.width = width + "%";
    }
}

