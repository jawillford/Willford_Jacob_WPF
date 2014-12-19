/**
 * Functions_Wacky - Created by jacobawillford on 12/16/14.
 */

var layers = prompt("How many layers of pizzas do you want your cake to be made out of?");
var toppings = prompt("How many toppings do you want on your pizza cake?\nPlease choose '1, 2, or 3.'");
if (toppings == "1"){
    var topping1 = prompt("What is your first topping?\nOptions are: 'pepperoni, sausage, bacon, ham, peppers, olives, pineapple.'");

}else if (toppings == "2"){
    var topping1 = prompt("What is your first topping?\nOptions are: 'pepperoni, sausage, bacon, ham, peppers, olives, pineapple.'");
    var topping2 = prompt("What is your second topping?\nOptions are: 'pepperoni, sausage, bacon, ham, peppers, olives, pineapple.'");

}else if (toppings == "3"){
    var topping1 = prompt("What is your first topping?\nOptions are: 'pepperoni, sausage, bacon, ham, peppers, olives, pineapple.'");
    var topping2 = prompt("What is your second topping?\nOptions are: 'pepperoni, sausage, bacon, ham, peppers, olives, pineapple.'");
    var topping3 = prompt("What is your third topping?\nOptions are: 'pepperoni, sausage, bacon, ham, peppers, olives, pineapple.'");
}

if(topping1 == ""){
    var currentTopping = "";
}else if (topping1 == "pepperoni"){
    var currentTopping = "pepperoni";
}else if (topping1 == "sausage"){
    var currentTopping = "sausage";
}else if (topping1 == "bacon"){
    var currentTopping = "bacon";
}else if (topping1 == "ham"){
    var currentTopping = "ham";
}else if (topping1 == "peppers"){
    var currentTopping = "peppers";
}else if (topping1 == "olives"){
    var currentTopping = "olives";
}else if (topping1 == "pineapple"){
    var currentTopping = "pineapple";
}
poundsOfTopping(layers);

if(topping2 == ""){
    var currentTopping = "";
}else if (topping2 == "pepperoni"){
    var currentTopping = "pepperoni";
}else if (topping2 == "sausage"){
    var currentTopping = "sausage";
}else if (topping2 == "bacon"){
    var currentTopping = "bacon";
}else if (topping2 == "ham"){
    var currentTopping = "ham";
}else if (topping2 == "peppers"){
    var currentTopping = "peppers";
}else if (topping2 == "olives"){
    var currentTopping = "olives";
}else if (topping2 == "pineapple"){
    var currentTopping = "pineapple";
}
poundsOfTopping(layers);

if(topping3 == ""){
    var currentTopping = "";
}else if (topping3 == "pepperoni"){
    var currentTopping = "pepperoni";
}else if (topping3 == "sausage"){
    var currentTopping = "sausage";
}else if (topping3 == "bacon"){
    var currentTopping = "bacon";
}else if (topping3 == "ham"){
    var currentTopping = "ham";
}else if (topping3 == "peppers"){
    var currentTopping = "peppers";
}else if (topping3 == "olives"){
    var currentTopping = "olives";
}else if (topping3 == "pineapple"){
    var currentTopping = "pineapple";
}
poundsOfTopping(layers);

function poundsOfTopping(layers){
    var toppingPerLayer = 1;
    var poundsOfTopping = toppingPerLayer * layers;
    alert("You need " + poundsOfTopping + " pounds of " + currentTopping);
}
var cupsOfCheese = layers * 2;
var poundsOfDough = layers;
alert("You will need " + cupsOfCheese + " cups of cheese.");
alert("You will need " + poundsOfDough + " pounds of dough.");