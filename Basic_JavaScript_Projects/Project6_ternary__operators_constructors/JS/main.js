function Ride_Function() {//creating function to use the ternary operator
    var Height, Can_ride;//creating two variables at the same time
    Height = document.getElementById("Height").value;//getting the height value form the html
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";//here the ternary operator is being used to see if you are tall enough
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";//we combine the strings with the output of the operator
}

function Age_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {//function Vehicle is the object constructor function
    this.Vehicle_Make = Make;//this refers to the object
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");//adding property to an existing object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Mitsubishi", "Lancer Evolution", 2004, "Grey");
function myFunction() {//here we are giving the button a function to use when clicked
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manufactured in " +Erik.Vehicle_Year;
}

function Dog(Breed, Color, Age,) {//creating another object
    this.Dog_Breed = Breed;
    this.Dog_Color = Color;
    this.Dog_Age = Age;
}
var Morty = new Dog("Dachshund", "Brown", 5,);
var MooCow = new Dog("Chihuahua", "White and Brown Spots", 11);
var Claudius = new Dog("Chihuahua", "Black", 11);
function newFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Morty is a " + Morty.Dog_Color + Morty.Dog_Breed + "he is a " +
    Morty.Dog_Age + " year old pupper.";
}

var abstract = abstract;//using a reserved word
document.write(abstract);

function count_Function() {//creating the function that will hold the nested function
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {//function count is created with var Starting_point
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}//function Plus_one using the starting point funtion and adds to it
        Plus_one();
        return Starting_point;//the function returns its answer of what the count would be
    }
}