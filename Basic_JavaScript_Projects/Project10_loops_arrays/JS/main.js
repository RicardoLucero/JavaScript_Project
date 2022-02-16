function Call_Loop() {//creating a loop to call upon
    var Digit = "";//creating a variable to assign the value that the loop will count with
    var X = 1;//assign x the value of 1 to start to loop
    while (X < 11) {//the conditional statement that if x is less then 11
        Digit += "<br>" + X;
        X++;//telling the computer to add 1 to x for every loop until the conditional statement is reached
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var text = "My dog's name is Mordecai.";//assigning a string to a variable
var length = text.length;//using the .length to find out how long the string is 
document.getElementById("Length").innerHTML = length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];//created an array with with an index of 7
var Content = "";
var Y;
function for_Loop() {//creating a for loop to write out all the items in the array
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {//creating an array and using the index to write a string using one of the index
    var Switch_Game = [];
    Switch_Game[0] = "Zelda Breath of the Wild";
    Switch_Game[1] = "Super Mario Sunshine";
    Switch_Game[2] = "Mario Kart 8 Deluxe";
    Switch_Game[3] = "civilization 6";
    Switch_Game[4] = "Mario Party";
    document.getElementById("Array").innerHTML = "I am currently playing " + 
        Switch_Game[0] + "."
}

function constant_function() {//creating a constant fucntion and using the properties to create a string with them
    const Vehicle = {type:"car", manufacture:"Subaru", color:"Blue"};
    Vehicle.color = "grey";
    Vehicle.price = "$34,000";
    document.getElementById("Constant").innerHTML = "The " + Vehicle.manufacture + " is a " + Vehicle.color + " color, and costs only " + Vehicle.price + ".";
}

var R = ("<br>" + 69);//using let and var to see their difference in scope use
document.write(R);
{
    let R = 47;
    document.write("<br>" + R);
}
document.write(R);//here the variabel would be 69 since the let variable would only be in the block code

let J = myFunction(11, 29);
document.getElementById("add").innerHTML = J;

function myFunction(Q, W) {
    return Q + W;
}

let game_Console = {//creating an object and its properties 
    brand: "Nintendo ",
    model: "Switch ",
    version: "OLED ",
    color: "white ",
    description : function() {//the function is the method of the object and is listed in with the properties
        return "The " + this.brand + this.model + this.version + "is a " + this.color + " color. It is the newest one out now!";
    }
};
document.getElementById("Console_Object").innerHTML = game_Console.description();

let brk = "";
for (let i = 1; i < 11; i++) {//using the break function to break away from the loop once the a condition is met in the loop
    if (i === 3) {break;}//this is the condition for the loop to break away
    brk += "The number is " + i + "<br>";
}
document.getElementById("loop").innerHTML = brk;

let skip = "";
for (let c = 1; c < 11; c++) {//use continue to skip over a step in a loop
    if (c === 5) { continue; }//this is the step to skip iver once it reaches this conditional statement
    skip += "The number is " + c + "<br>";
}
document.getElementById("continue").innerHTML = skip;