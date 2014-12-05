/**
 * Expressions_Wacky - Created by jacobawillford on 12/4/14.
 */

var episodesWatched = prompt("How many episodes of your favorite show have you watched?");
var episodeLength = prompt("How many minutes long is each episode?");
var totalLengthMinutes = episodesWatched * episodeLength;
var totalLengthHours = totalLengthMinutes / 60;
console.log("You have watched " + totalLengthHours + " hours of your favorite show.");

if (totalLengthHours < 1 ){
    console.log("Are you sure this is your favorite show?");
}
if (totalLengthHours > 8 ){
    console.log("You could have read a short novel.");
}
if (totalLengthHours > 20 ){
    console.log("You could be on your way to learning a new language.");
}
if (totalLengthHours > 70 ){
    console.log("Do you even have friends?");
}
if (totalLengthHours > 200 ){
    console.log("You need help...");
}