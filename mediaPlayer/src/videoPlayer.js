var YOUTUBE_PLAYER,
  YOUTUBE_PLAYER_EL = "video-placeholder", 
  START_TIME = "1:00",
  END_TIME = "1:20",
  PLAY_EL = "#play",
  PAUSE_EL = "#pause",
  PROGRESS_BAR_EL = "#progress-bar",
  CURRENT_TIME_EL = "#current-time",
  DURATION_EL = "#duration";


function onYouTubeIframeAPIReady() {
  YOUTUBE_PLAYER = new YT.Player(YOUTUBE_PLAYER_EL, {
	width: 600,
	height: 400,
	videoId: 'Xa0Q0J5tOP0',
	playerVars: {
	  controls: 0, // disable video controls on mouse over
	  disablekb: 1, // disable keyboard controls
	  start: minutesToSeconds(START_TIME),
	  end: minutesToSeconds(END_TIME),
	},
	events: {
	  onReady: () => initialize(START_TIME, END_TIME, YOUTUBE_PLAYER, PLAY_EL, PAUSE_EL, PROGRESS_BAR_EL, CURRENT_TIME_EL, DURATION_EL)
	}
  });
}

function initialize(videoStartTime, videoEndTime, playerObj, playElId, pauseElId, progressBarElId, currentTimeElId, durationElId) {
  $(playElId).on('click', () => { // Set play button click handler
	playerObj.getPlayerState() === 0 // a state of 0 means 'ended'
	  ? playerObj.seekTo(minutesToSeconds(videoStartTime)) 
	  : null;
	playerObj.playVideo();
  });

  $(pauseElId).on('click', () => playerObj.pauseVideo()); // Set pause button click handler

  $(progressBarElId) // Set min/max values for progress bar & set mouseup and touchend handlers
	.attr('min', minutesToSeconds(videoStartTime))
	.attr('max', minutesToSeconds(videoEndTime))
	.on('mouseup touchend', e => playerObj.seekTo(e.target.value));

  playerObj.seekTo(minutesToSeconds(videoStartTime)); // Sets the progress bar to correct start time
  doUpdate(currentTimeElId, durationElId, progressBarElId, playerObj, videoEndTime); // Updates progress bar and timestamp

  let time_update_interval = setInterval(() => { // Creates interval for updating progress bar and timestamp
	doUpdate(currentTimeElId, durationElId, progressBarElId, playerObj, videoEndTime);
  }, 1000);
}


function doUpdate(currentTimeElId, durationElId, progressBarElId, playerObj, videoEndTime) {

  updateTimerDisplay(currentTimeElId, durationElId, playerObj, videoEndTime);
  updateProgressBar(progressBarElId, playerObj);
}


function updateTimerDisplay(currentTimeElId, durationElId, playerObj, videoEndTime) {
  $(currentTimeElId).text(formatTime(playerObj.getCurrentTime()));
  $(durationElId).text(formatTime(minutesToSeconds(videoEndTime)));
}


function formatTime(time) {
  
  time = Math.round(time);
  let minutes = Math.floor(time / 60),
	seconds = time - minutes * 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return minutes + ":" + seconds;
}


function updateProgressBar(progressBarElId, playerObj) {
  $(progressBarElId).val(playerObj.getCurrentTime());
}


function minutesToSeconds(mins) {

  let p = mins.split(":");
  return Number((Number(p[0]) * 60 + Number(p[1])).toFixed(3));
}
 