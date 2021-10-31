# Pomodoro-timer
React App - A timer utility that helps you keep track of working times and break times while using the Pomodoro technique. 

## Overview
### 1. Main Screen
![Alt text](/screenshots/main-screen.png "Main Screen")
The main screen contains buttons to change:
* _focus duration_ - limited to a minimum of 5 minutes and a maximum of 60 minutes
*  _break duration_ - limited to a minimum of 1 minute and a maximum of 15 minutes.

### 2. Focus Session
![Alt text](/screenshots/focus.png "Focus session")
When the user presses _play_, the _focus_ and _break_ time-increment buttons are disabled.

The timer will begin counting down from whatever the user set the _focus duration_ to be. And the loading bar will fill-up based on how much time has elapsed.
* Pressing the pause button will stop the timer
* Pressing the stop button will reset the entire session

When the timer hits zero, an alert sound will play, and the _break_ session will automatically begin.


### 3. Break Session
![Alt text](/screenshots/break.png "Focus session")

The _break_ session timer will start from the time that the user defined prior to the start of the full session. 

Again, a countdown timer and progress bar will display, and when the timer hits zero, a sound will play to alert the user that their break time is up, and the next _focus_ session will begin.

# Technologies

# Technology
### Built with:
* React 
    * Created with [create-react-app](https://github.com/facebook/create-react-app) 
    * Styling: Bootstrap 4, CSS3