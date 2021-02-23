function init() {
  console.log('CONTENT LOADED')

  // * Variables
  const grid = document.querySelector('.grid')

  const width = 14
  const height = 13
  const cellCount = width * height
  const cells = []

  const snailClass = 'snail'
  const snailStartPosition = 175
  const gridStartPosition = 0
  let snailCurrentPosition = 175

  let ratTimer

  const unsafeLandClass = 'unsafe'
  const unsafeClass = 'unsafe'
  const roadClass = 'road'
  const waterClass = 'water'
  const pipeClass = 'pipe'
  const startStripClass = 'start-strip'
  const middleStripClass = 'middle-strip'

  const unsafeLandArray = [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 22, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97]
  const roadArray = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167]
  const waterArray = [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 22, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97]
  const startStripArray = [168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181]
  const middleStripArray = [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111]
  // const safeLandClass = 'safe'
  // const safeLand = [210, 211, 212]
  // console.log('SAFESTARTLAND', safeLand)


  // const ratClass = 'unsafe'
  const ratStartPosition = 167
  let ratCurrentPosition = 167

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
  }

  // * check if snail safe
  // if snailclass current position is same as class remove snail. 
  function snailDie() {
    console.log('snail current pos >>', snailCurrentPosition)
    if (cells[snailCurrentPosition].classList.contains(unsafeLandClass) === true || cells[snailCurrentPosition].classList.contains(unsafeClass))  {
      setTimeout(() => {
        window.alert('snail died')
      }, 1000)
    } else {
      console.log('SNAIL IS SAFE')
    }
  }
  // console.log('snailDie()>>', snailDie())

  // * animate unsafe land

  function moveRat() {
    addUnsafeClass(ratCurrentPosition)
    console.log('RAT CURRENT POSITION', ratCurrentPosition)
    
    ratTimer = setInterval(() => {

      removeUnsafeClass(ratCurrentPosition)
      if (ratCurrentPosition <= 167 && ratCurrentPosition >= 154 + 1) {
        console.log('rat moving')
        ratCurrentPosition--
      } else {
        console.log('rat stopped moving')
        clearInterval(ratTimer) // comment out!!!
        ratCurrentPosition += 13
      }
      console.log('RAT UPDATED CURRENT>>', ratCurrentPosition)
    
      addUnsafeClass(ratCurrentPosition)

    }, 800)

  }
    
    


  // * aniamte rat smoothly test

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

  // * add holes

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

  document.addEventListener('keyup', handleKeyUp)
  createGrid(gridStartPosition)

  moveRat(ratCurrentPosition)

  // addSafeLandClass(181)

  
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