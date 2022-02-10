var R = 28;//this variable is a global variable because it is assigned outside of a function
function Add_numbers_1() {
    document.write(20 + R + "<br>");//the function can use the variable because it was stated outside
}//of it and knows what the value of R is
function Add_numbers_2() {
    document.write(R + 280 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

function Subtract_numbers_1() {//this variable is a local variable as it is assigned
    var S = 18;//inside of the function and therefore can only be used by this function
    document.write(200 - S + "<br>");
}
function Subtract_numbers_2() {//this function attempts to use the same variable but will not
    document.write(S - 7);//know what the variable is assigned for its value
}
Subtract_numbers_1();
Subtract_numbers_2();

function Add_numbers_3() {
    var X = 10;
    console.log(15 + X);//the answer will not show on the webpage but instead on the console log
}
function Add_numbers_4() {//we will use the console log to debug the code as
    console.log(X + 100);//here we will see that the console log will say that x is not defined
}
Add_numbers_3();
Add_numbers_4();

function get_Date() {//creating a conditional statement
    if (new Date().getHours() < 18) {//the conditanl statement is if the hours are less the 6PM 
        document.getElementById("Greeting").innerHTML = "How are you today?";//we will print this
    }
}

function get_Hours() {
    if (new Date().getHours() > 4) {
        document.getElementById("if").innerHTML = "Rise and Shine!";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;//we are tageting the id age and then the value
    if (Age >= 18) {//conditional statement checks the value of the input
        Vote = "You are old enough to vote!";//if true this statement is written
    }
    else {//if false then we are writing this statement
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;//vote is assigned to the <P> id to print on that element
}

function Time_function() {//creating the time function which will carry out out else if statements
    var Time = new Date().getHours();//assinging the variable Time to get the time
    var Reply;
    if (Time < 12 == Time > 0) {//the if statement chack if it is 12 am all the way to 12pm
        Reply = "It is morning time!";//the reply if the first conditon is true
    }
    else if (Time >= 12 == Time < 18) {//checks if time is between 12pm and 6pm
        Reply = "It is afternoon.";//the reply i fthe seconf condition is true
    }
    else {//any time between 6pm and 12am is considered the 3rd condtion to be true
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;//we assign the <p> to have the value of reply
}