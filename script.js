function updateDigitalClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    var digitalClock = document.getElementById('digitalClock');
    digitalClock.textContent = hours + ':' + minutes + ':' + seconds;

    setTimeout(updateDigitalClock, 1000); 
}

function showStaticMessages() {
    var overlay = document.querySelector('.overlay');
    overlay.innerHTML = '';

    var messages = [
        "Sneha",
        "John",
        "Jackson",
        "juliet",
        "Ram"
    ];
    
    messages.forEach(function (message) {
        var messageElement = document.createElement('p');
        messageElement.textContent = message;
        overlay.appendChild(messageElement);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    updateDigitalClock();

    var smsIcon = document.querySelector('.fas.fa-sms');
    smsIcon.addEventListener('click', showStaticMessages);
});

var stopwatchRunning = false;
var stopwatchInterval;
var stopwatchMilliseconds = 0;

function updateStopwatch() {
    var stopwatchElement = document.getElementById('stopwatch');
    var minutes = Math.floor(stopwatchMilliseconds / (60 * 1000)).toString().padStart(2, '0');
    var seconds = Math.floor((stopwatchMilliseconds % (60 * 1000)) / 1000).toString().padStart(2, '0');
    var milliseconds = (stopwatchMilliseconds % 1000).toString().padStart(3, '0');
    stopwatchElement.textContent = minutes + ':' + seconds + '.' + milliseconds;
}

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchInterval = setInterval(function () {
            stopwatchMilliseconds += 1; 
            updateStopwatch();
        }, 1); 
        stopwatchRunning = true;
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
    stopwatchMilliseconds = 0;
    updateStopwatch();
}


document.addEventListener('DOMContentLoaded', function () {
    
    var musicIcon = document.querySelector('.fas.fa-music');
    musicIcon.addEventListener('click', function () {
        var overlay = document.querySelector('.overlay');
        overlay.innerHTML = '';
        var musicPlayer = document.createElement('iframe');
        musicPlayer.src = "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3";
        musicPlayer.width = "100%";
        musicPlayer.height = "100%";
        musicPlayer.frameBorder = "0";
        musicPlayer.allowtransparency = "true";
        musicPlayer.allow = "encrypted-media";
        overlay.appendChild(musicPlayer);
    });
   
    var clockIcon = document.querySelector('.fa-regular.fa-clock');
    clockIcon.addEventListener('click', function () {
        var overlay = document.querySelector('.overlay');
        overlay.innerHTML = '';

        var stopwatchContainer = document.createElement('div');
        stopwatchContainer.id = 'stopwatch-container';

        var stopwatchElement = document.createElement('span');
        stopwatchElement.id = 'stopwatch';
        stopwatchElement.textContent = '00:00.000';

        var controlsContainer = document.createElement('div');
        controlsContainer.classList.add('icon-container');

        var playIcon = document.createElement('i');
        playIcon.classList.add('fas', 'fa-play', 'white-icon');
        playIcon.addEventListener('click', startStopwatch);

        var pauseIcon = document.createElement('i');
        pauseIcon.classList.add('fas', 'fa-pause', 'white-icon');
        pauseIcon.addEventListener('click', pauseStopwatch);

        var stopIcon = document.createElement('i');
        stopIcon.classList.add('fas', 'fa-stop', 'white-icon');
        stopIcon.addEventListener('click', stopStopwatch);

        controlsContainer.appendChild(playIcon);
        controlsContainer.appendChild(pauseIcon);
        controlsContainer.appendChild(stopIcon);

        stopwatchContainer.appendChild(stopwatchElement);
        stopwatchContainer.appendChild(controlsContainer);

        overlay.appendChild(stopwatchContainer);
    });
});


