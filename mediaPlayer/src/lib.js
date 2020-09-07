export const person = {
  name: 'kim',
  location: 'montreal',
  age: 35
}
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

  document.getElementById('songCurrPosi').innerHTML = '00:00:00';
  document.getElementById('songLength').innerHTML = toHHMMSS(mediaLenght);
  document.getElementById('songInfo').innerHTML = `${mediaTitle} - ${album.author} - ${album.album}`;

  updateVideo(mediaLink);
}
function updateVideo(videoLink){
  $(".video iframe").remove();
  $('<iframe frameborder="0" allowfullscreen></iframe>')
    .attr("src", videoLink)
    .appendTo(".video");
}

// https://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss/6313008
function toHHMMSS(sec){
  return new Date(1000 * sec).toISOString().substr(11, 8)	
}

function updateTimePB(songLength){								
  let nbPB = 15;							
  let startPB = Math.floor(songLength / nbPB);							
  let currPB = startPB;	
            
  document.getElementById('progress-time01').innerHTML = '00:00:00';		
  for (let i = 2; i <= 15; i++){																		
    let currPBID = (i < 10) ? `progress-time0${i}`:`progress-time${i}`;		
    var timeString = toHHMMSS(currPB); 			
    document.getElementById(currPBID).innerHTML = timeString;		              
    currPB += startPB;						
  }			
}

