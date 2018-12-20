var Letter = require("./letter.js");
var guess = process.argv[2];
// let currentWord = "horse";


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


 }
//----end wordtoGuess method----


//initialize board takes a letter from the underlyingLett array and transforms it into an underscore
  this.initializeboard = function (){
    console.log()
    for (let i = 0; i < this.currentWord.length; i++) {
      this.underlyingLett[i] = "_ ";
   }
}
//----end initializeboard method----

// displayboard takes all of the underlying letters that have been transformed and joins them
this.displayboard = function(){
  
  console.log("This is the underlying letter array" +" "+ this.underlyingLett.join(""));
}
//----end displayboard method----
//userguess iterates through the current word letter and run the guess confirm method on it, then update the display
this.userGuess = function(guess) {
  for (let i = 0; i < this.currentWord.length; i++) {
    let currentLet = this.currentWord[i];
    console.log (`I am part of the userGuess function ${currentLet}`)
    // guessConfirm(currentLet);
  }
}
//----end userguess method----
}
//----end Word object----


var getWord = new Word("Cat");
getWord.initializeboard();
// getWord.wordtoGuess();
getWord.displayboard();
getWord.userGuess("g");
var getLetter = new Letter("b", "b");
console.log(getLetter.guessConfirm("b"));

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
