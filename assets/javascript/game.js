const possibleWords = [
  "area",
  "book",
  "business",
  "case",
  "child",
  "company",
  "country",
  "day",
  "eye",
  "fact",
  "family",
  "government",
  "group",
  "hand",
  "home",
  "job",
  "life",
  "lot",
  "man",
  "money",
  "month",
  "mother",
  "night",
  "number",
  "part",
  "people",
  "place",
  "point",
  "problem",
  "program",
  "question",
  "right",
  "room",
  "school",
  "state",
  "story",
  "student",
  "study",
  "system",
  "thing",
  "time",
  "water",
  "way",
  "week",
  "woman",
  "word",
  "work",
  "world",
  "year",
]
let wins = 0
let lettersGuessed = []
let guessesRemaining = 10
let winningWord = ""
let blankWord = ""
let word = ""

function win() {
  wins++
  document.getElementById("wins").innerHTML = wins
  lettersGuessed = []
  guessesRemaining = 10
  lettersGuessed = []
  winningWord = ""
  blankWord = ""
  word = ""
  selectWord()
  document.getElementById("blanks").innerHTML = blankWord
  document.getElementById("numGuesses").innerHTML = guessesRemaining
  document.getElementById("letGuesses").innerHTML = "~"
}

function lose() {
  lettersGuessed = []
  guessesRemaining = 10
  lettersGuessed = []
  winningWord = ""
  blankWord = ""
  word = ""
  selectWord()
  document.getElementById("blanks").innerHTML = blankWord
  document.getElementById("numGuesses").innerHTML = guessesRemaining
  document.getElementById("letGuesses").innerHTML = "~"
}

function selectWord() {
  winningWord = possibleWords[Math.floor(Math.random() * possibleWords.length)]
  console.log(winningWord)
  for (let i = 0; i < winningWord.length; i++) {
    blankWord = blankWord + "_"
  }
  document.getElementById("blanks").innerHTML = blankWord
  document.getElementById("numGuesses").innerHTML = guessesRemaining
  document.getElementById("letGuesses").innerHTML = "~"
}

function guessLetter(guess) {
  const formattedGuess = guess.toLowerCase()
  if (isLetter(formattedGuess)) {
    if (lettersGuessed.includes(formattedGuess)) return
    for (let i = 0; i < winningWord.length; i++) {
      if (formattedGuess === winningWord[i]) {
        blankWord =
          blankWord.substring(0, i) +
          winningWord[i] +
          blankWord.substring(i + 1)
        document.getElementById("blanks").innerHTML = blankWord
      }
      if (i > 0 && blankWord == winningWord) {
        win()
        return
      }
    }
    winningWord.guessesRemaining--
    document.getElementById("numGuesses").innerHTML = guessesRemaining
    lettersGuessed.push(guess)
    document.getElementById("letGuesses").innerHTML = lettersGuessed
    if (guessesRemaining < 1) {
      lose()
    }
  }
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i)
}

selectWord()
