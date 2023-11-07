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

var hScore = localStorage.getItem("highScore") ? localStorage.getItem("highScore") : 0;

select.value = localStorage.getItem("selectValue") ? localStorage.getItem("selectValue") : "easy"

localStorage.setItem("selectValue", select.value)

select.addEventListener("change", ()=> {
  localStorage.setItem("selectValue", select.value)
})

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

    var level = select.value

    if (level == "easy") {
      gameTime += 5
      time.innerHTML += `
        <span class="addTime">+5</span>
      `
    } else if (level == "normal") {
      gameTime += 3
      time.innerHTML += `
      <span class="addTime">+3</span>
      `
    } else {
      gameTime += 2
      time.innerHTML += `
      <span class="addTime">+2</span>
      `
    }

  }
})

const interval = setInterval(() => {
  
  if (gameTime == 0) {
    clearInterval(interval)
    if (num > hScore) {
      localStorage.setItem("highScore", num)
      hScore = localStorage.getItem("highScore")
    }
    gameOver.classList.add("active")
    finalResultIndex.textContent = num
  } else {
    gameTime--
    
    time.textContent = gameTime
    
  }
}, 1000);


highScore.textContent = hScore

