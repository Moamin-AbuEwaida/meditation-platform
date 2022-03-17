//select audio player buttons
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');

// select audio elements
const audio = document.querySelector('.audio audio');

//buttons event listener
play.addEventListener('click', () =>{
    audio.play();
    update();
});

pause.addEventListener('click', () =>{
    audio.pause();
});


// select seasons and videos
const seasons = document.querySelectorAll('.season');
const video = document.querySelector('.video video')

seasons.forEach((season) =>{
    season.addEventListener("click", () =>{
        video.src = season.getAttribute("video-src");
    });
});

// select durations buttons
const durations = document.querySelectorAll('.duration');

let audioDuration = 120; // default audio duration of 2 minutes

durations.forEach(duration =>{
    duration.addEventListener("click", () =>{
        audioDuration = duration.getAttribute("audio-duration")
    });
});

// select rect elements
const path = document.querySelector('.rect');
const remainingTimeEl= document.querySelector('.audio-remaining-time');

//getting path total length for comparison
const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength;

//function to update the stroke dash offset according the audio timing
function update(){
    // stop audio after the needed time
    if (audio.currentTime >= audioDuration){
        audio.pause(); // pausing the audio
        audio.currentTime = 0 ; // stopping the audio
    }
    // portion of the played audio
    let portionPlayed= audio.currentTime / audioDuration;

    path.style.strokeDashoffset =  -portionPlayed * pathLength;

    // calculating the remaining audio timing 
    let remainingTimeInSec = audioDuration - audio.currentTime;
    renderRemainingTime(remainingTimeInSec);

    if(!audio.paused){
        requestAnimationFrame(update);
    }
}

update();

// rendering remaining time
function renderRemainingTime(timeInSec) {
    let min = Math.floor(timeInSec / 60);
    let sec = Math.floor(timeInSec % 60);

    min = min< 10 ? `0${min}` : min;
    sec = sec< 10 ? `0${sec}` : sec;

    remainingTimeEl.innerHTML = `${min}: ${sec}`
};