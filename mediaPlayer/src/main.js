import {person, sayHello} from './lib';
import * as vltData from '../db/vlt.json';
import * as ttndData from '../db/ttnd.json';

$(document).ready(function(){
  const vltObj = JSON.parse(JSON.stringify(vltData)).default;
  const ttndObj = JSON.parse(JSON.stringify(ttndData)).default;

  document.getElementById("vltPlayList").innerHTML = fillPlayList(vltObj.episodes);
  document.getElementById("ttndPlayList").innerHTML = fillPlayList(ttndObj.episodes);

  $('#vltPlayList a').click(function(){
    let mediaTitle = $(this).text();
    updatePlayerPB(mediaTitle, vltObj);
  });

  $('#ttndPlayList a').click(function(){
    let mediaTitle = $(this).text();
    updatePlayerPB(mediaTitle, ttndObj);
  });
});

function updatePlayerPB(mediaTitle, album){
  let episodes = album.episodes;
  let index = episodes.findIndex(x => x.title === mediaTitle)
  
  let mediaLenght = episodes[index].lenght;
  let mediaLink = episodes[index].link;
  let mediaAuthor = episodes[index].author;
  updateTimePB(mediaLenght);

  document.getElementById('songCurrPosi').innerHTML = '00:00:00';
  document.getElementById('songLength').innerHTML = toHHMMSS(mediaLenght);
  document.getElementById('songInfo').innerHTML = `${mediaTitle} - ${album.author} - ${album.album}`;
}

// https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss/6313008
function toHHMMSS(sec){
  return new Date(1000 * sec).toISOString().substr(11, 8)	
}

function updateTimePB(songLength){								
  let nbPB = 15;							
  let startPB = Math.floor(songLength / nbPB);							
  let currPB = startPB;	
            
  document.getElementById('pb01').innerHTML = '00:00:00';		
  for (let i = 2; i <= 15; i++){																		
    let currPBID = (i < 10) ? `pb0${i}`:`pb${i}`;		
    var timeString = toHHMMSS(currPB); 			
    document.getElementById(currPBID).innerHTML = timeString;		              
    currPB += startPB;						
  }			
}

function fillPlayList(dataObj){
  let htmlText = '';
  for (let i in dataObj){
    htmlText += `<a class="dropdown-item" href="#">${dataObj[i].title}</a>`;
  }
  return htmlText;  
}
