
var ul = document.getElementById('playerPB');

export var player,
    time_update_interval = 0;

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

  
  // Calculate the new time for the video.
  // new time in seconds = total duration in seconds * ( value of range input / 100 )
  let onePBTime = player.getDuration()/15;//because we divide progress bar by 15
  var newTime = onePBTime * (currPNB - 1) + currPosi / 100 * onePBTime;
  // Skip video to new time.
  player.seekTo(newTime);
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

// youtube player

//    this FAILS: error => YT is not a constructor
// player = new YT.Player('video-placeholder', {
//       width: 600,
//       height: 400,
//       videoId: 'MnNrETtyaTI',
//       playerVars: {
//           color: 'white',
//           //playlist: 'taJ60kskkns,FG0fTKAqZ5g'
//       },
//       events: {
//           //onReady: initialize
//       }
//   });
// }
//https://dev.to/dance2die/youtube-iframe-api-yt-player-is-not-a-constructor-pa6
export function loadVideo(videoID) {
  window.YT.ready(function() {
    player = new window.YT.Player("video-placeholder", {
      height: "600",
      width: "400",
      videoId: videoID,
      playerVars: {
        color: 'white'
      },
      events: {
        onReady: initialize
      }
    });
  });
}

function initialize(){

    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();

    // Clear any old interval.
    clearInterval(time_update_interval);

    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
        updateTimerDisplay();
        //updateProgressBar();
    }, 1000);


    $('#volume-input').val(Math.round(player.getVolume()));
}


// This function is called by initialize()
function updateTimerDisplay(){
    // Update current time text display.
    $('#current-time').text(formatTime(player.getCurrentTime() ));
    $('#duration').text(formatTime( player.getDuration() ));
}


// Playback
$('#play').on('click', function () {
    player.playVideo();
});


$('#pause').on('click', function () {
    player.pauseVideo();
});

function formatTime(sec){
  return new Date(1000 * sec).toISOString().substr(11, 8)	
}