import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const KEY = "videoplayer-current-time";
const newTime = localStorage.getItem(KEY);
player.on('timeupdate', throttle(onPlay, 1000));
 
if (newTime) {
    player.setCurrentTime(newTime);
 }

function onPlay(data) {
    const newTimeData = JSON.stringify(data.seconds);
     localStorage.setItem(KEY, newTimeData); 
}
