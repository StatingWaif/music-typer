import { makeAutoObservable } from "mobx"

class GameStore {
  fullText = ""
  indexOfCurrentLine = 0
  indexOfCurrentWord = 0
  mistakes = 0
  gameImg = ""
  gameName = ""
  currentSpeed = 0
  userInput = ""
  isWrong = false
  symCount = 0
  prevUserInput = ""
  seconds = 0
  isGoing = false
  isEnded = false
  id = null
  isPoem = false
  usedLanguages = []
  date = null

  constructor() {
    makeAutoObservable(this)
  }

  startGame() {
    this.indexOfCurrentLine = 0
    this.indexOfCurrentWord = 0
    this.mistakes = 0
    this.userInput = ""
    this.isWrong = false
    this.symCount = 0
    this.prevUserInput = ""
    this.seconds = 0
    this.isGoing = true
    this.isEnded = false
  }

  endGame() {
    this.isGoing = false
    this.isEnded = true
  }

  setIsPoem(val) {
    this.isPoem = val
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
  setGameImg(src) {
    this.gameImg = src
  }
  setGameName(name) {
    this.gameName = name
  }
  setId(id) {
    this.id = id
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

  get linesCount() {
    return this.fullText.length
  }

  get currentLine() {
    return this.fullText[this.indexOfCurrentLine].split(" ")
  }

  get currentWord() {
    return this.currentLine[this.indexOfCurrentWord]
  }
}

export default new GameStore()
