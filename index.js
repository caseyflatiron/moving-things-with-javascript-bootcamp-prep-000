const app = "I don't do much."

var dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
  console.log(`${leftNumbers}`)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

$(document).ready(function(){

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})

});


