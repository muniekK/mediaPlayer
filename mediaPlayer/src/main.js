import {fillPlayList, updatePlayerPB} from './lib';
import * as controls from './controls';
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
    controls.clearPBars(1);
  });

  $('#ttndPlayList a').click(function(){
    let mediaTitle = $(this).text();
    updatePlayerPB(mediaTitle, ttndObj);
    controls.clearPBars(1);
  });
});
