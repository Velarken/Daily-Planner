// Variables
let timerCounter = 0;
let timeRemaining = 15; // set to 1500 (25 minutes) by default
let walkCount = 0;
let yogaCount = 0;
let choreCount= 0;

// Selectors
const timerDisplay = document.querySelector("#countdownTimer");
const timerCountDisplay = document.querySelector("#sessionDisplay");
const startButton = document.querySelector("#startTimer");
const pauseButton = document.querySelector("#pauseTimer");
const stopButton = document.querySelector("#stopTimer");

const moodHappy = document.querySelector("#happy");
const moodIndifferent = document.querySelector("#indifferent");
const moodSad = document.querySelector("#sad");
const moodAngry = document.querySelector("#angry");
const moodFearful = document.querySelector("#fear");

const dailyWalk = document.querySelector(".walk");
const dailyYoga = document.querySelector(".yoga");
const dailyChores = document.querySelector(".chores");

const choreIncDisplay = document.querySelector('#choreIncDisplay');
const choreIncrementButton = document.querySelector("#choreInc");
const choreDecrementButton = document.querySelector('#choreDec');

const yogaIncDisplay = document.querySelector('#yogaIncDisplay');
const yogaIncrementButton = document.querySelector("#yogaInc");
const yogaDecrementButton = document.querySelector('#yogaDec');

const walkIncDisplay = document.querySelector('#walkIncDisplay');
const walkIncrementButton = document.querySelector("#walkInc");
const walkDecrementButton = document.querySelector('#walkDec');

// Event Handlers
startButton.addEventListener('click', () => startTimer(timeRemaining));
pauseButton.addEventListener('click', () => pauseTimer());
stopButton.addEventListener('click', () => stopTimer());

moodHappy.addEventListener('click', () => changeBackground(moodHappy));
moodIndifferent.addEventListener('click', () => changeBackground(moodIndifferent));
moodSad.addEventListener('click', () => changeBackground(moodSad));
moodAngry.addEventListener('click', () => changeBackground(moodAngry));
moodFearful.addEventListener('click', () => changeBackground(moodFearful));

choreIncrementButton.addEventListener('click', () => increment('+', choreIncDisplay));
choreDecrementButton.addEventListener('click', () => increment('-', choreIncDisplay));

walkIncrementButton.addEventListener('click', () => increment('+', walkIncDisplay));
walkDecrementButton.addEventListener('click', () => increment('-', walkIncDisplay));

yogaIncrementButton.addEventListener('click', () => increment('+', yogaIncDisplay));
yogaDecrementButton.addEventListener('click', () => increment('-', yogaIncDisplay));
// Functions
function log(clicked) {
    console.log(`Clicked ${clicked}`);
};

let intervalID = null;
function startTimer(duration) {
    let timer = duration, minutes, seconds;
    intervalID = setInterval(function () {
        minutes = parseInt(timer /60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay.textContent =  minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            timeRemaining--
        } else if (timer == 0) {
            timerDisplay.textContent = "Time for a break!"
            timerCounter++;
            timerCountDisplay.textContent = timerCounter;
            timeRemaining=1500;
            clearInterval(intervalID);
        }
        
    }, 1000)
};

function pauseTimer() {
    console.log(timeRemaining);
}

function stopTimer() {
    clearInterval(intervalID);
    timerDisplay.textContent = "25:00";
}

function increment(sign, category) {
    if (sign == '+') {
        if (category == choreIncDisplay) {
            choreCount++;
            category.textContent = choreCount;
        }else if (category == walkIncDisplay) {
            walkCount++;
            category.textContent = walkCount;
        }else if (category == yogaIncDisplay) {
            yogaCount++;
            category.textContent = yogaCount;
        }
    } else if (sign == '-') {
        if (category == choreIncDisplay) {
            choreCount--;
            category.textContent = choreCount;
        }else if (category == walkIncDisplay) {
            walkCount--;
            category.textContent = walkCount;
        }else if (category == yogaIncDisplay) {
            yogaCount--;
            category.textContent = yogaCount;
        }
    }
}

function changeBackground(button) {
    if (button.style.backgroundColor != "rgb(179, 182, 182)") {
        button.style.backgroundColor = "rgb(179, 182, 182)";
    }else {
        button.style.backgroundColor= "rgb(0,15,19)";
    }
}

// TO DO LIST
  /* Add all logs to the firebase database, saved per user */
    // Change startTimer(duration) to timer(function,duration) where function is
        // start 
            // if function == start, begin timer from duration
        // stop 
            // if function == stop, remove current time, reset to 25:00
        // pause 
            // if function == pause, stop timer and update display to show time remaining
            // store timer duration in timeRemaining variable

    // Countdown Timer Display
        // After 5 minute break, reset display to 25:00 minutes

    // Start Timer
        // Begin countdown from current remaining time after a pause

    // Pause Timer
        // See if there is a built in way to pause
            // IF NOT, get time remaining when user clicked button
                // Store in a variable
                // Display value of the variable
                // Start a new countdown with the time remaining

    // Chosen Mood Button
        // Change Button Color when selected
        // Make larger when hovered
        // Log Chosen Mood

    // Mood Notes
        // Display empty block with a + sign
            // When clicked, accept user text
        // Display input text
        // Move + block under input text and accept another input
        // Ability to scroll if user inputs exceed view space
        // Log all input texts

    // To-do List
        // Display + in an empty block
            // When clicked, allow user input
            // Display user input
            // Move + block below user input
            // Allow scroll if inputs exceed view area

    // Consider creating a popup for when it's break time instead of overriding
    // the timer container. Can use the glowy effect with box-shadow 
