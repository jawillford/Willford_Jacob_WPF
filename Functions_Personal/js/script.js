/**
 * Functions_Personal - Created by jacobawillford on 12/16/14.
 */
var shape = prompt("What is the shape of your object?\nAnswer: 'rectangle, circle, or triangle'.");

if (shape == ""){
    shape = prompt("Please do not leave this blank.\nWhat is the shape of your object?\nAnswer: 'rectangle, circle, or triangle'.");
}
if (shape == "rectangle"){
    var length = prompt("What is the length of your rectangle?");
    var height = prompt("What is the height of your rectangle?");
    areaRectangle(length, height);
}else if (shape == "circle"){
    var radius = prompt("What is the radius of your circle?");
    areaCircle(radius);
}else{
    var base = prompt("What is the base of your triangle?");
    var height1 = prompt("What is the height of your triangle?");
    areaTriangle(base, height1);
}
function areaRectangle(length, height){
    var area = length * height;
    alert("The area of your rectangle is " + area + " square in.");
}
function areaCircle(radius){
    var pi = 3.14;
    var area = pi * radius * radius;
    alert("The area of your circle is " + area + " square in.");
}
function areaTriangle(base, height){
    var area = .5 * base * height;
    alert("The area of your triangle is " + area + " square in.");
}