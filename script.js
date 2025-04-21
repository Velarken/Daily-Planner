// Variables
let timerCounter = 0;
let timeRemaining = 1500;

// Selectors
const timerDisplay = document.querySelector("#countdownTimer");
const timerCountDisplay = document.querySelector("#sessionDisplay");
const startButton = document.querySelector("#startTimer");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");

const moodHappy = document.querySelector(".happy");
const moodIndifferent = document.querySelector(".indifferent");
const moodSad = document.querySelector(".sad");
const moodAngry = document.querySelector(".angry");
const moodFearful = document.querySelector(".fear");

const dailyWalk = document.querySelector(".walk");
const dailyYoga = document.querySelector(".yoga");
const dailyChores = document.querySelector(".chores");

// Event Handlers
startButton.addEventListener('click', () => startTimer(timeRemaining)); // Set to 1500 when done testing
pauseButton.addEventListener('click', () => log('Pause Timer Button'));
stopButton.addEventListener('click', () => log('Stop Timer Button'));

moodHappy.addEventListener('click', () => log('Happy Face Button'));
moodIndifferent.addEventListener('click', () => log('Indifferent Face Button'));
moodSad.addEventListener('click', () => log('Sad Face Button'));
moodAngry.addEventListener('click', () => log('Angry Face Button'));
moodFearful.addEventListener('click', () => log('Fear Face Button '));

// Functions
function log(clicked) {
    console.log(`Clicked ${clicked}`);
};

function startTimer(duration) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer /60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        timerDisplay.textContent =  minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        } else if (timer == 0) {
            timerDisplay.textContent = "Time for a break!"
            timerCounter++;
            timerCountDisplay.textContent = timerCounter;
        }
    }, 1000)
};

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

    // Stop Timer
        // Reset timer to 25:00 minutes

    // Session Counter
        // When timer reaches 0:00, add 1 to counter
        // Log Session Counter

    // Chosen Mood Button
        // Change Button Color 
        // Log Chosen Mood

    // Mood Notes
        // Display empty block with a + sign
            // When clicked, accept user text
        // Display input text
        // Move + block under input text and accept another input
        // Ability to scroll if user inputs exceed view space
        // Log all input texts
    
    // Daily Habits Buttons
        // If + is hit, add 1 to counter
        // If - is hit, subtract 1 from counter
        // Log counter totals

    // To-do List
        // Display + in an empty block
            // When clicked, allow user input
            // Display user input
            // Move + block below user input
            // Allow scroll if inputs exceed view area
