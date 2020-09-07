
var ul = document.getElementById('playerPB');
ul.onclick = function(event) {

  let target = getEventTarget(event);
  let currPID = target.id; 
  let currPNB = currPID.slice(-2);

  //order is important
  let currPBID = `progress-bar${currPNB}`; 
  (currPNB < 10) ? currPNB = currPNB.slice(-1): '';
  
  let currPosi = event.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, currPBID);
  
  fillPBars(parseInt(currPNB)-1);
  clearPBars(parseInt(currPNB)+1);
};

function getEventTarget(e) {
  e = e || window.event;
  return e.target || e.srcElement; 
}

function fillPBars(maxPBToFil){
  for (let i = 1; i <= maxPBToFil; i++){
    let currPB = ''; 
    (i<10) ? currPB = `progress-bar0${i}`: currPB = `progress-bar${i}`;
    updateProgressBar(100, currPB);
  }
}
export function clearPBars(minPBToClear){
  for (let i = minPBToClear; i <= 15; i++){
    let currPB = ''; 
    (i<10) ? currPB = `progress-bar0${i}`: currPB = `progress-bar${i}`;
    updateProgressBar(0, currPB);
  }
}

function updateProgressBar(value, progressBar){
  var pb = document.getElementById(progressBar);
  pb.style.width = `${value}%`;
}


