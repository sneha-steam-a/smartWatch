const apiKey = 'd210694187a4537f297f350bc54d1ffe'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
const city = 'nova scotia';
const countryCode = 'Canada';
const apiEndpoint = `${apiUrl}?q=${city},${countryCode}&appid=${apiKey}`;

    async function fetchWeather() {
        try {
            const response = await fetch(apiEndpoint);
            const data = await response.json();
            const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
           
          
            document.getElementById('weather-icon').src = weatherIcon;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
fetchWeather();


function updateDigitalClocks() {
    var currentDate = new Date();
    var hours = currentDate.getHours().toString().padStart(2, '0');
    var minutes = currentDate.getMinutes().toString().padStart(2, '0');
    var timeString = hours + ':' + minutes;

    var digitalClockElement = document.getElementById('digitalClock');
    digitalClockElement.textContent = timeString;
    digitalClockElement.addEventListener('click', function () {
       
        window.location.href = "index.html";
    });

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = days[currentDate.getDay()];
    var digitalClockTopElement = document.getElementById('digitalClockTop');
    digitalClockTopElement.textContent = dayOfWeek + ' ' + timeString;
}

setInterval(updateDigitalClocks, 1000);

updateDigitalClocks();


function showStaticMessages() {
    var overlay = document.querySelector('.overlay');
    var digitalClock = overlay.querySelector('#digitalClock');
    overlay.innerHTML = '';
    overlay.appendChild(digitalClock);
    document.body.style.backgroundColor = "lightblue";


    var messages = [
        "Heyy Happy day!",
        "How are you?",
        "Lets be kind.",
        "Have a great day"
    ];

    messages.forEach(function (message) {
        var messageElement = document.createElement('p');
        messageElement.textContent = message;
        messageElement.style.color = "black";

       
        messageElement.addEventListener('click', function () {
            alert('Clicked on ' + message);
        });

        overlay.appendChild(messageElement);
    });

    overlay.style.backgroundColor = "white"; 
    document.body.style.backgroundColor = "white"; 
    digitalClock.style.color = 'black';

    overlay.classList.add('visible');
    
    document.getElementById('musicPlayer').classList.remove('visible');
    document.getElementById('stopwatch-container').classList.remove('visible');
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
        var digitalClock = overlay.querySelector('#digitalClock');

        overlay.innerHTML = '';

       
        overlay.appendChild(digitalClock);

        var musicPlayer = document.createElement('iframe');
        musicPlayer.src = "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3";
        musicPlayer.width = "220px";
        musicPlayer.height = "180px";
        musicPlayer.frameBorder = "0";
        musicPlayer.allowtransparency = "true";
        musicPlayer.allow = "encrypted-media";
        overlay.appendChild(musicPlayer);
        overlay.classList.add('visible');
        document.getElementById('stopwatch-container').classList.remove('visible');
    });
    
    var clockIcon = document.querySelector('.fa-regular.fa-clock');
    clockIcon.addEventListener('click', function () {
        var overlay = document.querySelector('.overlay');
        var digitalClock = overlay.querySelector('#digitalClock');

        overlay.innerHTML = '';

        overlay.appendChild(digitalClock);

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


// const apiKey = 'd210694187a4537f297f350bc54d1ffe';




