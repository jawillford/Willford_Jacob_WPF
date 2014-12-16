/**
 * Functions_Worksheet - Created by jacobawillford on 12/15/14.
 */
radius = prompt("What is the radius of the circle?");
function circumfrence(radius){
    var pi = 3.14;
    var circumfrence = radius * 2 * pi;
    return circumfrence;
}
var total = circumfrence(radius);
alert("The circumfrence of the circle is " + total + " in.");

var weight = prompt("How much does the animal weigh?");
function stings(weight){
    var stingPerPound = 8.666666667;
    var stings = stingPerPound * weight;
    return stings;
}
var total1 = stings(weight);
alert("it takes " + total1 + " bee stings to kill this animal");