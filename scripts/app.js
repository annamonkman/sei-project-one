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

  // const safeLandClass = 'safe'
  // const safeLand = [210, 211, 212]
  // console.log('SAFESTARTLAND', safeLand)

  const unsafeLandClass = 'unsafe'
  // const unsafeLand = [14, 15, 16] // this is an object typeof

  // const ratClass = 'unsafe'
  // const ratStartPosition = 167
  // let ratCurrentPosition = 167

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
  }

  // * check if snail safe
  // if snailclass current position is same as class remove snail. 
  function snailDie() {
    if (cells[snailCurrentPosition].classList.contains(unsafeLandClass && snailClass) === true) {
      removeSnail()
    } else {
      console.log('SNAIL IS SAFE')
    }
  }
  console.log('snailDie()>>', snailDie())

  
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







//on page load open up start game div







  //! bracket should be yellow
}


window.addEventListener('DOMContentLoaded', init);