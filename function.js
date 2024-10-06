function tooglebtn() {
    let menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
  function disappear() {
    let openingAlert = document.getElementById('opening-alert');
    if (openingAlert.style.display === 'block') {
        openingAlert.style.display = 'none';
    }else{
        openingAlert.style.display = 'none';
    }
}
function dis(value){
  var disDisplay = document.getElementById('dis')
  var disDisplayCurrent = disDisplay.style.display
  if (disDisplay.style.display == disDisplayCurrent) {
    disDisplay.style.display = 'none';
  }else{
    disDisplay.style.display = 'none';
  }
  console.log('done',value)
}

function cal() {
  switch (direction) { 
    case 'up':
      if(currentBottom <= -315){
        ball.style.top = currentTop - 50 + 'px';
      // }else if(currentBottom == 315){
      //   ball.style.top = currentTop - 50 + 'px';
      }else{
        alert("err")
      }
      break;
    case 'down':
      if(currentTop <= 315){
        ball.style.top = currentTop + 50 + 'px';
      }else{
        alert("e don do")
      }
      break;
    case 'left':
      // if(currentLeft <= 315){
        ball.style.left = currentLeft - 50 +'px';
      // }else{
      //   alert("e don do")
      // }
      break;
    case 'right':
      if(currentLeft <= 315){
        ball.style.left = currentLeft + 50 + 'px';
      }else{
        alert("e don do")
      }
      
      break;
    default:
      break;
  }
}

test = [
  {
    id: 1,
    value: '3month',
    name: '20% 3Months'
  },
  {
    id: 2,
    value: '6month',
    name: '40% 6Months'
  },
  {
    id: 3,
    value: '12month',
    name: '80% 12Months'
  }
]