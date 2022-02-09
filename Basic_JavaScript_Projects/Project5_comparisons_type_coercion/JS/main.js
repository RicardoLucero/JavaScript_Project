document.write(typeof "word");//typeof will write out what data type it is

document.write("47" + 1);//combines a string with a number

function my_Function() {//using the equation to show that it is NaN
    document.getElementById("Test").innerHTML = 0/0;
}

function our_Function() {//using isNaN to check if the data is a number or not
document.getElementById("Tests").innerHTML = isNaN('this is a string');
}

function their_Function() {//once again checking the data if it is NaN
document.getElementById("Testt").innerHTML = isNaN(007);
}

document.write(2E310);//writing a number big enough to show infinity

document.write(-3E310);//writing a low enough number to show negative infinity

document.write(10 > 2);//check if it is true or false

document.write(10 < 1);

console.log(2 + 2);//checking if it's true or false in the console not on the webpage

console.log(47 < 26);

document.write(15 == 15);//compares the data on both side of sign to see if they are the same
//if they are then true will show if not then false will show
document.write(21 == 28);

A = "Mordecai";
B = "Mordecai";
document.write(A === B);//the triple equal sign is checking if the data type and the data are equal
//if they are they same in data and data type then true will show if not then false will show
X = 72;
Y = "11";
document.write(X === Y);

F = 47;
G = "47";
document.write(F === G);//will show as false as they are different data types

U = "Claudius";
V = "Chompies";
document.write(U === V);//will come out as false as they are the same data type but different data

document.write(3 > 1 && 12 > 3);//using the boolean AND operator to check
//this will show as true since they are both true
document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4);//using the boolean OR operator
//this is true because only one of them is true at least
document.write(5 > 10 || 10 > 20);

function not_Function() {//using the boolean NOT operator
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function knot_Function() {
document.getElementById("Knot").innerHTML = !(5 > 10);
}