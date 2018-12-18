var Letter = require("./letter.js");

let word = "red";

///Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//An array of `new` Letter objects representing the letters of the underlying word
let Word = function(word){
this.underlyingLett = []
 for (var i = 0; i < word.length; i++) {
    this.underlyingLett[i] = "_";
    this.underlyingLett.push(new Letter(word));

}
console.log (" I am the array" + this.underlyingLett);

    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    // this.addLetter = function(word) {
    //     this.underlyingLett.push(new Letter(word));
    };
  

  var firstClass = new Word(word);

//   firstClass.addLetter(word);
  console.log(firstClass);
  




//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
