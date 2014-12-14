/**
 * Conditionals_Industry - Created by jacobawillford on 12/11/14.
 */
//asking if they want to take the test or not
var answer = prompt("Would you like to take a test to improve our company?\nPlease answer 'yes' or 'no'.");
//if answer is equal to nothing
if (answer == ""){
//then ask again
    answer = prompt("Please do not leave this blank.\nWould you like to take a test to improve our company?\nPlease answer 'yes' or 'no'.");
//else if answer is equal to "no"
}else if (answer == "no"){
//alert
    alert("Thank you anyways!");
}
//ask for their first name
var firstName = prompt("Thankyou!\nWhat is your first name?");
//if firstname is equal to nothing
if (firstName == ""){
//then ask again
    firstName = prompt("Please do not leave this blank.\nWhat is your first name?");
}
//ask for their last name
var lastName = prompt("What is your last name?");
//if lastname is equal to nothing
if (lastName == ""){
//then ask again
    lastName = prompt("Please do not leave this blank.\nWhat is your last name?");
}
//ask what device they use
var device = prompt("What type of device do you use to access our website?\nPlease enter one of these: 'tablet', 'phone', 'computer'.");
//declare variable
var tablet = 30;
//declare variable
var phone = 20;
//declare variable
var computer = 49;
//if device is equal to nothing
if(device == ""){
//then ask again
    device = prompt("Please do not leave this blank.\nWhat type of device do you use to access our website?\nPlease enter one of these: 'tablet', 'phone', 'computer'.");
//else if device is equal to tablet
}else if (device == "tablet"){
//then add 1 to tablet
    tablet ++;

    var device2 = "tablet";

    var average = tablet / (tablet + phone + computer) * 100;

//else if device is equal to phone
}else if (device == "phone"){
//then add 1 to phone
    phone ++;
//then device2 == phone
    var device2 = "phone";
//then set average
    var average = phone / (tablet + phone + computer) * 100;
//else
}else{
//then computer ++
    computer ++;
//then set device
    var device2 = "computer";
//then set average
    var average = computer / (tablet + phone + computer) * 100;
}
//alert
alert("Thank you for the information " + firstName + " " + lastName + ".\n" + average + "% of people use their " + device2 + " to access our website just like you do.");