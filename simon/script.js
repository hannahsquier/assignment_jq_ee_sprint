var queue = []

getRandomColor = function() {
  r = Math.random();

  if(r < 0.25) {
    queue.push($("#red"))
  } else if( r < 0.5 ) {
    queue.push($("#green"))
  } else if( r < 0.75 ) {
    queue.push($("#blue"))
  } else {
   queue.push($("#yellow"))
  }
}

flashColors = function() {
  for(color in queue) {
    queue[color].addClass("flash")
    setTimeout(1000)
    queue[color].removeClass("flash")
  }
}

getRandomColor()
getRandomColor()
flashColors()