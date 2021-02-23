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

  const roadClass = 'road'
  const pipeClass = 'pipe'

  const roadArray = [112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167]

  // const safeLandClass = 'safe'
  // const safeLand = [210, 211, 212]
  // console.log('SAFESTARTLAND', safeLand)

  const unsafeLandClass = 'unsafe'
  const unsafeLandArray = [0, 1, 3, 4, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 22, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, ]
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
        console.log('rat moving')
        ratCurrentPosition--
      } else {
        console.log('rat stopped moving')
        clearInterval(ratTimer) // comment out!!!
        ratCurrentPosition += 13
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
  function addPipeClass(position) {
    cells[position].classList.add(pipeClass)
  }

  // * add land strip

  // * add road
  function addRoadClass(position) {
    cells.forEach(cell => {
      cell[position].classList.add(roadClass)
      console.log('Added road class for each')
    })
  }
  addRoadClass(roadArray)
  console.log('ROAD ARRAY', roadArray)

  // for (let i = 112; i <= 167; i++) {
  //   // cells[i].classList.add(roadClass)
  //   addRoadClass(i)
  // }



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
  addUnsafeLandClass(0)
  addUnsafeLandClass(1)
  addUnsafeLandClass(14)
  addUnsafeLandClass(15)
  addUnsafeLandClass(97)
  addUnsafeLandClass(3)
  addUnsafeLandClass(17)
  addUnsafeLandClass(4)
  addUnsafeLandClass(18)
  addUnsafeLandClass(6)
  addUnsafeLandClass(20)
  addUnsafeLandClass(8)
  addUnsafeLandClass(9)
  addUnsafeLandClass(22)
  addUnsafeLandClass(23)
  addUnsafeLandClass(11)
  addUnsafeLandClass(12)
  addUnsafeLandClass(25)
  addUnsafeLandClass(26)
  addUnsafeLandClass(128)
  addUnsafeLandClass(117)
  addUnsafeLandClass(121)
  addUnsafeLandClass(122)
  addUnsafeLandClass(135)
  addUnsafeLandClass(136)
  addUnsafeLandClass(138)


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








//on page load open up start game div







  //! bracket should be yellow
}


window.addEventListener('DOMContentLoaded', init);