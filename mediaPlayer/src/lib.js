import {player} from './controls'

export function fillPlayList(dataObj){
  let htmlText = '';
  for (let i in dataObj){
    htmlText += `<a class="dropdown-item" href="#">${dataObj[i].title}</a>`;
  }
  return htmlText;  
}
export function updatePlayerPB(mediaTitle, album){
  let episodes = album.episodes;
  let index = episodes.findIndex(x => x.title === mediaTitle)
  
  let mediaLenght = episodes[index].lenght;
  let mediaLink = episodes[index].link;
  let mediaAuthor = episodes[index].author;
  updateTimePB(mediaLenght);

  document.getElementById('duration').innerHTML = toHHMMSS(mediaLenght);
  document.getElementById('songInfo').innerHTML = `${mediaTitle} - ${album.author} - ${album.album}`;

  player.loadVideoById(mediaLink);
}

function toHHMMSS(sec){
  return new Date(1000 * sec).toISOString().substr(11, 8)	
}

function updateTimePB(songLength){	
  let onePBTime = songLength / 15;			
  for (let i = 1; i <= 15; i++){																		
    let currPBID = (i < 10) ? `progress-time0${i}`:`progress-time${i}`;		
    var timeString = toHHMMSS(onePBTime*(i-1)); 	
    document.getElementById(currPBID).innerHTML = timeString;		 
  }			
}

