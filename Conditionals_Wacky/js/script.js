/**
 * Conditionals_Wacky - Created by jacobawillford on 12/11/14.
 */

var supersaiyan = 50000;
var supersaiyan2 = 100000;
var supersaiyan3 = 500000;

var answer = prompt("Are you a Saiyan?\n Answer 'yes' or 'no'.");
var answer1 = prompt("Do you want to be a Super Saiyan?\n Answer 'yes' or 'no'.");
if (answer != "yes" && answer1 == "yes"){
    alert("Too bad. You cannot be a Super Saiyan.");
}else{
if (answer1 == ""){
    prompt("You must have made a mistake.\nDo you want to be a Super Saiyan?\n Answer 'yes' or 'no'.")
}else if(answer1 == "no"){
    alert("Who wouldn't want to be a Super Saiyan?!\n You sicken me...")
}
var level = prompt("What level of Super Saiyan do you want to be?\n Answer '1', '2', or '3'.");
var powerlevel = prompt("What is your current power level?");
if (level == ""){
    prompt("You must have made a mistake.\nWhat level of Super Saiyan do you want to be?\n Answer '1', '2', or '3'.");
}else if (level == "1"){
    var powerNeeded = supersaiyan - powerlevel;
    var wantedLevel = "Super Saiyan";
}else if (level == "2"){
    var powerNeeded = supersaiyan2 - powerlevel;
    var wantedLevel = "Super Saiyan 3";
}else{
    var powerNeeded = supersaiyan3 - powerlevel;
    var wantedLevel = "Super Saiyan 3";
}
alert("In order for you to become " + wantedLevel + " you need to gain " + powerNeeded + " onto your " + powerlevel + " current power level.");
}