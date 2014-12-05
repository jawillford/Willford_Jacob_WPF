/**
 *  Expressions_Industry - Created by jacobawillford on 12/4/14.
 */

var person1 = prompt("How many times a week does person 1 use google?");
var person2 = prompt("How many times a week does person 2 use google?");
var person3 = prompt("How many times a week does person 3 use google?");
var person4 = prompt("How many times a week does person 4 use google?");
var person5 = prompt("How many times a week does person 5 use google?");

var totalUse = Number(person1) + Number(person2) + Number(person3) + Number(person4) + Number(person5);
var averageUse = totalUse / 5;

alert("Google is used " + totalUse + " times a week." + "\nThe average person uses google " + averageUse + " times a week.");

var personOfInterest = prompt("How many times a week do you use google?");
var moreUse = personOfInterest - averageUse;

alert("You use google " + moreUse + " more times a week than the average person.");