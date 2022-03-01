function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i ++) {
        if (sizeArray[i].checked) {//the .checked checks for anything with the class name size that is checked
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }//We are giving the sizes their price so the computer knows what to add up for the cart
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 18;
    } else if (selectedSize === "The Big One") {
        sizeTotal = 22;
    }
    runningTotal = sizeTotal;//running total is changed from 0 to which ever size is selected
    console.log(selectedSize+" = $"+sizeTotal+".00");//the console will keep track of all the math behind the scenes
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray [j].checked) {//once again we are checking for the checked items in the array of class name toppings
            selectedTopping.push(toppingArray[j].value);//the .push method adds the checked toppings to the array
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";//in the console we are adding the array to text1
        }
    }
    var toppingCount = selectedTopping.length;//.length will keep track of how long the array is
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);//we subtract one topping becuase we give one topping for free
    } else {
        toppingTotal = 0;//making sure that the topping total can't be less the 0
    }
    runningTotal = (runningTotal + toppingTotal);//here we add up the price of the size of pizza to the toppings.length
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" toppings - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
};