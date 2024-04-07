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
  date = null
  pageViews = null
  fullEnd = false
  hasRus = false
  hasEng = false
  hasOther = false

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

  setUsedLanguages(obj) {
    this.hasRus = obj.rus
    this.hasEng = obj.eng
    this.hasOther = obj.other
  }
  setDate(date) {
    this.date = date
  }
  setPageViews(views) {
    this.pageViews = views
  }

  endGame() {
    this.isGoing = false
    this.isEnded = true
  }

  fullEnd() {
    this.fullEnd = true
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
