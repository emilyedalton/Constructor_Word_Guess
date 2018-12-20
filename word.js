var Letter = require("./letter.js");

let currentWord = process.argv[2];

///Contains a constructor, Word that depends on the Letter constructor.
//This constructor is used to create an object representing the current word the user is attempting to guess. This word will be produed by the index file. 

var Word = function(currentWord){
this.currentWord = currentWord;
this.underlyingLett = [];
// this is the method that creates the word to guess out of letters split from the current word. Calling the letterguess function
this.wordtoGuess = function (){
  console.log(currentWord);
  let splitWord = this.currentWord.split("").join(" ");
for (let i = 0; i < splitWord.length; i++){
  let currentLet = new Letter(splitWord[i], "");
  console.log(`this is the splitWord array  ${splitWord[i]}`);
  console.log("this is the current letter" + currentLet.letterguess());
 this.underlyingLett.push(currentLet.letterguess());
}
this.displayboard = function(){
  console.log("is this workign" + " " + this.underlyingLett);


}
}
}
// return underlyingLett;

var getWord = new Word("Developer");
getWord.wordtoGuess();
getWord.displayboard();
var getLetter = new Letter("a", "a");
console.log(getLetter.guessConfirm("a"));

// this.word = word;
//The code below makes the word produced by the index file into individual letters by splitting them and putting them into an array. ".Join" puts spaces between the letters.
// this.splitWord = currentWord.split("").join(" "); 
// this.underlyingLett is array of `new` Letter objects representing the letters of the underlying word

//A function that returns a string representing the word.
// Word.prototype.playLetter= function (){
// //The code below creates a new letter object from the object in the Letter.js file
//   var letter = new Letter();
// for( var i = 0; i < this.splitWord.legnth; i++){
// console.log ("i am supposed to be the word split up into an array" + this.splitWord);
// this.underlyingLett.push(letter.letterguess(char));
// }
// console.log( this.underlyingLett)
// }
// this.wordtoGuess = this.playLetter(currentWord);
// }
// Word.prototype.correctletterGuess = function(){
// var letter = new Letter();

// var foundCharIndex =

// }
     //This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    // this.addLetter = function(word) {
    //     this.underlyingLett.push(new Letter(word));
    //};




//A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
