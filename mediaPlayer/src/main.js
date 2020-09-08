import {fillPlayList, updatePlayerPB} from './lib';
import * as controls from './controls';
import * as vltData from '../db/vlt.json';
import * as ttndData from '../db/ttnd.json';
import {loadVideo} from './controls'

$(document).ready(function(){
  const vltObj = JSON.parse(JSON.stringify(vltData)).default;
  const ttndObj = JSON.parse(JSON.stringify(ttndData)).default;
  let currEpisode = vltObj.episodes[0];
  $.getScript("https://www.youtube.com/iframe_api", function() {
    //load default video
    
    loadVideo(currEpisode.link);
    console.log('hello');
      
  });
    
  updatePlayerPB(currEpisode.title, vltObj);

  $('#vltPlayList a').click(function(){ 
    let mediaTitle = $(this).text();
    //onYouTubeIframeAPIReady(currEpisode.link);
    updatePlayerPB(mediaTitle, vltObj);
    controls.clearPBars(1);
  });

  $('#ttndPlayList a').click(function(){
    
    // let mediaTitle = $(this).text();
    // updatePlayerPB(mediaTitle, ttndObj);
    // controls.clearPBars(1);
  });
});


