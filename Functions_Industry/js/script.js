/**
 * Functions_Industry - Created by jacobawillford on 12/16/14.
 */
var limit = Number(prompt("How many people can your server handle on your game at once?"));
var people = Number(prompt("How many people are currently on your game?"));
var maxRate = Number(prompt("How many people can your server handle accessing your game per second?"));
var rateOfPeople = Number(prompt("How many more people are accessing your game per second?"));
if(people >= limit || rateOfPeople >= maxRate){
    alert("You should add a que to access your game in order to prevent your servers from crashing.");
}
while(people < limit){
    console.log(people + " people are currently on your game.");
    people = people + rateOfPeople;
}

if(people >= limit)console.log("You should add a que to access your game in order to prevent your servers from crashing.");
