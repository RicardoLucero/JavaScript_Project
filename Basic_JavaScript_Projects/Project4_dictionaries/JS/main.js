function my_Dictionary() {
    var Animal = { //variable animal becomes the dictionary
        Species:"Dog",
        Color:"Brown",
        Breed:"Dachshund",
        Age:5,
        Sound:"Bark!",
    };
    delete Animal.Color //deletes the color in the animal dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Color;
}
