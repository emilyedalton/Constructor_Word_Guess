let guess = process.argv[2];
//This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter
var Letter = function (character){
//A string value to store the underlying character for the letter

this.character = character;

//A boolean value that stores whether that letter has been guessed yet

this.guessed = false;

//A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

this.letterguess = function(guess){
    if(this.character === guess){
        // return this.character;
        console.log (`you have correctly guessed ${this.character}`)

    } else{
        this.character = "_";
        console.log ("I am the character now " + this.character)
    }

//A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
this.guessConfirm = function(){

    if (this.character === guess){
        this.guessed = true;
        console.log(`your guess was ${this.guessed}`)
    }
}

}

}

var getLetter = new Letter("a");   

getLetter.letterguess(guess)
// getLetter.guessConfirm(guess)
console.log(getLetter);

