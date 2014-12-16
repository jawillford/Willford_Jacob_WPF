/**
 * Functions_Personal - Created by jacobawillford on 12/16/14.
 */
var shape = prompt("What is the shape of your object?\nAnswer: 'rectangular prism, sphere, or pyramid'.");

if (shape == ""){
    shape = prompt("Please do not leave this blank.\nWhat is the shape of your object?\nAnswer: 'rectangle, circle, or triangle'.");
}
if (shape == "rectangular prism"){
    var length = prompt("What is the length of your rectangular prism?");
    var height = prompt("What is the height of your rectangular prism?");
    var width = prompt("What is the width of your rectangular prism?");
    areaRectangle(length, height, width);
}else if (shape == "sphere"){
    var radius = prompt("What is the radius of your circle?");
    areaSphere(radius);
}else{
    var length1 = prompt("What is the length of the base of your pyramid?");
    var width1 = prompt("What is the width of the base of your pyramid?");
    var height1 = prompt("What is the height of your pyramid?");
    areaPyramid(length1, width1, height1);
}
function areaRectangle(length, height, width){
    var area = length * height + width;
    alert("The area of your rectangular prism is " + area + " in. cubed");
}
function areaSphere(radius){
    var pi = 3.14;
    var area = 4 * pi * radius * radius;
    alert("The area of your sphere is " + area + " in. cubed");
}
function areaPyramid(length, width, height){
    var area = (1/3) * (length * width) * height;
    alert("The area of your pyramid is " + area + " in. cubed");
}