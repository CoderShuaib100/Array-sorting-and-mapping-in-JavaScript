var numbers = [30,6,51,95,78,60,18];

function divider(num) {
    return num / 10;
}

var answer = numbers.map(divider);

document.write("<br>"+answer+"<br>");

// checking will the object will sink or not
// checking in grams and centimeter
// var height = 20; 
// var length = 25;
// var breadth = 10;
// var mass = 3650;

// function density_finder() {
//     var volume = length * breadth * height;
//     return 
// }

function density_finder() {
    var height = "30";
    var length = "20";
    var breadth = "60";
    var mass = "152";
    var volume = eval(length * breadth * height);
    var density = eval(mass/volume);
    var densityOfWater = "1";
    if (density > densityOfWater){
        document.write("The object will sink");
    }
    else{
        document.write("The object will not sink" + "<br>");
    }
    document.write("The object's density is " + density);
}

density_finder();

var ages = [20,65,95,14,18,35,36,100];

function arranger(params) {
    ages.sort(function (a,b){return a-b}); 
    document.getElementById("heading1").innerHTML = ages
}