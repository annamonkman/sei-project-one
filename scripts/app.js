function init() {
  console.log('CONTENT LOADED')

  // * Variables
  const grid = document.querySelector('.grid')

  const width = 14
  const height = 16
  const cellCount = width * height
  const cells = []

  const snailClass = 'snail'
  const snailStartPosition = 0
  // let snailCurrentPosition = 0

  // * Make a grid
  function createGrid(snailStartPosition) {
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

  // * Move Snail

  // * Event Listeners

  createGrid(snailStartPosition)














  //! bracket should be yellow
}


window.addEventListener('DOMContentLoaded', init);