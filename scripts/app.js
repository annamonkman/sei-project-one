function init() {
  console.log('CONTENT LOADED')

  // * Variables
  const grid = document.querySelector('.grid')

  const width = 14
  const height = 13
  const cellCount = width * height
  const cells = []

  const startButton = document.querySelector('.start-button')
  const restartButton = document.querySelectorAll('.restart-button')

  const popupStart = document.querySelector('.popup-start')
  const popupLose = document.querySelector('.popup-lose')
  const popupWin = document.querySelector('.popup-win')

  const snailClass = 'snail'
  const snailStartPosition = 175
  const gridStartPosition = 0
  let snailCurrentPosition = 175

  let ratTimerOne
  let ratTimerTwo
  let ratTimerThree
  let ratTimerFour
  let ratTimerFive
  let ratTimerSix
  let ratTimerSeven
  let ratTimerEight
  let ratTimerNine
  let ratTimerTen
  let boardTimerOne
  let boardTimerTwo
  let boardTimerThree
  let boardTimerFour
  let boardTimerFive
  let boardTimerSix
  let boardTimerSeven
  let boardTimerEight
  let boardTimerNine
  let boardTimerTen
  let boardTimerEleven
  let boardTimerTwelve
  let boardTimerThirteen
  let boardTimerFourteen
  let boardTimerFifteen
  let crispsTimerOne
  let crispsTimerTwo
  let crispsTimerThree
  let crispsTimerFour
  let crispsTimerFive
  let crispsTimerSix
  let crispsTimerSeven
  let crispsTimerEight

  const unsafeLandClass = 'unsafe'
  const unsafeClass = 'unsafe'
  const ratClass = 'rat'
  const roadClass = 'road'
  const waterClass = 'water'
  const pipeClass = 'pipe'
  const pipeBodyClass = 'pipe-body'
  const startStripClass = 'start-strip'
  const middleStripClass = 'middle-strip'
  const holeClass = 'hole'
  const fireClass = 'fire'
  const boardClass = 'board'
  const crispsClass = 'crisp-packet'
  const twigStartClass = 'twig-start'
  const twigMiddleClass = 'twig-middle'
  const twigEndClass = 'twig-end'
  const pathClass = 'path'

  const unsafeLandArray = [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 22, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 127, 131, 137]
  const roadArray = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167]
  const waterArray = [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 22, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97]
  const startStripArray = [168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181]
  const middleStripArray = [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111]
  // const pathArray = [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]

  // const ratStartPosition = 167
  let ratCurrentPosition1 = 167
  let ratCurrentPosition2 = 165
  let ratCurrentPosition3 = 162
  let ratCurrentPosition4 = 158
  let ratCurrentPosition5 = 140
  let ratCurrentPosition6 = 142
  let ratCurrentPosition7 = 147
  let ratCurrentPosition8 = 124
  let ratCurrentPosition9 = 120
  let ratCurrentPosition10 = 116
  let ratCurrentPosition

  let boardCurrentPosition1 = 84
  let boardCurrentPosition2 = 85
  let boardCurrentPosition3 = 86
  let boardCurrentPosition4 = 91
  let boardCurrentPosition5 = 92
  let boardCurrentPosition6 = 93

  let boardCurrentPosition7 = 72
  let boardCurrentPosition8 = 73
  let boardCurrentPosition9 = 74
  let boardCurrentPosition10 = 75
  let boardCurrentPosition11 = 76
  let boardCurrentPosition12 = 77
  let boardCurrentPosition13 = 80
  let boardCurrentPosition14 = 81
  let boardCurrentPosition15 = 82

  let boardCurrentPosition101 = 57
  let boardCurrentPosition102 = 58
  let boardCurrentPosition103 = 59
  let boardCurrentPosition104 = 62
  let boardCurrentPosition105 = 63
  let boardCurrentPosition106 = 64
  let boardCurrentPosition107 = 67
  let boardCurrentPosition108 = 68


  

  function startGame(event) {
    console.log('>>>>>>', event.target)

    popupStart.style.display = 'none'
    popupWin.style.display = 'none'
    popupLose.style.display = 'none'


    moveRatOne(ratCurrentPosition1)
    moveRatTwo(ratCurrentPosition2)
    moveRatThree(ratCurrentPosition3)
    moveRatFour(ratCurrentPosition4)
    moveRatFive(ratCurrentPosition5)
    moveRatSix(ratCurrentPosition6)
    moveRatSeven(ratCurrentPosition7)
    moveRatEight(ratCurrentPosition8)
    moveRatNine(ratCurrentPosition9)
    moveRatTen(ratCurrentPosition10)

    moveBoardFifteen(boardCurrentPosition15)
    moveBoardFourteen(boardCurrentPosition14)
    moveBoardThirteen(boardCurrentPosition13)
    moveBoardTwelve(boardCurrentPosition12)
    moveBoardEleven(boardCurrentPosition11)
    moveBoardTen(boardCurrentPosition10)
    moveBoardNine(boardCurrentPosition9)
    moveBoardEight(boardCurrentPosition8)
    moveBoardSeven(boardCurrentPosition7)
    moveBoardSix(boardCurrentPosition6)
    moveBoardFive(boardCurrentPosition5)
    moveBoardFour(boardCurrentPosition4)
    moveBoardThree(boardCurrentPosition3)
    moveBoardTwo(boardCurrentPosition2)
    moveBoardOne(boardCurrentPosition1)

    moveCrispsEight(boardCurrentPosition108)
    moveCrispsSeven(boardCurrentPosition107)
    moveCrispsSix(boardCurrentPosition106)
    moveCrispsFive(boardCurrentPosition105)
    moveCrispsFour(boardCurrentPosition104)
    moveCrispsThree(boardCurrentPosition103)
    moveCrispsTwo(boardCurrentPosition102)
    moveCrispsOne(boardCurrentPosition101)
    
    

    snailCurrentPosition = 175
    addSnail(snailCurrentPosition)

  }

  // * Make a grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addSnail(snailStartPosition)
  }

  // * Add snail to grid
  function addSnail(position) {
    cells[position].classList.add(snailClass)
  }

  // * Remove Snail from grid
  function removeSnail(position) {
    cells[position].classList.remove(snailClass)
  }

  // * Move Snail
  function handleKeyUp(event) {
    const key = event.keyCode
    if (popupStart.style.display !== 'none' || popupLose.style.display !== 'none' || popupWin.style.display !== 'none' || cells[snailCurrentPosition].classList.contains(unsafeLandClass) === true && cells[snailCurrentPosition].classList.contains(boardClass) !== true) {
      return
    }

    removeSnail(snailCurrentPosition)
    
    if (key === 39 && snailCurrentPosition % width !== width - 1) { //cant go right
      snailCurrentPosition++
    } else if (key === 37 && snailCurrentPosition % width !== 0) { // cant go left
      snailCurrentPosition--
    } else if (key === 38 && snailCurrentPosition >= width) { // cant go up
      snailCurrentPosition -= width
    } else if (key === 40 && snailCurrentPosition + width <= height * width - 1) { // cant go down
      snailCurrentPosition += width
    } else {
      console.log('INVALID KEY')
    }
    
    addSnail(snailCurrentPosition)
    snailDie()
    snailWin()
  }

  // * Snail Die
  // if snailclass current position is same as class remove snail. 
  function snailDie() {
    console.log('snail current pos >>', snailCurrentPosition)
    if (cells[snailCurrentPosition].classList.contains(unsafeLandClass) === true && cells[snailCurrentPosition].classList.contains(ratClass) === true && cells[ratCurrentPosition].classList.contains(snailClass) === true && cells[snailCurrentPosition].classList.contains(boardClass) !== true){
      setTimeout(() => {
        popupLose.style.display = 'block'
        removeSnail(snailCurrentPosition)
        clearInterval(ratTimerOne)
        clearInterval(ratTimerTwo)
        clearInterval(ratTimerThree)
        clearInterval(ratTimerFour)
        clearInterval(ratTimerFive)
        clearInterval(ratTimerSix)
        clearInterval(ratTimerSeven)
        clearInterval(ratTimerEight)
        clearInterval(ratTimerNine)
        clearInterval(ratTimerTen)
        clearInterval(boardTimerOne)
        clearInterval(boardTimerTwo)
        clearInterval(boardTimerThree)
        clearInterval(boardTimerFour)
        clearInterval(boardTimerFive)
        clearInterval(boardTimerSix)
        clearInterval(boardTimerSeven)
        clearInterval(boardTimerEight)
        clearInterval(boardTimerNine)
        clearInterval(boardTimerTen)
        clearInterval(boardTimerEleven)
        clearInterval(boardTimerTwelve)
        clearInterval(boardTimerThirteen)
        clearInterval(boardTimerFourteen)
        clearInterval(boardTimerFifteen)
        clearInterval(crispsTimerOne)
        clearInterval(crispsTimerTwo)
        clearInterval(crispsTimerThree)
        clearInterval(crispsTimerFour)
        clearInterval(crispsTimerFive)
        clearInterval(crispsTimerSix)
        clearInterval(crispsTimerSeven)
        clearInterval(crispsTimerEight)
      }, 1000)
    } else {
      console.log('SNAIL IS SAFE')
    }
  }
  // console.log('snailDie()>>', snailDie())

  // * snail won
  // if snail current position is same as pipe class
  function snailWin() {
    console.log('snail current pos >>', snailCurrentPosition)
    if (cells[snailCurrentPosition].classList.contains(pipeClass) === true)  {
      setTimeout(() => {
        popupWin.style.display = 'block'
        removeSnail(snailCurrentPosition)
        clearInterval(ratTimerOne)
        clearInterval(ratTimerTwo)
        clearInterval(ratTimerThree)
        clearInterval(ratTimerFour)
        clearInterval(ratTimerFive)
        clearInterval(ratTimerSix)
        clearInterval(ratTimerSeven)
        clearInterval(ratTimerEight)
        clearInterval(ratTimerNine)
        clearInterval(ratTimerTen)
        clearInterval(boardTimerOne)
        clearInterval(boardTimerTwo)
        clearInterval(boardTimerThree)
        clearInterval(boardTimerFour)
        clearInterval(boardTimerFive)
        clearInterval(boardTimerSix)
        clearInterval(boardTimerSeven)
        clearInterval(boardTimerEight)
        clearInterval(boardTimerNine)
        clearInterval(boardTimerTen)
        clearInterval(boardTimerEleven)
        clearInterval(boardTimerTwelve)
        clearInterval(boardTimerThirteen)
        clearInterval(boardTimerFourteen)
        clearInterval(boardTimerFifteen)
        clearInterval(crispsTimerOne)
        clearInterval(crispsTimerTwo)
        clearInterval(crispsTimerThree)
        clearInterval(crispsTimerFour)
        clearInterval(crispsTimerFive)
        clearInterval(crispsTimerSix)
        clearInterval(crispsTimerSeven)
        clearInterval(crispsTimerEight)
      }, 800)
    }
  }
  // * animate rats land

  function moveRatOne() {
    addUnsafeClass(ratCurrentPosition1)
    addRatClass(ratCurrentPosition1)
    console.log('RAT CURRENT POSITION', ratCurrentPosition1)
    
    ratTimerOne = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition1)
      removeRatClass(ratCurrentPosition1)
      if (ratCurrentPosition1 <= 167 && ratCurrentPosition1 >= 154 + 1) {
        console.log('rat moving')
        ratCurrentPosition1--
      } else {
        console.log('rat stopped moving')
        // clearInterval(ratTimerOne) // comment out!!!
        ratCurrentPosition1 += 13
      }
      console.log('RAT UPDATED CURRENT>>', ratCurrentPosition1)
    
      addUnsafeClass(ratCurrentPosition1)
      addRatClass(ratCurrentPosition1)
    }, 800)
  }

  function moveRatTwo() {
    addUnsafeClass(ratCurrentPosition2)
    addRatClass(ratCurrentPosition2)
    console.log('RAT 2 CURRENT POSITION', ratCurrentPosition2)
    
    ratTimerTwo = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition2)
      removeRatClass(ratCurrentPosition2)
      if (ratCurrentPosition2 <= 167 && ratCurrentPosition2 >= 154 + 1) {
        console.log('rat 2 moving')
        ratCurrentPosition2--
      } else {
        console.log('rat 2 stopped moving')
        // clearInterval(ratTimerTwo) // comment out!!!
        ratCurrentPosition2 += 13
      }
      console.log('RAT 2 UPDATED CURRENT>>', ratCurrentPosition2)
    
      addUnsafeClass(ratCurrentPosition2)
      addRatClass(ratCurrentPosition2)
    }, 800)
  }

  function moveRatThree() {
    addUnsafeClass(ratCurrentPosition3)
    addRatClass(ratCurrentPosition3)
    console.log('RAT 3 CURRENT POSITION', ratCurrentPosition3)
    
    ratTimerThree = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition3)
      removeRatClass(ratCurrentPosition3)
      if (ratCurrentPosition3 <= 167 && ratCurrentPosition3 >= 154 + 1) {
        console.log('rat 3 moving')
        ratCurrentPosition3--
      } else {
        console.log('rat 3 stopped moving')
        // clearInterval(ratTimerThree) // comment out!!!
        ratCurrentPosition3 += 13
      }
      console.log('RAT 3 UPDATED CURRENT>>', ratCurrentPosition3)
    
      addUnsafeClass(ratCurrentPosition3)
      addRatClass(ratCurrentPosition3)
    }, 800)
  }

  function moveRatFour() {
    addUnsafeClass(ratCurrentPosition4)
    addRatClass(ratCurrentPosition4)
    console.log('RAT 4 CURRENT POSITION', ratCurrentPosition4)
    
    ratTimerFour = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition4)
      removeRatClass(ratCurrentPosition4)
      if (ratCurrentPosition4 <= 167 && ratCurrentPosition4 >= 154 + 1) {
        console.log('rat 4 moving')
        ratCurrentPosition4--
      } else {
        console.log('rat 4 stopped moving')
        // clearInterval(ratTimerFour) // comment out!!!
        ratCurrentPosition4 += 13
      }
      console.log('RAT 4 UPDATED CURRENT>>', ratCurrentPosition4)
    
      addUnsafeClass(ratCurrentPosition4)
      addRatClass(ratCurrentPosition4)
    }, 800)
  }

  function moveRatFive() {
    addUnsafeClass(ratCurrentPosition5)
    addRatClass(ratCurrentPosition5)
    console.log('RAT 5 CURRENT POSITION', ratCurrentPosition5)
    
    ratTimerFive = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition5)
      removeRatClass(ratCurrentPosition5)
      if (ratCurrentPosition5 <= 153-1 && ratCurrentPosition5 >= 140) {
        console.log('rat 5 moving')
        ratCurrentPosition5++
      } else {
        console.log('rat 5 stopped moving')
        // clearInterval(ratTimerFive) // comment out!!!
        ratCurrentPosition5 -= 13
      }
      console.log('RAT 5 UPDATED CURRENT>>', ratCurrentPosition5)
    
      addUnsafeClass(ratCurrentPosition5)
      addRatClass(ratCurrentPosition5)
    }, 600)
  }

  function moveRatSix() {
    addUnsafeClass(ratCurrentPosition6)
    addRatClass(ratCurrentPosition6)
    console.log('RAT 6 CURRENT POSITION', ratCurrentPosition6)
    
    ratTimerSix = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition6)
      removeRatClass(ratCurrentPosition6)
      if (ratCurrentPosition6 <= 153-1 && ratCurrentPosition6 >= 140) {
        console.log('rat 6 moving')
        ratCurrentPosition6++
      } else {
        console.log('rat 6 stopped moving')
        // clearInterval(ratTimerSix) // comment out!!!
        ratCurrentPosition6 -= 13
      }
      console.log('RAT 6 UPDATED CURRENT>>', ratCurrentPosition6)
    
      addUnsafeClass(ratCurrentPosition6)
      addRatClass(ratCurrentPosition6)
    }, 600)
  }

  function moveRatSeven() {
    addUnsafeClass(ratCurrentPosition7)
    addRatClass(ratCurrentPosition7)
    console.log('RAT 7 CURRENT POSITION', ratCurrentPosition7)
    
    ratTimerSeven = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition7)
      removeRatClass(ratCurrentPosition7)
      if (ratCurrentPosition7 <= 153-1 && ratCurrentPosition7 >= 140) {
        console.log('rat 7 moving')
        ratCurrentPosition7++
      } else {
        console.log('rat 7 stopped moving')
        // clearInterval(ratTimerSeven) // comment out!!!
        ratCurrentPosition7 -= 13
      }
      console.log('RAT 7 UPDATED CURRENT>>', ratCurrentPosition7)
    
      addUnsafeClass(ratCurrentPosition7)
      addRatClass(ratCurrentPosition7)
    }, 600)
  }

  function moveRatEight() {
    addUnsafeClass(ratCurrentPosition8)
    addRatClass(ratCurrentPosition8)
    console.log('RAT CURRENT POSITION', ratCurrentPosition8)
    
    ratTimerEight = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition8)
      removeRatClass(ratCurrentPosition8)
      if (ratCurrentPosition8 <= 125 && ratCurrentPosition8 >= 112 + 1) {
        console.log('rat moving')
        ratCurrentPosition8--
      } else {
        console.log('rat stopped moving')
        // clearInterval(ratTimerEight) // comment out!!!
        ratCurrentPosition8 += 13
      }
      console.log('RAT UPDATED CURRENT>>', ratCurrentPosition8)
    
      addUnsafeClass(ratCurrentPosition8)
      addRatClass(ratCurrentPosition8)
    }, 700)
  }

  function moveRatNine() {
    addUnsafeClass(ratCurrentPosition9)
    addRatClass(ratCurrentPosition9)
    console.log('RAT CURRENT POSITION', ratCurrentPosition9)
    
    ratTimerNine = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition9)
      removeRatClass(ratCurrentPosition9)
      if (ratCurrentPosition9 <= 125 && ratCurrentPosition9 >= 112 + 1) {
        console.log('rat moving')
        ratCurrentPosition9--
      } else {
        console.log('rat stopped moving')
        // clearInterval(ratTimerNine) // comment out!!!
        ratCurrentPosition9 += 13
      }
      console.log('RAT UPDATED CURRENT>>', ratCurrentPosition9)
    
      addUnsafeClass(ratCurrentPosition9)
      addRatClass(ratCurrentPosition9)
    }, 700)
  }

  function moveRatTen() {
    addUnsafeClass(ratCurrentPosition10)
    addRatClass(ratCurrentPosition10)
    console.log('RAT CURRENT POSITION', ratCurrentPosition10)
    
    ratTimerTen = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition10)
      removeRatClass(ratCurrentPosition10)
      if (ratCurrentPosition10 <= 125 && ratCurrentPosition10 >= 112 + 1) {
        console.log('rat moving')
        ratCurrentPosition10--
      } else {
        console.log('rat stopped moving')
        // clearInterval(ratTimerTen) // comment out!!!
        ratCurrentPosition10 += 13
      }
      console.log('RAT UPDATED CURRENT>>', ratCurrentPosition10)
    
      addUnsafeClass(ratCurrentPosition10)
      addRatClass(ratCurrentPosition10)
    }, 700)
  }
  
  function moveBoardOne() {
    addBoardClass(boardCurrentPosition1)
    addTwigStartClass(boardCurrentPosition1)
    console.log('Board 1 CURRENT POSITION', boardCurrentPosition1)
    
    boardTimerOne = setInterval(() => {

      removeBoardClass(boardCurrentPosition1)
      removeTwigStartClass(boardCurrentPosition1)
      if (boardCurrentPosition1 <= 97-1 && boardCurrentPosition1 >= 84) {
        console.log('board 1 moving')
        boardCurrentPosition1++
      } else {
        console.log('board 1 stopped moving')
        // clearInterval(boardTimerOne) // comment out!!!
        boardCurrentPosition1 -= 13
      }
      console.log('board 1 UPDATED CURRENT>>', boardCurrentPosition1)
    
      addBoardClass(boardCurrentPosition1)
      addTwigStartClass(boardCurrentPosition1)
    }, 1000)
  }
  function moveBoardTwo() {
    addBoardClass(boardCurrentPosition2)
    addTwigMiddleClass(boardCurrentPosition2)
    console.log('Board 2 CURRENT POSITION', boardCurrentPosition2)
    
    boardTimerTwo = setInterval(() => {

      removeBoardClass(boardCurrentPosition2)
      removeTwigMiddleClass(boardCurrentPosition2)
      if (boardCurrentPosition2 <= 97-1 && boardCurrentPosition2 >= 84) {
        console.log('board 2 moving')
        boardCurrentPosition2++
      } else {
        console.log('board 2 stopped moving')
        // clearInterval(boardTimerTwo) // comment out!!!
        boardCurrentPosition2 -= 13
      }
      console.log('board 2 UPDATED CURRENT>>', boardCurrentPosition2)
    
      addBoardClass(boardCurrentPosition2)
      addTwigMiddleClass(boardCurrentPosition2)
    }, 1000)
  }
  function moveBoardThree() {
    addBoardClass(boardCurrentPosition3)
    addTwigEndClass(boardCurrentPosition3)
    console.log('Board 3 CURRENT POSITION', boardCurrentPosition3)
    
    boardTimerThree = setInterval(() => {

      removeBoardClass(boardCurrentPosition3)
      removeTwigEndClass(boardCurrentPosition3)
      if (boardCurrentPosition3 <= 97-1 && boardCurrentPosition3 >= 84) {
        console.log('board 3 moving')
        boardCurrentPosition3++
      } else {
        console.log('board 3 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition3 -= 13
      }
      console.log('board 3 UPDATED CURRENT>>', boardCurrentPosition3)
    
      addBoardClass(boardCurrentPosition3)
      addTwigEndClass(boardCurrentPosition3)
    }, 1000)
  }
  
  function moveBoardFour() {
    addBoardClass(boardCurrentPosition4)
    addTwigStartClass(boardCurrentPosition4)
    console.log('Board 4 CURRENT POSITION', boardCurrentPosition4)
    
    boardTimerFour = setInterval(() => {

      removeBoardClass(boardCurrentPosition4)
      removeTwigStartClass(boardCurrentPosition4)
      if (boardCurrentPosition4 <= 97-1 && boardCurrentPosition4 >= 84) {
        console.log('board 4 moving')
        boardCurrentPosition4++
      } else {
        console.log('board 4 stopped moving')
        // clearInterval(boardTimerOne) // comment out!!!
        boardCurrentPosition4 -= 13
      }
      console.log('board 4 UPDATED CURRENT>>', boardCurrentPosition4)
    
      addBoardClass(boardCurrentPosition4)
      addTwigStartClass(boardCurrentPosition4)
    }, 1000)
  }
  function moveBoardFive() {
    addBoardClass(boardCurrentPosition5)
    addTwigMiddleClass(boardCurrentPosition5)
    console.log('Board 5 CURRENT POSITION', boardCurrentPosition5)
    
    boardTimerFive = setInterval(() => {

      removeBoardClass(boardCurrentPosition5)
      removeTwigMiddleClass(boardCurrentPosition5)
      if (boardCurrentPosition5 <= 97-1 && boardCurrentPosition5 >= 84) {
        console.log('board 5 moving')
        boardCurrentPosition5++
      } else {
        console.log('board 5 stopped moving')
        // clearInterval(boardTimerTwo) // comment out!!!
        boardCurrentPosition5 -= 13
      }
      console.log('board 5 UPDATED CURRENT>>', boardCurrentPosition5)
    
      addBoardClass(boardCurrentPosition5)
      addTwigMiddleClass(boardCurrentPosition5)
    }, 1000)
  }
  function moveBoardSix() {
    addBoardClass(boardCurrentPosition6)
    addTwigEndClass(boardCurrentPosition6)
    console.log('Board 6 CURRENT POSITION', boardCurrentPosition6)
    
    boardTimerSix = setInterval(() => {

      removeBoardClass(boardCurrentPosition6)
      removeTwigEndClass(boardCurrentPosition6)
      if (boardCurrentPosition6 <= 97-1 && boardCurrentPosition6 >= 84) {
        console.log('board 6 moving')
        boardCurrentPosition6++
      } else {
        console.log('board 6 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition6 -= 13
      }
      console.log('board 6 UPDATED CURRENT>>', boardCurrentPosition6)
    
      addBoardClass(boardCurrentPosition6)
      addTwigEndClass(boardCurrentPosition6)
    }, 1000)
  }

  function moveBoardSeven() {
    addBoardClass(boardCurrentPosition7)
    addTwigStartClass(boardCurrentPosition7)
    console.log('Board 7 CURRENT POSITION', boardCurrentPosition7)
    
    boardTimerSeven = setInterval(() => {

      removeBoardClass(boardCurrentPosition7)
      removeTwigStartClass(boardCurrentPosition7)
      if (boardCurrentPosition7 <= 83 && boardCurrentPosition7 >= 70 + 1) {
        console.log('board 7 moving')
        boardCurrentPosition7--
      } else {
        console.log('board 7 stopped moving')
        // clearInterval(boardTimerOne) // comment out!!!
        boardCurrentPosition7 += 13
      }
      console.log('board 7 UPDATED CURRENT>>', boardCurrentPosition7)
    
      addBoardClass(boardCurrentPosition7)
      addTwigStartClass(boardCurrentPosition7)
    }, 1000)
  }
  function moveBoardEight() {
    addBoardClass(boardCurrentPosition8)
    addTwigMiddleClass(boardCurrentPosition8)
    console.log('Board 5 CURRENT POSITION', boardCurrentPosition8)
    
    boardTimerEight = setInterval(() => {

      removeBoardClass(boardCurrentPosition8)
      removeTwigMiddleClass(boardCurrentPosition8)
      if (boardCurrentPosition8 <= 83 && boardCurrentPosition8 >= 70 + 1) {
        console.log('board 8 moving')
        boardCurrentPosition8--
      } else {
        console.log('board 8 stopped moving')
        // clearInterval(boardTimerTwo) // comment out!!!
        boardCurrentPosition8 += 13
      }
      console.log('board 8 UPDATED CURRENT>>', boardCurrentPosition8)
    
      addBoardClass(boardCurrentPosition8)
      addTwigMiddleClass(boardCurrentPosition8)
    }, 1000)
  }
  function moveBoardNine() {
    addBoardClass(boardCurrentPosition9)
    addTwigEndClass(boardCurrentPosition9)
    console.log('Board 9 CURRENT POSITION', boardCurrentPosition9)
    
    boardTimerNine = setInterval(() => {

      removeBoardClass(boardCurrentPosition9)
      removeTwigEndClass(boardCurrentPosition9)
      if (boardCurrentPosition9 <= 83 && boardCurrentPosition9 >= 70 + 1) {
        console.log('board 9 moving')
        boardCurrentPosition9--
      } else {
        console.log('board 9 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition9 += 13
      }
      console.log('board 9 UPDATED CURRENT>>', boardCurrentPosition9)
    
      addBoardClass(boardCurrentPosition9)
      addTwigEndClass(boardCurrentPosition9)
    }, 1000)
  }
  function moveBoardTen() {
    addBoardClass(boardCurrentPosition10)
    addTwigStartClass(boardCurrentPosition10)
    console.log('Board 10 CURRENT POSITION', boardCurrentPosition10)
    
    boardTimerTen = setInterval(() => {

      removeBoardClass(boardCurrentPosition10)
      removeTwigStartClass(boardCurrentPosition10)
      if (boardCurrentPosition10 <= 83 && boardCurrentPosition10 >= 70 + 1) {
        console.log('board 10 moving')
        boardCurrentPosition10--
      } else {
        console.log('board 10 stopped moving')
        // clearInterval(boardTimerOne) // comment out!!!
        boardCurrentPosition10 += 13
      }
      console.log('board 10 UPDATED CURRENT>>', boardCurrentPosition10)
    
      addBoardClass(boardCurrentPosition10)
      addTwigStartClass(boardCurrentPosition10)
    }, 1000)
  }
  function moveBoardEleven() {
    addBoardClass(boardCurrentPosition11)
    addTwigMiddleClass(boardCurrentPosition11)
    console.log('Board 11 CURRENT POSITION', boardCurrentPosition11)
    
    boardTimerEleven = setInterval(() => {

      removeBoardClass(boardCurrentPosition11)
      removeTwigMiddleClass(boardCurrentPosition11)
      if (boardCurrentPosition11 <= 83 && boardCurrentPosition11 >= 70 +1) {
        console.log('board 11 moving')
        boardCurrentPosition11--
      } else {
        console.log('board 11 stopped moving')
        // clearInterval(boardTimerTwo) // comment out!!!
        boardCurrentPosition11 += 13
      }
      console.log('board 11 UPDATED CURRENT>>', boardCurrentPosition11)
    
      addBoardClass(boardCurrentPosition11)
      addTwigMiddleClass(boardCurrentPosition11)
    }, 1000)
  }
  function moveBoardTwelve() {
    addBoardClass(boardCurrentPosition12)
    addTwigEndClass(boardCurrentPosition12)
    console.log('Board 12 CURRENT POSITION', boardCurrentPosition12)
    
    boardTimerTwelve = setInterval(() => {

      removeBoardClass(boardCurrentPosition12)
      removeTwigEndClass(boardCurrentPosition12)
      if (boardCurrentPosition12 <= 83 && boardCurrentPosition12 >= 70 + 1) {
        console.log('board 12 moving')
        boardCurrentPosition12--
      } else {
        console.log('board 12 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition12 += 13
      }
      console.log('board 9 UPDATED CURRENT>>', boardCurrentPosition12)
    
      addBoardClass(boardCurrentPosition12)
      addTwigEndClass(boardCurrentPosition12)
    }, 1000)
  }
  function moveBoardThirteen() {
    addBoardClass(boardCurrentPosition13)
    addTwigStartClass(boardCurrentPosition13)
    console.log('Board 13 CURRENT POSITION', boardCurrentPosition13)
    
    boardTimerThirteen = setInterval(() => {

      removeBoardClass(boardCurrentPosition13)
      removeTwigStartClass(boardCurrentPosition13)
      if (boardCurrentPosition13 <= 83 && boardCurrentPosition13 >= 70 + 1) {
        console.log('board 13 moving')
        boardCurrentPosition13--
      } else {
        console.log('board 13 stopped moving')
        // clearInterval(boardTimerOne) // comment out!!!
        boardCurrentPosition13 += 13
      }
      console.log('board 13 UPDATED CURRENT>>', boardCurrentPosition13)
    
      addBoardClass(boardCurrentPosition13)
      addTwigStartClass(boardCurrentPosition13)
    }, 1000)
  }
  function moveBoardFourteen() {
    addBoardClass(boardCurrentPosition14)
    addTwigMiddleClass(boardCurrentPosition14)
    console.log('Board 14 CURRENT POSITION', boardCurrentPosition14)
    
    boardTimerFourteen = setInterval(() => {

      removeBoardClass(boardCurrentPosition14)
      removeTwigMiddleClass(boardCurrentPosition14)
      if (boardCurrentPosition14 <= 83 && boardCurrentPosition14 >= 70 + 1) {
        console.log('board 14 moving')
        boardCurrentPosition14--
      } else {
        console.log('board 14 stopped moving')
        // clearInterval(boardTimerTwo) // comment out!!!
        boardCurrentPosition14 += 13
      }
      console.log('board 14 UPDATED CURRENT>>', boardCurrentPosition14)
    
      addBoardClass(boardCurrentPosition14)
      addTwigMiddleClass(boardCurrentPosition14)
    }, 1000)
  }
  function moveBoardFifteen() {
    addBoardClass(boardCurrentPosition15)
    addTwigEndClass(boardCurrentPosition15)
    console.log('Board 15 CURRENT POSITION', boardCurrentPosition15)
    
    boardTimerFifteen = setInterval(() => {

      removeBoardClass(boardCurrentPosition15)
      removeTwigEndClass(boardCurrentPosition15)
      if (boardCurrentPosition15 <= 83 && boardCurrentPosition15 >= 70 + 1) {
        console.log('board 15 moving')
        boardCurrentPosition15--
      } else {
        console.log('board 15 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition15 += 13
      }
      console.log('board 15 UPDATED CURRENT>>', boardCurrentPosition15)
    
      addBoardClass(boardCurrentPosition15)
      addTwigEndClass(boardCurrentPosition15)
    }, 1000)
  }


  function moveCrispsOne() {
    addBoardClass(boardCurrentPosition101)
    addCrispsClass(boardCurrentPosition101)
    console.log('Board 15 CURRENT POSITION', boardCurrentPosition101)
    
    crispsTimerOne = setInterval(() => {

      removeCrispsClass(boardCurrentPosition101)
      removeBoardClass(boardCurrentPosition101)
      if (boardCurrentPosition101 <= 69 - 1 && boardCurrentPosition101 >= 56) {
        console.log('crisps 1 moving')
        boardCurrentPosition101++
      } else {
        console.log('crisps 1 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition101 -= 13
      }
      console.log('crisps 1 UPDATED CURRENT>>', boardCurrentPosition101)
    
      addBoardClass(boardCurrentPosition101)
      addCrispsClass(boardCurrentPosition101)
    }, 800)
  }
  function moveCrispsTwo() {
    addBoardClass(boardCurrentPosition102)
    addCrispsClass(boardCurrentPosition102)
    console.log('Board 15 CURRENT POSITION', boardCurrentPosition102)
    
    crispsTimerTwo = setInterval(() => {

      removeCrispsClass(boardCurrentPosition102)
      removeBoardClass(boardCurrentPosition102)
      if (boardCurrentPosition102 <= 69 - 1 && boardCurrentPosition102 >= 56) {
        console.log('crisps 1 moving')
        boardCurrentPosition102++
      } else {
        console.log('crisps 1 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition102 -= 13
      }
      console.log('crisps 1 UPDATED CURRENT>>', boardCurrentPosition102)
    
      addBoardClass(boardCurrentPosition102)
      addCrispsClass(boardCurrentPosition102)
    }, 800)
  }
  function moveCrispsThree() {
    addBoardClass(boardCurrentPosition103)
    addCrispsClass(boardCurrentPosition103)
    console.log('Board 15 CURRENT POSITION', boardCurrentPosition103)
    
    crispsTimerThree = setInterval(() => {

      removeCrispsClass(boardCurrentPosition103)
      removeBoardClass(boardCurrentPosition103)
      if (boardCurrentPosition103 <= 69 - 1 && boardCurrentPosition103 >= 56) {
        console.log('crisps 1 moving')
        boardCurrentPosition103++
      } else {
        console.log('crisps 1 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition103 -= 13
      }
      console.log('crisps 1 UPDATED CURRENT>>', boardCurrentPosition103)
    
      addBoardClass(boardCurrentPosition103)
      addCrispsClass(boardCurrentPosition103)
    }, 800)
  }
  function moveCrispsFour() {
    addBoardClass(boardCurrentPosition104)
    addCrispsClass(boardCurrentPosition104)
    console.log('Board 15 CURRENT POSITION', boardCurrentPosition104)
    
    crispsTimerFour = setInterval(() => {

      removeCrispsClass(boardCurrentPosition104)
      removeBoardClass(boardCurrentPosition104)
      if (boardCurrentPosition104 <= 69 - 1 && boardCurrentPosition104 >= 56) {
        console.log('crisps 1 moving')
        boardCurrentPosition104++
      } else {
        console.log('crisps 1 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition104 -= 13
      }
      console.log('crisps 1 UPDATED CURRENT>>', boardCurrentPosition104)
    
      addBoardClass(boardCurrentPosition104)
      addCrispsClass(boardCurrentPosition104)
    }, 800)
  }
  function moveCrispsFive() {
    addBoardClass(boardCurrentPosition105)
    addCrispsClass(boardCurrentPosition105)
    console.log('Board 15 CURRENT POSITION', boardCurrentPosition105)
    
    crispsTimerFive = setInterval(() => {

      removeCrispsClass(boardCurrentPosition105)
      removeBoardClass(boardCurrentPosition105)
      if (boardCurrentPosition105 <= 69 - 1 && boardCurrentPosition105 >= 56) {
        console.log('crisps 1 moving')
        boardCurrentPosition105++
      } else {
        console.log('crisps 1 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition105 -= 13
      }
      console.log('crisps 1 UPDATED CURRENT>>', boardCurrentPosition105)
    
      addBoardClass(boardCurrentPosition105)
      addCrispsClass(boardCurrentPosition105)
    }, 800)
  }
  function moveCrispsSix() {
    addBoardClass(boardCurrentPosition106)
    addCrispsClass(boardCurrentPosition106)
    console.log('Board 15 CURRENT POSITION', boardCurrentPosition106)
    
    crispsTimerSix = setInterval(() => {

      removeCrispsClass(boardCurrentPosition106)
      removeBoardClass(boardCurrentPosition106)
      if (boardCurrentPosition106 <= 69 - 1 && boardCurrentPosition106 >= 56) {
        console.log('crisps 1 moving')
        boardCurrentPosition106++
      } else {
        console.log('crisps 1 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition106 -= 13
      }
      console.log('crisps 1 UPDATED CURRENT>>', boardCurrentPosition106)
    
      addBoardClass(boardCurrentPosition106)
      addCrispsClass(boardCurrentPosition106)
    }, 800)
  }
  function moveCrispsSeven() {
    addBoardClass(boardCurrentPosition107)
    addCrispsClass(boardCurrentPosition107)
    console.log('Board 15 CURRENT POSITION', boardCurrentPosition107)
    
    crispsTimerSeven = setInterval(() => {

      removeCrispsClass(boardCurrentPosition107)
      removeBoardClass(boardCurrentPosition107)
      if (boardCurrentPosition107 <= 69 - 1 && boardCurrentPosition107 >= 56) {
        console.log('crisps 1 moving')
        boardCurrentPosition107++
      } else {
        console.log('crisps 1 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition107 -= 13
      }
      console.log('crisps 1 UPDATED CURRENT>>', boardCurrentPosition107)
    
      addBoardClass(boardCurrentPosition107)
      addCrispsClass(boardCurrentPosition107)
    }, 800)
  }
  function moveCrispsEight() {
    addBoardClass(boardCurrentPosition108)
    addCrispsClass(boardCurrentPosition108)
    console.log('Board 15 CURRENT POSITION', boardCurrentPosition108)
    
    crispsTimerEight = setInterval(() => {

      removeCrispsClass(boardCurrentPosition108)
      removeBoardClass(boardCurrentPosition108)
      if (boardCurrentPosition108 <= 69 - 1 && boardCurrentPosition108 >= 56) {
        console.log('crisps 1 moving')
        boardCurrentPosition108++
      } else {
        console.log('crisps 1 stopped moving')
        // clearInterval(boardTimerThree) // comment out!!!
        boardCurrentPosition108 -= 13
      }
      console.log('crisps 1 UPDATED CURRENT>>', boardCurrentPosition108)
    
      addBoardClass(boardCurrentPosition108)
      addCrispsClass(boardCurrentPosition108)
    }, 800)
  }

  // * animate rat smoothly test

  // const rat = document.getElementById('#rat')
  // let start = Date.now()

  // let timer = setInterval(() => {
  //   let timePassed = Date.now() - start
  //   rat.style.left = timePassed / 5 + 'px'
  //   if (timePassed >= 2000) clearInterval(timer)
  // }, 20)


  // * Add rat to grid
  // function addRat(position) {
  //   cells[position].classList.add(ratClass)
  // }

  // * Remove rat from grid
  // function removeRat(position) {
  //   cells[position].classList.remove(ratClass)
  // }

  // * timers for rats
  // const ratInterval = setInterval(() => {
  //   addRat(ratCurrentPosition)
  //   removeRat(ratCurrentPosition)
  //   ratCurrentPosition--
  // }, 1000)

  // * timers for crisp packets

  // * timers for logs

  // * add fire
  function addFireClass(position) {
    cells[position].classList.add(fireClass)
  }

  // * add holes
  function addHoleClass(position) {
    cells[position].classList.add(holeClass)
  }

  // * add pipes
  function addPipeClass(position) {
    cells[position].classList.add(pipeClass)
  }
  // * add pipe body
  function addPipeBodyClass(position) {
    cells[position].classList.add(pipeBodyClass)
  }

  // * add start strip
  function addStartStripClass(positions) {
    positions.forEach(item => cells[item].classList.add(startStripClass))
  }

  // * add road
  function addRoadClass(positions) {
    positions.forEach(item => cells[item].classList.add(roadClass))
  }

  // * add middle strip
  function addMiddleStripClass(positions) {
    positions.forEach(item => cells[item].classList.add(middleStripClass))
  }
  
  // * add water
  function addWaterClass(positions) {
    positions.forEach(item => cells[item].classList.add(waterClass))
  }

  // * add path
  function addPathClass(positions) {
    positions.forEach(item => cells[item].classList.add(pathClass))
  }

  // * Add safe land class to cells
  // function addSafeLandClass(args) {
  //   cells[args].classList.add(safeLandClass)
  //   console.log('ARGS>>', args)
  // }

  // * Add unsafe land class to cells
  function addUnsafeLandClass(positions) {
    positions.forEach(item => cells[item].classList.add(unsafeLandClass))
  }

  function addUnsafeClass(position) {
    cells[position].classList.add(unsafeClass)
  }

  // * remove unsafe land class from cells

  // function removeUnsafeLandClass(positions) {
  //   positions.forEach(item => cells[item].classList.remove(unsafeLandClass))
  // }

  function removeUnsafeClass(position) {
    cells[position].classList.remove(unsafeClass)
  }

  // * add boardClass
  function addBoardClass(position) {
    cells[position].classList.add(boardClass)
  }
  // * remove board Class
  function removeBoardClass(position) {
    cells[position].classList.remove(boardClass)
  }

  // * add and remove Crisps
  function addCrispsClass(position) {
    cells[position].classList.add(crispsClass)
  }
  function removeCrispsClass(position) {
    cells[position].classList.remove(crispsClass)
  }

  // * add & remove twig start
  function addTwigStartClass(position) {
    cells[position].classList.add(twigStartClass)
  }
  function removeTwigStartClass(position) {
    cells[position].classList.remove(twigStartClass)
  }

  // * add & remove twig middle
  function addTwigMiddleClass(position) {
    cells[position].classList.add(twigMiddleClass)
  }
  function removeTwigMiddleClass(position) {
    cells[position].classList.remove(twigMiddleClass)
  }

  // * add & remove twig end
  function addTwigEndClass(position) {
    cells[position].classList.add(twigEndClass)
  }
  function removeTwigEndClass(position) {
    cells[position].classList.remove(twigEndClass)
  }

  // * Add rat Class to cells
  function addRatClass(position) {
    cells[position].classList.add(ratClass)
  }
  // * Remove Rat Class from cells
  function removeRatClass(position) {
    cells[position].classList.remove(ratClass)
  }
  

  // * Event Listeners, calling functions

  startButton.addEventListener('click', startGame)

  restartButton.forEach((rbutton)=> {
    rbutton.addEventListener('click', startGame)
  })
  document.addEventListener('keyup', handleKeyUp)
  createGrid(gridStartPosition)


  // addSafeLandClass(181)

  addFireClass(137)

  addHoleClass(127)
  addHoleClass(131)

  addPipeClass(44)
  addPipeClass(47)
  addPipeClass(49)
  addPipeClass(52)
  addPipeClass(55)

  addPipeBodyClass(2)
  addPipeBodyClass(5)
  addPipeBodyClass(7)
  addPipeBodyClass(10)
  addPipeBodyClass(13)
  addPipeBodyClass(16)
  addPipeBodyClass(19)
  addPipeBodyClass(21)
  addPipeBodyClass(24)
  addPipeBodyClass(27)
  addPipeBodyClass(30)
  addPipeBodyClass(33)
  addPipeBodyClass(35)
  addPipeBodyClass(38)
  addPipeBodyClass(41)

  addUnsafeLandClass(unsafeLandArray)
  addStartStripClass(startStripArray)
  addRoadClass(roadArray)
  addMiddleStripClass(middleStripArray)
  addWaterClass(waterArray)
  // addPathClass(pathArray)
  





  //on page load open up start game div







  //! bracket should be yellow
}


window.addEventListener('DOMContentLoaded', init);