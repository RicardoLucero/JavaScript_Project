function Addition() {//the addition function
    var Addition = 4 + 7;
    document.getElementById("Math").innerHTML="4 + 7 = " + Addition;
}

function Takeaway() {//the subtraction function
    var minus = 9 - 3;
    document.getElementById("Maths").innerHTML = " 9 - 3 = " + minus;
}

function Multiplication() {//the multiplication function
    var multiply = 6 * 8;
    document.getElementById("Matth").innerHTML = "6 x 8 = " + multiply;
}

function Division() {// the division function divides for you 
    var divide = 48 / 6;
    document.getElementById("Mathe").innerHTML = "48 / 6 = " + divide;
}

function more_Math() {//this function will do the multiple moth operations all at once
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("MMath").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {// the modulus operator gives you the remainder of the equation
    var Remainder = 25 % 6;
    document.getElementById("Mathh").innerHTML = "When you divide 25 by 6 you have a remainder of: " + Remainder;
}

function negation_Operator() {//the negation operator Negates the number it is given
    var x = 10;
    document.getElementById("Mathes").innerHTML = -x;
}

var Y = 5;// the ++ sign increases the number by 1
Y++;
document.write(Y);

var Z = 5.25// the -- sign decreases the number by 1
Z--;
document.write(Z);

window.alert(Math.random() * 100);

document.write(Math.PI); //PI will be written out with the math object being PI