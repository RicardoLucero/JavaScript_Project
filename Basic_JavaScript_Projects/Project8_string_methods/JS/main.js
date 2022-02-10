function full_Sentence() {//creating a function to use the concatenate method
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);//the variable whole sentence will concatenate the strings.
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {//the slice method will return the part of the string in which you specify the start and end points
    var Sentence = "How much wood could a woodchuck chuck, if a woodchuck could chuck wood?";
    var Section = Sentence.slice(21,31);//the start and end point of what to slice from the string
    document.getElementById("Slice").innerHTML = Section;
}

function make_Uppercase() {//creating a function to make the string all caps
    var text = "What is the secret code?";
    var result = text.toUpperCase();//.toUpperCase is the syntax used with whichever variable you want to make uppercase
    document.getElementById("UP").innerHTML = result;
}

function text_search() {//the text search will return to you a place interger in where the string is.
    var Texts = "Mordecai likes to sun bathe by the door.";
    var position = Texts.search("bathe");//here we are searching the string for the string bathe
    document.getElementById("Search").innerHTML = position;//our place number will be 22
}

function string_Method() {//this method turns a number into a string
    var X = 182;//the syntax to do so is var.toString
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {//the precision method will format the number to the specified length
    var Y = 48539.152683264879112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(10);
}

function fixed_Method() {//the toFixed method rounds the number to the nearest interger
    var num = 4.789123;
    var n = num.toFixed(2);//putting any number in the parenthesis will round the number in the decimal points.
    document.getElementById("Round").innerHTML = n;
}

function value_of_Method() {//this will return the string as a primitive string
    var words = "In a time where dinosaurs ruled the world!";
    var OG = words.valueOf();
    document.getElementById("Primitive").innerHTML = OG;
}