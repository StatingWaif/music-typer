import { makeAutoObservable } from "mobx"

class GameStore {
  fullText = ""
  indexOfCurrentLine = 0
  indexOfCurrentWord = 0
  mistakes = 0
  songImg = ""
  songName = ""
  currentSpeed = 0
  userInput = ""
  isWrong = false
  symCount = 0
  prevUserInput = ""
  seconds = 0
  isGoing = false

  constructor() {
    makeAutoObservable(this)
  }

  startGame() {
    this.isGoing = true
  }

  endGame() {
    // this.fullText = ""
    // this.indexOfCurrentLine = 0
    // this.indexOfCurrentWord = 0
    // this.mistakes = 0
    // this.songImg = ""
    // this.songName = ""
    // this.currentSpeed = 0
    // this.userInput = ""
    // this.isWrong = false
    // this.symCount = 0
    // this.prevUserInput = ""
    // this.seconds = 0
    this.isGoing = false
  }

  incrementSeconds() {
    this.seconds++
  }

  setFullText(text) {
    this.fullText = text
  }

  incrementIndexOfCurrentLine() {
    this.indexOfCurrentLine++
  }

  resetIndexOfCurrentLine() {
    this.indexOfCurrentLine = 0
  }
  incrementIndexOfCurrentWord() {
    this.indexOfCurrentWord++
  }

  resetIndexOfCurrentWord() {
    this.indexOfCurrentWord = 0
  }

  incrementMistakes() {
    this.mistakes++
  }
  setSongImg(src) {
    this.songImg = src
  }
  setSongName(name) {
    this.songName = name
  }
  setCurrentSpeed(speed) {
    this.currentSpeed = speed
  }
  setPrevUserInput(input) {
    this.prevUserInput = input
  }

  setUserInput(input) {
    this.setPrevUserInput(this.userInput)
    this.userInput = input
  }

  setIsWrong(value) {
    this.isWrong = value
  }

  incrementSymCount() {
    this.symCount++
  }

  get currentLine() {
    return this.fullText[this.indexOfCurrentLine].split(" ")
  }

  get currentWord() {
    return this.currentLine[this.indexOfCurrentWord]
  }
}

export default new GameStore()
