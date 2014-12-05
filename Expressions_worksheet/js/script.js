/**
 * Expressions_worksheet - Created by jacobawillford on 12/4/14.
 */

//Declaring variable
var sparkysAge = 3;
//Declaring a variable and multiplying it by 7
var sparkysDogAge = sparkysAge * 7;
//Telling the computer to print to console
console.log("Sparky is " + sparkysAge + " human years old which is " + sparkysDogAge + " in dog years.");

//Declaring variable
var slicesPerPizza = 8;
//Declaring variable
var people = 16;
//Declaring variable
var pizzasOrdered = 4;
//Declaring variable and multiplying and dividing
var slicesPerPerson = slicesPerPizza * pizzasOrdered / people;
//Telling the computer to print to console
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//Declaring variable
var slicesPerPizza2 = 9;
//Declaring variable
var people2 = 5;
//Declaring variable
var pizzasOrdered2 = 3;
//Declaring variable and multiplying
var numberOfSlices = slicesPerPizza2 * pizzasOrdered2;
//Declaring variable and using modulus operator
var slicesForSparky = numberOfSlices % people2;
//telling the computer to print to console
console.log("Sparky got " + slicesForSparky + " slices of pizza.");

//Declaring variable with an array
var groceryCosts = [120, 130, 90, 115, 105];
//Declaring variable and using addition
var totalCost = groceryCosts[0] + groceryCosts[1] + groceryCosts[2] + groceryCosts[3] + groceryCosts[4];
//Declaring variable and dividing
var averageCost = totalCost / 5;
//Telling the computer to print to console
console.log("You have spent a total of $" + totalCost + " on groceries over 5 weeks. \nThat is an average of $" + averageCost + " per week.");

//Declaring variable
var originalPrice = 100;
//Declaring variable
var discountPercent = 20;
//Declaring variable
var itemName = "Jacket";
//Declaring variable
var salesTax = 8;
//Declaring variable and using multiplication, division, and addition
var newPrice = originalPrice * (discountPercent / 100) + originalPrice;
//Declaring variable and using multiplication, division, and addition
var newPriceWithTax = (originalPrice * (discountPercent / 100) + originalPrice) + (newPrice * (salesTax / 100));
//Telling the computer to print to console
console.log("Your " + itemName + " was originally $" + originalPrice + ", but after a " + discountPercent + "% discount, it is now $" + newPrice + " without tax, and $" + newPriceWithTax + " with tax.");