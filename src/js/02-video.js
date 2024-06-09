import Player from '@vimeo/player';
import throttle from "lodash.throttle";

//identificare element video
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

//identificare secunde din derulare si logarea in localStorage + throttle 1 sec
const onPlay = throttle(function (data) {
    console.log(data);//de verificare
    const currentTimeVideo = data.seconds;
    console.log(currentTimeVideo); //de verificare
    localStorage.setItem("videoplayer-current-time", currentTimeVideo);
},1000);
player.on('timeupdate', onPlay);

//preluarea valoare secunde din localStorage 
const newStartTime = localStorage.getItem("videoplayer-current-time");
console.log(newStartTime); // de verificare

//reluarea redarii video de la secundele ramase
player.setCurrentTime(newStartTime);
