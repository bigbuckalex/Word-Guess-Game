const possibleWords = ["apple","orange","lemon"];
let wins = 0;
let lettersGuessed = [];
let guessesRemaining = 10;
let winningWord = "";
let blankWord = "";
let guess = '';

function win(){
    wins++;
    lettersGuessed = [];
    guessesRemaining = 10;
}

function lose(){
    lettersGuessed = [];
    guessesRemaining = 10;
}

function selectWord(){
    // winningWord = possibleWords[Math.trunc(Math.random*possibleWords.length)];
    winningWord = possibleWords[0];

    for(let i=0; i<winningWord.length; i++){
        blankWord = blankWord + "_";
    }
}

function guessLetter(guess){
    for(let i=0; i<winningWord.length; i++){
        if(guess === winningWord[i]){
            blankWord[i] = winningWord[i];
            document.getElementById("blanks").innerHTML = blankWord;
        }
        else guessesRemaining--;
    }
}

selectWord();
console.log(winningWord);
guessLetter('a');
console.log(blankWord);