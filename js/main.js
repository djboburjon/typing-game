const select = document.querySelector("#level")
const score = document.querySelector(".score")
const highScore = document.querySelector(".hScore")
const text = document.querySelector(".rWord")
const input = document.querySelector(".wInput")
const time = document.querySelector(".time")
const finalResultIndex = document.querySelector(".finalResultIndex")
const gameOver = document.querySelector(".gameOver")


const words = [
  "abreact",
  "abreacted",
  "abreacting",
  "abreaction",
  "abreactions",
  "paltrier",
  "paltriest",
  "paltrily",
  "paltriness",
  "paltrinesses",
  "paltry",
  "paludal",
  "paludism",
  "shiv",
  "shiva",
  "shivah",
  "shivahs",
  "shivaree",
  "shivareed",
  "shivareeing",
  ]

var randomText

var num = 0

var gameTime = 10

const writeText = ()=> {
  var index = Math.floor(Math.random() * words.length)
  randomText = words[index]
  text.textContent = randomText
}

writeText()


input.addEventListener("input", ()=> {
  if (randomText == input.value) {
    writeText()
    input.value = ""
    num++
    score.textContent = num
  }
})

const interval = setInterval(() => {
  
  if (gameTime == 0) {
    clearInterval(interval)
    gameOver.classList.add("active")
    finalResultIndex.textContent = num
  } else {
    gameTime--
    
    time.textContent = gameTime
    
  }
}, 1000);