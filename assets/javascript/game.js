const possibleWords = ["apple","orange","lemon"];
let wins = 0;
let lettersGuessed = [];
let guessesRemaining = 10;
let winningWord = "";
let blankWord = "";
let guesses = "";
let word = "";

function replaceChar(index, char){

}

function win(){
    wins++;
    document.getElementById("wins").innerHTML = wins;
    lettersGuessed = [];
    guessesRemaining = 10;
    lettersGuessed = [];
    winningWord = "";
    blankWord = "";
    guesses = "";
    word = "";
    selectWord();
    document.getElementById("blanks").innerHTML = blankWord;
    document.getElementById("numGuesses").innerHTML = guessesRemaining;
    document.getElementById("letGuesses").innerHTML = lettersGuessed;
}

function lose(){
    lettersGuessed = [];
    guessesRemaining = 10;
    lettersGuessed = [];
    winningWord = "";
    blankWord = "";
    guesses = "";
    word = "";
    selectWord();
    document.getElementById("blanks").innerHTML = blankWord;
    document.getElementById("numGuesses").innerHTML = guessesRemaining;
    document.getElementById("letGuesses").innerHTML = lettersGuessed;
}

function selectWord(){
    winningWord = possibleWords[Math.floor(Math.random()*possibleWords.length)];
    // let word = possibleWords[0];
    // winningWord = "banana";
    console.log(winningWord);
    for(let i=0; i<winningWord.length; i++){
        blankWord = blankWord + "_";
    }
    document.getElementById("blanks").innerHTML = blankWord;
}

function guessLetter(guess){
    if(isLetter(guess)){
        for(let i=0; i<winningWord.length; i++){
            if(guess === winningWord[i]){
                blankWord = blankWord.substring(0,i) + winningWord[i] + blankWord.substring(i+1);
                document.getElementById("blanks").innerHTML = blankWord;
            }
            if(i>0 && blankWord==winningWord){
                win();
                return;
            }
        }
        if(guessesRemaining<1) return;
        guessesRemaining--;
        document.getElementById("numGuesses").innerHTML = guessesRemaining;
        guesses = guesses + guess;
        document.getElementById("letGuesses").innerHTML = guesses;
        if(guessesRemaining<1){
            lose();
        }
    }
}

function isLetter(str){
    return str.length === 1 && str.match(/[a-z]/i);
}

// window.onkeypress = guessLetter(event.key);
selectWord();
// if(guessesRemaining<1){
//     lose();
//     selectWord();
// }

// console.log(winningWord);
// guessLetter('l');
// console.log(blankWord);
// guessLetter('a');
// console.log(blankWord);