/**
 * Conditionals_Worksheet - Created by jacobawillford on 12/10/14.
 */

var mPG = 30;
var fuel = .90;
var tank = 12;
var trip = 200;
var gallons = fuel * tank;
var milesLeft = gallons * mPG;

if (milesLeft >= trip){
    console.log("Yes, you can make it without stopping for gas!")
}else{
    console.log("You only have " + gallons + " gallons of gas in your tank, better get gas now while you can!")
}

var username = prompt("Enter your username.");
var password = prompt("Enter your password");
var cUsername = "username";
var cPassword = "password";

if (username == cUsername && password == cPassword){
    alert("Welcome, " + username + "!");
}else if(username != cUsername){
    alert("User not found. Please try again.");
}else{
    alert("Password does not match our records.");
}

//I did the coding this way, because I figured the time should be known by the program.
//Therefore,I believe it is irrelevant to ask for the customers age if the time matches the discount duration.
var time = 1800;

if(time >= 1500 && time <= 1700){
    alert("The ticket price is $7.00");
}else{
    var age = prompt("How old are you?");
}

if (age <= 10 || age >= 55){
    alert("The ticket price is $7.00")
}else{
    alert("The ticket price is $12.00")
}


