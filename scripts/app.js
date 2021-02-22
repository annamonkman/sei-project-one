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

  // const safeLandClass = 'safe'
  // const safeLand = [210, 211, 212]
  // console.log('SAFESTARTLAND', safeLand)

  const unsafeLandClass = 'unsafe'
  // const unsafeLand = [14, 15, 16] // this is an object typeof

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

  // * Add safe land class to cells
  // function addSafeLandClass(args) {
  //   cells[args].classList.add(safeLandClass)
  //   console.log('ARGS>>', args)
  // }

  // * Add unsafe land class to cells
  function addUnsafeLandClass(position) {
    cells[position].classList.add(unsafeLandClass)
  }

  // * remove unsafe land class from cells
  function removeUnsafeLandClass(position) {
    cells[position].classList.remove(unsafeLandClass)
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
    if (cells[snailCurrentPosition].classList.contains(unsafeLandClass) === true)  {
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
    addUnsafeLandClass(ratCurrentPosition)
    console.log('RAT CURRENT POSITION', ratCurrentPosition)
    
    ratTimer = setInterval(() => {

      removeUnsafeLandClass(ratCurrentPosition)
      if (ratCurrentPosition <= 167 && ratCurrentPosition >= 154 + 1) {
        ratCurrentPosition--
      } else {
        clearInterval(ratTimer)
      }
      console.log('RAT UPDATED CURRENT>>', ratCurrentPosition)
    
      addUnsafeLandClass(ratCurrentPosition)

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

  // * add land strip

  // * add road

  // * add water
  

  // * Event Listeners, calling functions
  document.addEventListener('keyup', handleKeyUp)
  createGrid(gridStartPosition)

  moveRat(ratCurrentPosition)
  // addSafeLandClass(safeLand)

  // addUnsafeLandClass(unsafeLand)

  // addSafeLandClass(181)
  // addSafeLandClass(180)
  // addSafeLandClass(179)
  // addSafeLandClass(178)
  // addSafeLandClass(177)
  // addSafeLandClass(176)
  // addSafeLandClass(175)
  // addSafeLandClass(174)
  // addSafeLandClass(173)
  // addSafeLandClass(172)  
  // addSafeLandClass(171)
  // addSafeLandClass(170)
  // addSafeLandClass(169)
  // addSafeLandClass(168)

  addUnsafeLandClass(28)
  addUnsafeLandClass(29)
  addUnsafeLandClass(30)
  addUnsafeLandClass(31)
  addUnsafeLandClass(32)
  addUnsafeLandClass(33)
  addUnsafeLandClass(34)
  addUnsafeLandClass(35)
  addUnsafeLandClass(36)
  addUnsafeLandClass(37)
  addUnsafeLandClass(38)
  addUnsafeLandClass(39)
  addUnsafeLandClass(40)
  addUnsafeLandClass(41)
  addUnsafeLandClass(42)
  addUnsafeLandClass(43)
  addUnsafeLandClass(44)
  addUnsafeLandClass(45)
  addUnsafeLandClass(46)
  addUnsafeLandClass(47)
  addUnsafeLandClass(48)
  addUnsafeLandClass(49)
  addUnsafeLandClass(50)
  addUnsafeLandClass(51)
  addUnsafeLandClass(52)
  addUnsafeLandClass(53)
  addUnsafeLandClass(54)
  addUnsafeLandClass(55)
  addUnsafeLandClass(56)
  addUnsafeLandClass(57)
  addUnsafeLandClass(58)
  addUnsafeLandClass(59)
  addUnsafeLandClass(60)
  addUnsafeLandClass(61)
  addUnsafeLandClass(62)
  addUnsafeLandClass(63)
  addUnsafeLandClass(64)
  addUnsafeLandClass(65)
  addUnsafeLandClass(66)
  addUnsafeLandClass(67)
  addUnsafeLandClass(68)
  addUnsafeLandClass(69)
  addUnsafeLandClass(70)
  addUnsafeLandClass(71)
  addUnsafeLandClass(72)
  addUnsafeLandClass(73)
  addUnsafeLandClass(74)
  addUnsafeLandClass(75)
  addUnsafeLandClass(76)
  addUnsafeLandClass(77)
  addUnsafeLandClass(78)
  addUnsafeLandClass(79)
  addUnsafeLandClass(80)
  addUnsafeLandClass(81)
  addUnsafeLandClass(82)
  addUnsafeLandClass(83)
  addUnsafeLandClass(84)
  addUnsafeLandClass(85)
  addUnsafeLandClass(86)
  addUnsafeLandClass(87)
  addUnsafeLandClass(88)
  addUnsafeLandClass(89)
  addUnsafeLandClass(90)
  addUnsafeLandClass(91)
  addUnsafeLandClass(92)
  addUnsafeLandClass(93)
  addUnsafeLandClass(94)
  addUnsafeLandClass(95)
  addUnsafeLandClass(96)
  addUnsafeLandClass(97)











//on page load open up start game div







  //! bracket should be yellow
}


window.addEventListener('DOMContentLoaded', init);