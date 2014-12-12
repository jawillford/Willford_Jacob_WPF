/**
 * Conditionals_Personal - Created by jacobawillford on 12/11/14.
 */

//Asking for the name of favorite anime
var favorite = prompt("What is your favorite anime?");
//if favorite is equal to nothing
if (favorite === ""){
//asking the question again if left blank
    favorite = prompt("Please do not leave this blank.\nWhat is your favorite anime?");
}
//asking amount of episodes
var episodes = prompt("How many episodes long is " + favorite + "?");
//asking length of each episode
var length = prompt("How long is each episode in minutes?");
//setting 60 minutes as an hour
var hour = 60;
//time is equal to episodes times length divided by hour
var time = episodes * length / hour;
//if time is greater than or equal to 0 and time is less than or equal to 10
if (time >= 0 && time <= 10){
//then alert
    alert(favorite + " must not be a very good show.\nThe amount of time you have watched " + favorite + " is " + time + " hours!");
//else if time is greater than or equal to 11 and time is not equal to 42 and time is less than or equal to 50
}else if (time >= 11 && time != 42 && time <= 50){
//then alert
    alert(favorite + " must be a good show!\nThe amount of time you have watched " + favorite + " is " + time + " hours!");
//else if time is greater than or equal to 51 and time is not equal to 69 and time is less than or equal to 100
}else if (time >= 51 && time != 69 && time <= 100){
//then alert
    alert(favorite + " must be a very addicting show!\nThe amount of time you have watched " + favorite + " is " + time + " hours!");
//else if time is greater than or equal to 101 and time is less than or equal to 250
}else if (time >= 101 && time <= 250){
//then alert
    alert(favorite + "How can you possibly have watched " + favorite + " for " + time + " hours?!\nThe amount of time you have watched " + favorite + " is " + time + " hours!");
//else if time is greater than or equal to 251 and time is less than or equal to 500
}else if (time >= 251 && time <= 500){
//then alert
    alert("You need help.\nThe amount of time you have watched " + favorite + " is " + time + " hours!");
//else if time is greater than 500 and time is not equal to 666
}else if (time > 500 && time != 666){
//then alert
    alert("You must be the number 1 fan of " + favorite + "!\nThe amount of time you have watched " + favorite + " is " + time + " hours!");
//else
}else{
//then alert
    alert("Congratulations, you are probably laughing right now.\nThe amount of time you have watched " + favorite + " is " + time + " hours!")
}