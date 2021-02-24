function init() {
  console.log('CONTENT LOADED')

  // * Variables
  const grid = document.querySelector('.grid')

  const width = 14
  const height = 13
  const cellCount = width * height
  const cells = []

  const startButton = document.querySelector('.start-button')

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
  let ratTimerEleven
  let ratTimerTwelve
  let ratTimerThirteen
  let ratTimerFourteen

  const unsafeLandClass = 'unsafe'
  const unsafeClass = 'unsafe'
  const ratClass = 'rat'
  const roadClass = 'road'
  const waterClass = 'water'
  const pipeClass = 'pipe'
  const startStripClass = 'start-strip'
  const middleStripClass = 'middle-strip'
  const holeClass = 'hole'
  const fireClass = 'fire'
  const crispsClass = 'crisp-packet'
  const twigClass = 'twig'

  const unsafeLandArray = [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 22, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 127, 131, 137]
  const roadArray = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167]
  const waterArray = [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 22, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97]
  const startStripArray = [168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181]
  const middleStripArray = [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111]

  // const ratStartPosition = 167
  let ratCurrentPosition1 = 167
  let ratCurrentPosition2 = 165
  let ratCurrentPosition3 = 162
  let ratCurrentPosition4 = 158
  let ratCurrentPosition5 = 152
  let ratCurrentPosition6 = 149
  let ratCurrentPosition7 = 145
  let ratCurrentPosition8 = 142
  let ratCurrentPosition9 = 141
  let ratCurrentPosition10 = 124
  let ratCurrentPosition11 = 123
  let ratCurrentPosition12 = 119
  let ratCurrentPosition13 = 117
  let ratCurrentPosition14 = 112

  function startGame() {
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
    moveRatEleven(ratCurrentPosition11)
    moveRatTwelve(ratCurrentPosition12)
    moveRatThirteen(ratCurrentPosition13)
    moveRatFourteen(ratCurrentPosition14)

  }

  // * Make a grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
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
    if (popupStart.style.display !== 'none' && popupLose.style.display !== 'none') {
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
    if (cells[snailCurrentPosition].classList.contains(unsafeLandClass) === true || cells[snailCurrentPosition].classList.contains(unsafeClass))/* === true || cells[snailCurrentPosition].classList.contains(ratClass) === true*/{
      setTimeout(() => {
        popupLose.style.display = 'block'
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
      }, 1000)
    }
  }
  // * animate rats land

  function moveRatOne() {
    addUnsafeClass(ratCurrentPosition1)
    console.log('RAT CURRENT POSITION', ratCurrentPosition1)
    
    ratTimerOne = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition1)
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
    }, 500)
  }

  function moveRatTwo() {
    addUnsafeClass(ratCurrentPosition2)
    console.log('RAT 2 CURRENT POSITION', ratCurrentPosition2)
    
    ratTimerTwo = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition2)
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
    }, 500)
  }

  function moveRatThree() {
    addUnsafeClass(ratCurrentPosition3)
    console.log('RAT 3 CURRENT POSITION', ratCurrentPosition3)
    
    ratTimerThree = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition3)
      if (ratCurrentPosition3 <= 167 && ratCurrentPosition3 >= 154 + 1) {
        console.log('rat 3 moving')
        ratCurrentPosition3--
      } else {
        console.log('rat 3 stopped moving')
        // clearInterval(ratTimerThree) // comment out!!!
        ratCurrentPosition3 += 13
      }
      console.log('RAT 3 UPDATED CURRENT>>', ratCurrentPosition3)
    
      addUnsafeClass(ratCurrentPosition2)
    }, 500)
  }

  function moveRatFour() {
    addUnsafeClass(ratCurrentPosition4)
    console.log('RAT 4 CURRENT POSITION', ratCurrentPosition4)
    
    ratTimerFour = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition4)
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
    }, 500)
  }

  function moveRatFive() {
    addUnsafeClass(ratCurrentPosition5)
    console.log('RAT 5 CURRENT POSITION', ratCurrentPosition5)
    
    ratTimerFive = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition5)
      if (ratCurrentPosition5 <= 153 && ratCurrentPosition5 >= 140 + 1) {
        console.log('rat 5 moving')
        ratCurrentPosition5++
      } else {
        console.log('rat 5 stopped moving')
        // clearInterval(ratTimerFive) // comment out!!!
        ratCurrentPosition5 -= 13
      }
      console.log('RAT 5 UPDATED CURRENT>>', ratCurrentPosition5)
    
      addUnsafeClass(ratCurrentPosition5)
    }, 500)
  }

  function moveRatSix() {
    addUnsafeClass(ratCurrentPosition6)
    console.log('RAT 6 CURRENT POSITION', ratCurrentPosition6)
    
    ratTimerSix = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition6)
      if (ratCurrentPosition6 <= 153 && ratCurrentPosition6 >= 140 + 1) {
        console.log('rat 6 moving')
        ratCurrentPosition6++
      } else {
        console.log('rat 6 stopped moving')
        // clearInterval(ratTimerSix) // comment out!!!
        ratCurrentPosition6 -= 13
      }
      console.log('RAT 6 UPDATED CURRENT>>', ratCurrentPosition6)
    
      addUnsafeClass(ratCurrentPosition6)
    }, 500)
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
  

  // * Event Listeners, calling functions

  startButton.addEventListener('click', startGame)

  document.addEventListener('keyup', handleKeyUp)
  createGrid(gridStartPosition)


  // addSafeLandClass(181)

  addFireClass(137)
  addHoleClass(127)
  addHoleClass(131)
  addPipeClass(2)
  addPipeClass(16)
  addPipeClass(5)
  addPipeClass(19)
  addPipeClass(7)
  addPipeClass(21)
  addPipeClass(10)
  addPipeClass(24)
  addPipeClass(13)
  addPipeClass(27)

  addUnsafeLandClass(unsafeLandArray)
  addStartStripClass(startStripArray)
  addRoadClass(roadArray)
  addMiddleStripClass(middleStripArray)
  addWaterClass(waterArray)
  





  //on page load open up start game div







  //! bracket should be yellow
}


window.addEventListener('DOMContentLoaded', init);