function init() {
  console.log('CONTENT LOADED')

  // * Variables
  const grid = document.querySelector('.grid')

  const width = 14
  const height = 16
  const cellCount = width * height
  const cells = []

  const snailClass = 'snail'
  const snailStartPosition = 217
  const gridStartPosition = 0
  let snailCurrentPosition = 217

  const safeStartLandClass = 'safe-start-land'

  // * Make a grid
  function createGrid(gridStartPosition) {
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
  }

  // * Add safe start land to grid
  // function addSafeStartLandClass(position) {
  //   cells[position].classList.add(safeStartLandClass)
  // }

  // * Event Listeners
  document.addEventListener('keyup', handleKeyUp)
  createGrid(gridStartPosition)
  














  //! bracket should be yellow
}


window.addEventListener('DOMContentLoaded', init);