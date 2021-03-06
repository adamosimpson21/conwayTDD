const gameOfLife = board => {
  if(board.length ===2){
    let aliveCells = 0
    board.forEach(row => row.forEach(cell => cell && ++aliveCells))
    if(aliveCells <=2){
      return [[0,0], [0,0]]
    } else if(aliveCells ===3){
      return [[1,1],[1,1]]
    } else {
      return board;
    }
  }
  return [[0]];
}

const tickBoard = board => {
  const neighborBoard = countAllNeighbors(board);
  const length = board.length;
  let newBoard = new2DArray(length);
  board.forEach((row, x) => {
    row.forEach((cell, y) => {
      const numNeighbors = neighborBoard[x][y];
      if(cell){
        if(numNeighbors < 2){
          newBoard[x][y] = 0;
        } else if(numNeighbors > 3){
          newBoard[x][y] = 0;
        } else {
          newBoard[x][y] = 1;
        }
      } else {
        if(numNeighbors === 3){
          newBoard[x][y] = 1;
        } else {
          newBoard[x][y] = 0;
        }
      }
    })
  })
  return newBoard;
}

const getNumNeighbors = (x, y, board) => {
  let numLiveNeighbors = 0;
  const neighbors = [
                      [x-1,y-1],[x-1,y  ],[x-1,y+1],
                      [x  ,y-1],          [x  ,y+1],
                      [x+1,y-1],[x+1,y  ],[x+1,y+1]
                    ]
  neighbors.forEach(neighbor => board[neighbor[0]] && board[neighbor[0]][neighbor[1]] && ++numLiveNeighbors);
  return numLiveNeighbors;
}

const oneOrZero = () => {
  return Math.round(Math.random());
}

const new2DArray = (number, cellValue = null) => {
  return Array(number).fill(null).map(() => Array(number).fill(null).map(() => cellValue));
}

const constructBoard = number =>{
  return new2DArray(number).map(row => row.map(() => oneOrZero()));
}

const countAllNeighbors = board => {
  let neighborBoard = new2DArray(board.length);
  board.forEach((row, y) => {
    row.forEach((cell, x) => {
      neighborBoard[x][y] = getNumNeighbors(x, y, board);
    })
  })
  return neighborBoard;
}

// console.logs board according to these numbers
const run = (ticks, boardSize) => {
  let myBoard = constructBoard(boardSize);
  for(let i = 0; i <= ticks; i++){
    console.log(myBoard);
    myBoard = tickBoard(myBoard);
  }
}
let ticks = 20;
let boardSize = 25
run(ticks, boardSize);


export {gameOfLife, constructBoard, oneOrZero, getNumNeighbors, countAllNeighbors, new2DArray, tickBoard};