/**
 * Conditionals_Industry - Created by jacobawillford on 12/11/14.
 */
var answer = prompt("Would you like to take a test to improve our company?\nPlease answer 'yes' or 'no'.");
if (answer == ""){
    answer = prompt("Please do not leave this blank.\nWould you like to take a test to improve our company?\nPlease answer 'yes' or 'no'.")
}else if (answer == "no"){
    alert("Thank you anyways!");
}
var firstName = prompt("Thankyou!\nWhat is your first name?");
if (firstName == ""){
    firstName = prompt("Please do not leave this blank.\nWhat is your first name?");
}
var lastName = prompt("What is your last name?");
if (lastName == ""){
    lastName = prompt("Please do not leave this blank.\nWhat is your last name?");
}
var device = prompt("What type of device do you use to access our website?\nPlease enter one of these: 'tablet', 'phone', 'computer'.");
var tablet = 30;
var phone = 20;
var computer = 49;
if(device == ""){
    device = prompt("Please do not leave this blank.\nWhat type of device do you use to access our website?\nPlease enter one of these: 'tablet', 'phone', 'computer'.")
}else if (device == "tablet"){
    tablet ++
}else if (device == "phone"){
    phone ++
}else{
    computer ++
}
if (device == "tablet"){
    var device2 = "tablet";
    var average = tablet / (tablet + phone + computer) * 100;
}else if (device == "phone"){
    var device2 = "phone";
    var average = phone / (tablet + phone + computer) * 100;
}else{
    var device2 = "computer";
    var average = computer / (tablet + phone + computer) * 100;
}
alert("Thank you for the information " + firstName + " " + lastName + ".\n" + average + "% of people use their " + device2 + " to access our website just like you do.");