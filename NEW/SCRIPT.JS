 var main = document.querySelector("#main")
  var nilu = document.querySelector("nilu")
  var h1 = document.querySelector("h1")

  main.addEventListener("mousemove", function(dets){
    nilu.style.left = dets.x+"px"
    nilu.style.top = dets.y+"px"
  })
