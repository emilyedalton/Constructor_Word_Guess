let guess = process.argv[2];
//This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter
var Letter = function (character, guessed) {
    //A string value to store the underlying character for the letter

    this.character = character;

    //A boolean value that stores whether that letter has been guessed yet

    this.guessed = false;

    //A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

    this.letterguess = function () {
        if (this.character) {
            //return statement ends function execution and specifies a value to be returned to the function caller.        
            return this.character;

        }
        else {
            return "_";
            // console.log ("I am the character now " + this.character)
        }
    }
    //A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.guessConfirm = function (guess) {
        {
            if (guess.toLowerCase() === this.character.toLowerCase()) {
                this.guessed = true;
                return true;
            }
            else {
                // Otherwise return false
                return false;

            }
        }
    }
}

var getLetter = new Letter("a", "a");
console.log(getLetter.letterguess("a"));
// var getLetter = new Letter("a");   

// getLetter.letterguess(guess);
// getLetter.guessConfirm(guess)
// console.log(getLetter);

module.exports = Letter;
