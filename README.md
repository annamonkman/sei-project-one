# Project One - Frogger

## Overview
This was my first project on General Assembly’s Software Engineering Immersive course. The goal was to build a functioning browser-based game with Vanilla JavaScript in a week.

![game-screenshot](./images/frogger-game-img-1.png)

## Technologies Used
* HTML5
*	CSS3
* JavaScript (ES6)
*	Git
*	GitHub
*	Procreate on iPad

## Brief
The idea of Frogger is to guide a family of frogs across a road and a river to their homes at the top of the screen.
To make things more challenging there are numerous moving obstacles that the frogs must avoid to reach their destination.
The game must be playable for one player and the obstacles should be auto generated.
I wanted to give the game my own twist so chose to feature a snail instead of a frog, with the goal to help the snail get across a post-apocalyptic-esque wasteland with rats instead of cars and crisp packets and branches for the boards.  

## Approach Taken

### Day 1: Plan
Being new to JavaScript I wanted to keep my game simple and focus on meeting the brief requirements as well as I could. I started by wireframing the visuals and pseudo-coding the MVP. My MVP was to move one snail across the grid to the pipes at the top, with start game, restart game, win and lose functionality and collisions. I planned my time so that I would aim to reach the MVP after 5 days then have 2 days remaining for bugs and styling. 

### Day 2: creating the grid and moving the snail
I started by creating the grid that would house the game. I wrote a function createGrid(), using a for-loop to create divs (cells) and pushed these to an empty array, which was then appended to the parent div. 
```javascript
  const grid = document.querySelector('.grid')

  const width = 14
  const height = 13
  const cellCount = width * height
  const cells = []

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
```

I then added a snail class to the cell at the snail start position. When adding classes for each item I gave these a background colour in CSS so it was made clear visually where they were positioned. To allow the user to move the snail I added an event listener to the keyup event, and a 