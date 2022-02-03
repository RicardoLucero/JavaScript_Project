function My_First_Function() { //creating a function to be called for the button event
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML = str
}

function myFunction() { // creating a concatenated string using the += operaters
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence; //.innerHTML modifies the content of an HTML element
}