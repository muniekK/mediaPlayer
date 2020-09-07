var player = document.querySelector("video");

$('#progress01').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar01");;
  clearPBars(2);
});

$('#progress02').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar02");
  fillPBars(1);
  clearPBars(3);
});

$('#progress03').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar03");
  fillPBars(2);
  clearPBars(4);
});
$('#progress04').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar04");
  fillPBars(3);
  clearPBars(5);
});
$('#progress05').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar05");
  fillPBars(4);
  clearPBars(6);
});
$('#progress06').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar06");
  fillPBars(5);
  clearPBars(7);
});
$('#progress07').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar07");
  fillPBars(6);
  clearPBars(8);
});
$('#progress08').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar08");
  fillPBars(7);
  clearPBars(9);
});
$('#progress09').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar09");
  fillPBars(8);
  clearPBars(10);
});
$('#progress10').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar10");
  fillPBars(9);
  clearPBars(11);
});
$('#progress11').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar11");
  fillPBars(10);
  clearPBars(12);
});
$('#progress12').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar12");
  fillPBars(11);
  clearPBars(13);
});
$('#progress13').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar13");
  fillPBars(12);
  clearPBars(14);
});
$('#progress14').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar14");
  fillPBars(13);
  clearPBars(15);
});
$('#progress15').click(function(e) {
  let currPosi = e.offsetX / this.offsetWidth * 100;
  updateProgressBar(currPosi, "progress-bar15");
  fillPBars(14);
});

function fillPBars(maxPB){
  for (let i = 1; i <= maxPB; i++){
    let currPB = ''; 
    (i<10) ? currPB = `progress-bar0${i}`: currPB = `progress-bar${i}`;
    updateProgressBar(100, currPB);
  }
}
export function clearPBars(minPB){
  for (let i = minPB; i <= 15; i++){
    let currPB = 'progress-bar15'; 
    (i<10) ? currPB = `progress-bar0${i}`: currPB = `progress-bar${i}`;
    console.log(currPB);
    updateProgressBar(0, currPB);
  }
}
function updateProgressBar(value, progressBar){
  var pb = document.getElementById(progressBar);
  pb.style.width = `${value}%`;
}
// function getEventTarget(e) {
//   e = e || window.event;
//   return e.target || e.srcElement; 
// }

// var ul = document.getElementById('controls');
// ul.onclick = function(event) {
//   var target = getEventTarget(event);
//   console.log(target);
// };