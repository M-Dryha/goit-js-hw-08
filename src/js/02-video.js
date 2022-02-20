

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const KEY = "videoplayer-current-time";
const newTime = localStorage.getItem(KEY);
player.on('timeupdate', onPlay);
 
if (newTime) {
    player.setCurrentTime(newTime);
 }

function onPlay(data) {
    const newTimeData = JSON.stringify(data.seconds);
     localStorage.setItem(KEY, newTimeData); 
}
